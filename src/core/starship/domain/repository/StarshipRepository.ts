import { PromiseEither } from "../../../shared/domain/dataType/PromisedEither";
import { Page } from "../../../shared/domain/valueObject/Page";
import { Starship } from "../entity/Starship";

export interface StarshipRepository {
  getAll({ page, keyword }: { page: number, keyword: string }): PromiseEither<Error, Page<Starship>>;
  // searchByName({ keyword }: { keyword: string }): PromiseEither<Error, Page<Starship>>;
}