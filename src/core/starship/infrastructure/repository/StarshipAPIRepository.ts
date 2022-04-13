import { HttpClient } from "../../../shared/domain/httpClient/HttpClient";
import { BASE_URL } from "../../../shared/infrastructure/constants/baseURL";
import { StartshipRepository } from "../../domain/repository/StarshipRepository";
import { StarshipApiDTO } from "../dto/StarshipAPIDto";
import { starshipAPIMapper } from "../mapper/StarshipAPIMapper";

type StarshipAPIRepositoryDependencies = {
  httpClient: HttpClient
}

export const makeStarshiptAPIRepository = ({ httpClient }: StarshipAPIRepositoryDependencies): StartshipRepository => {
  const URL = `${BASE_URL}/starships`

  return {
    async getAll() {
      try {
        const starshipList = await httpClient
          .get<StarshipApiDTO[]>({ url: URL })
          .then(response => response.data)
          .then(starshipAPIMapper.toDomainList);
        return { error: null, ok: starshipList }
      } catch (error) {
        return { error: error as Error, ok: null }
      }
    }
  }
}