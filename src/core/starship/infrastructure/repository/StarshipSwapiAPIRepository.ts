import { HttpClient } from "../../../shared/domain/httpClient/HttpClient";
import { BASE_URL } from "../../../shared/infrastructure/constants/baseURL";
import { SwapiAPIPage } from "../../../shared/infrastructure/dto/SwapiAPIPage";
import { StarshipRepository } from "../../domain/repository/StarshipRepository";
import { StarshipSwapiAPIDTO } from "../dto/StarshipSwapiAPIDto";
import { starshipSwapiAPIMapper } from "../mapper/StarshipSwapiAPIMapper";

type StarshipAPIRepositoryDependencies = {
  httpClient: HttpClient
}

export const makeStarshipSwapiAPIRepository = ({ httpClient }: StarshipAPIRepositoryDependencies): StarshipRepository => {
  const URL = `${BASE_URL}/starships`

  return {
    async getAll({ page = 1, keyword = '' }) {
      const params: Record<string, string> = !!keyword
        ? { page: `${page}`, search: keyword }
        : { page: `${page}` }

      try {
        const starshipList = await httpClient
          .get<SwapiAPIPage<StarshipSwapiAPIDTO>>({
            url: URL,
            params
          })
          .then(response => response.data)
          .then(data => starshipSwapiAPIMapper.toDomainPage({ ...data, currentPage: page }));
        return { error: null, ok: starshipList }

      } catch (error) {
        return { error: error as Error, ok: null }
      }
    }
  }
}