import { PromiseEither } from "../../../shared/domain/dataType/PromisedEither";
import { createEmptyPage, isCurrentPageValid, Page } from "../../../shared/domain/valueObject/Page";
import { Starship } from "../../domain/entity/Starship";
import { StarshipRepository } from "../../domain/repository/StarshipRepository";
import { StarshipRepositoryFactory } from "../../infrastructure/repository/StarshipRepositoryFactory";

type GetAllStarshipsUseCase = {
  starshipRepository: StarshipRepository;
}

export const makeGetAllStarshipsUseCase = ({ starshipRepository }: GetAllStarshipsUseCase) => {
  const DEFAULT_PAGE_PARAM = 1;
  let lastKeyword = '';

  return ({ page = 1, keyword = '' }: { page: number, keyword: string }): PromiseEither<Error, Page<Starship>> => {
    if (!isCurrentPageValid(page)) {
      return Promise.resolve({ error: null, ok: createEmptyPage() })
    }

    if (lastKeyword === keyword) {
      return starshipRepository.getAll({ page, keyword });
    }


    lastKeyword = keyword;
    return starshipRepository.getAll({ page: DEFAULT_PAGE_PARAM, keyword });
  }
}


const starshipRepository = StarshipRepositoryFactory.get();
export const getAllStarshipsUseCase = makeGetAllStarshipsUseCase({ starshipRepository });
