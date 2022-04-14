import { Either } from "./Either";

export type PromiseEither<L extends Error, R> = Promise<Either<L, R>>