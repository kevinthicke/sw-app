import { isEmpty } from "../../../shared/domain/utils/isEmpty";
import { StarshipRepository } from "../../domain/repository/StarshipRepository"
import { StarshipRepositoryFactory } from "../../infrastructure/repository/StarshipRepositoryFactory";

type GetAllStarshipsUseCase = {
  starshipRepository: StarshipRepository;
}
const DEFAULT_PAGE_PARAM = 1;

export const makeGetAllStarshipsUseCase = ({ starshipRepository }: GetAllStarshipsUseCase) => {
  let lastKeyword = '';

  return ({ page = 1, keyword = '' }: { page: number, keyword: string }) => {
    if (lastKeyword === keyword) {
      return starshipRepository.getAll({ page, keyword });
    }


    lastKeyword = keyword;
    return starshipRepository.getAll({ page: DEFAULT_PAGE_PARAM, keyword });
  }
}


const starshipRepository = StarshipRepositoryFactory.get();
export const getAllStarshipsUseCase = makeGetAllStarshipsUseCase({ starshipRepository });
