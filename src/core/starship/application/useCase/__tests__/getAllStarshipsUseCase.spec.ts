import { createEmptyPage } from "../../../../shared/domain/valueObject/Page";
import { StarshipRepository } from "../../../domain/repository/StarshipRepository";
import { StarshipRepositoryFactory } from "../../../infrastructure/repository/StarshipRepositoryFactory";
import { makeGetAllStarshipsUseCase } from "../getAllStarshipsUseCase";

export { };

describe("GetAllStarshipsUsecase", () => {
	let starshipRepository: StarshipRepository = StarshipRepositoryFactory.getStarshipMockRepository();
	let getAllStarshipsUseCase: ReturnType<typeof makeGetAllStarshipsUseCase>

	beforeEach(() => {
		starshipRepository.getAll = jest.fn();
	})

	describe('When is called with a "keyword" and page with value "1"', () => {
		describe('And is called again with the same "keyword" and page with value "2"', () => {
			it('Should call "getAll" repository with value "2" in param "page"', async () => {
				// Arrange
				getAllStarshipsUseCase = makeGetAllStarshipsUseCase({ starshipRepository })

				// Act
				const [page, keyword] = [1, 'test']
				await getAllStarshipsUseCase({ page, keyword });

				const [newPage, newKeyword] = [2, 'test']
				await getAllStarshipsUseCase({ page: newPage, keyword: newKeyword })

				// Assert
				const expected = { page: 2, keyword: 'test' }
				expect(starshipRepository.getAll).toHaveBeenLastCalledWith(expected)
			})
		})

		describe('And is called again with other "keyword"', () => {
			it('Should call "getAll" repository with value "1" in param "page"', async () => {
				// Arrange
				getAllStarshipsUseCase = makeGetAllStarshipsUseCase({ starshipRepository })

				// Act
				const [page, keyword] = [2, 'test']
				await getAllStarshipsUseCase({ page, keyword });

				const [newPage, newKeyword] = [2, 'test 1']
				await getAllStarshipsUseCase({ page: newPage, keyword: newKeyword })

				// Assert
				const expected = { page: 1, keyword: 'test 1' }
				expect(starshipRepository.getAll).toHaveBeenLastCalledWith(expected)
			})
		})
	});

	describe('When is called with a "page" param with value less than "1"', () => {
		it('Should not call "starshipRepository.getAll"', async () => {
			// Arrange
			getAllStarshipsUseCase = makeGetAllStarshipsUseCase({ starshipRepository })

			// Act
			const [page, keyword] = [0, 'test']
			await getAllStarshipsUseCase({ page, keyword });

			// Assert
			expect(starshipRepository.getAll).not.toHaveBeenCalled();

		})
		it('Should return a promise of an Either of empty page', async () => {
			// Arrange
			getAllStarshipsUseCase = makeGetAllStarshipsUseCase({ starshipRepository })

			// Act
			const [page, keyword] = [0, 'test']
			const result = await getAllStarshipsUseCase({ page, keyword });

			// Assert
			const expected = { error: null, ok: createEmptyPage() };
			expect(result).toEqual(expected);
		})
	})
});
