import { StartshipRepository } from "../../domain/repository/StarshipRepository"
import { StarshipRepositoryFactory } from "../../infrastructure/repository/StarshipRepositoryFactory";

type GetAllStarshipsUseCase = {
  starshipRepository: StartshipRepository;
}

export const makeGetAllStarshipsUseCase = ({ starshipRepository }: GetAllStarshipsUseCase) => {
  return () => {
    return starshipRepository.getAll();
  }
}


const starshipRepository = StarshipRepositoryFactory.get();
export const getAllStarshipsUseCase = makeGetAllStarshipsUseCase({ starshipRepository });