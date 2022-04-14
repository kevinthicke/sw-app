import { StarshipMother } from "../../domain/entity/__mocks__/StarshipMother";
import { StarshipRepository } from "../../domain/repository/StarshipRepository";

export const makeStarshipMockRepository = (): StarshipRepository => ({
  getAll() {
    return Promise.resolve({
      error: null,
      ok: StarshipMother.newStarshipPage()
    })
  }
})
