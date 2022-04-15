import { Page } from "../../../shared/domain/valueObject/Page";
import { Starship } from "../../domain/entity/Starship";
import { StarshipMother } from "../../domain/entity/__mocks__/StarshipMother";
import { StarshipRepository } from "../../domain/repository/StarshipRepository";

const starshipDefaultFirstList: Starship[] = StarshipMother.newStarshipDefaultList();
const starshipDefaultSecondList: Starship[] = [StarshipMother.newStarship({})]

export const STARSHIPS_AT_FIRST_PAGE: Page<Starship> = {
  totalElements: starshipDefaultFirstList.length + starshipDefaultSecondList.length,
  currentPage: 1,
  elements: starshipDefaultFirstList,
  existsPrevPage: false,
  existsNextPage: true
};

export const STARSHIPS_AT_SECOND_PAGE: Page<Starship> = {
  totalElements: starshipDefaultFirstList.length + starshipDefaultSecondList.length,
  currentPage: 2,
  elements: starshipDefaultSecondList,
  existsPrevPage: true,
  existsNextPage: false
}

export const makeStarshipMockRepository = (): StarshipRepository => ({
  getAll({ page }) {
    if (page === 1) {
      return Promise.resolve({
        error: null, ok: STARSHIPS_AT_FIRST_PAGE
      })
    }

    if (page === 2) {
      return Promise.resolve({
        error: null, ok: STARSHIPS_AT_SECOND_PAGE
      })
    }

    return Promise.resolve({
      error: null, ok: STARSHIPS_AT_FIRST_PAGE
    })

  }
})
