import { Either } from "./Either";

export type PromiseEither<L, R> = Promise<Either<L, R>>