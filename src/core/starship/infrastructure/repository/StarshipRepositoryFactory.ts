import { HttpClientFactory } from "../../../shared/infrastructure/httpClient/HttpClientFactory"
import { makeStarshiptAPIRepository } from "./StarshipAPIRepository";

export const StarshipRepositoryFactory = {
  get() {
    const httpClient = HttpClientFactory.get();
    return makeStarshiptAPIRepository({ httpClient })
  }
}