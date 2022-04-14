import { Either } from "../../../shared/domain/dataType/Either";
import { PromiseEither } from "../../../shared/domain/dataType/PromisedEither";
import { isEmpty } from "../../../shared/domain/utils/isEmpty";
import { Page } from "../../../shared/domain/valueObject/Page";
import { Starship } from "../../domain/entity/Starship";
import { StarshipRepository } from "../../domain/repository/StarshipRepository"
import { StarshipRepositoryFactory } from "../../infrastructure/repository/StarshipRepositoryFactory";

type GetAllStarshipsUseCase = {
  starshipRepository: StarshipRepository;
}
const DEFAULT_PAGE_PARAM = 1;

export const makeGetAllStarshipsUseCase = ({ starshipRepository }: GetAllStarshipsUseCase) => {
  let lastKeyword = '';
  const MIN_PAGE_ALLOWED = 0;

  return ({ page = 1, keyword = '' }: { page: number, keyword: string }): PromiseEither<Error, Page<Starship>> => {
    if (page <= MIN_PAGE_ALLOWED) {
      return Promise.resolve({ error: null, ok: /* pagina vacía*/ })
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
