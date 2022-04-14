import { StarshipRepository } from "../../../domain/repository/StarshipRepository";
import { StarshipRepositoryFactory } from "../../../infrastructure/repository/StarshipRepositoryFactory";
import { makeGetAllStarshipsUseCase } from "../getAllStarshipsUseCase";

export { };

describe("GetAllStarshipsUsecase", () => {
	let starshipRepository: StarshipRepository = StarshipRepositoryFactory.getStarshipMockRepository();
	let getAllStarshipsUseCase: ReturnType<typeof makeGetAllStarshipsUseCase>

	beforeEach(() => {
		starshipRepository.getAll = jest.fn();
		getAllStarshipsUseCase = makeGetAllStarshipsUseCase({ starshipRepository })
	})

	describe('When is called with a "keyword"', () => {
		describe('And is called again with other "keyword"', () => {
			it('Should call "getAll" repository with value "1" in param "page"', async () => {
				const [page, keyword] = [2, 'test']
				await getAllStarshipsUseCase({ page, keyword });

				const [newPage, newKeyword] = [2, 'test 1']
				await getAllStarshipsUseCase({ page: newPage, keyword: newKeyword })

				const expected = { page: 1, keyword: 'test 1' }
				expect(starshipRepository.getAll).toHaveBeenLastCalledWith(expected)
			})
		})
	});
});
