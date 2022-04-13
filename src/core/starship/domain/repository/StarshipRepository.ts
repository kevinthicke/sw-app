import { Either } from "../../../shared/domain/dataType/Either";
import { Startship } from "../entity/Starship";

export interface StartshipRepository {
  getAll(): Promise<Either<Error, Startship[]>>;
}