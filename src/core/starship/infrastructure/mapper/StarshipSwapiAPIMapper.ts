import { MapperError } from "../../../shared/domain/exception/MapperError"
import { Page } from "../../../shared/domain/valueObject/Page"
import { SwapiAPIPage } from "../../../shared/infrastructure/dto/SwapiAPIPage"
import { Starship } from "../../domain/entity/Starship"
import { StarshipSwapiAPIDTO } from "../dto/StarshipSwapiAPIDto"

export const starshipSwapiAPIMapper = {
  toDomain({ created, name, cargo_capacity, consumables, cost_in_credits, length, max_atmosphering_speed, model, url }: StarshipSwapiAPIDTO): Starship {
    return {
      id: url,
      name,
      cargoCapacity: cargo_capacity,
      consumables,
      costInCredits: cost_in_credits,
      length: length,
      maxAtmostoheringSpeed: max_atmosphering_speed,
      model
    }
  },
  toDomainList(starshipDTOList: StarshipSwapiAPIDTO[]): Starship[] {
    return starshipDTOList.map(starshipSwapiAPIMapper.toDomain)
  },
  toDomainPage({ count, results, currentPage, next, previous }: SwapiAPIPage<StarshipSwapiAPIDTO> & { currentPage: number }): Page<Starship> {
    try {
      return {
        totalElements: count,
        currentPage,
        elements: starshipSwapiAPIMapper.toDomainList(results),
        existsPrevPage: !!previous,
        existsNextPage: !!next,
      }
    } catch (e) {
      throw new MapperError({ message: (e as Error).message })
    }

  }
}