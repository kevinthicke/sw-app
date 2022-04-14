import { PromiseEither } from "../../../shared/domain/dataType/PromisedEither";
import { createPageFrom, Page } from "../../../shared/domain/valueObject/Page";
import { Starship } from "../../domain/entity/Starship";
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
