import { Env } from "../../../shared/domain/config/Env";
import { HttpClientFactory } from "../../../shared/infrastructure/httpClient/HttpClientFactory"
import { makeStarshipMockRepository } from "./StarshipMockRepository";
import { makeStarshipSwapiAPIRepository } from "./StarshipSwapiAPIRepository";

export const StarshipRepositoryFactory = {
  get() {
    const getRepositoryHandler = {
      [Env.DEVELOPMENT]: this.getStarshipSwapiAPIRepository(),
      [Env.PRODUCTION]: this.getStarshipSwapiAPIRepository(),
      [Env.TEST]: this.getStarshipMockRepository()
    }

    return getRepositoryHandler[process.env.NODE_ENV] ?? this.getStarshipSwapiAPIRepository();
  },
  getStarshipMockRepository() {
    return makeStarshipMockRepository();
  },
  getStarshipSwapiAPIRepository() {
    const httpClient = HttpClientFactory.get();
    return makeStarshipSwapiAPIRepository({ httpClient })
  }
}