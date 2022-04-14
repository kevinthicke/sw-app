import { PromiseEither } from "../../../shared/domain/dataType/PromisedEither";
import { APIError } from "../../../shared/domain/exception/ApiError";
import { MapperError } from "../../../shared/domain/exception/MapperError";
import { Page } from "../../../shared/domain/valueObject/Page";
import { Starship } from "../entity/Starship";

export interface StarshipRepository {
  getAll({ page, keyword }: { page: number, keyword: string }): PromiseEither<APIError | MapperError, Page<Starship>>;
  // searchByName({ keyword }: { keyword: string }): PromiseEither<Error, Page<Starship>>;
}