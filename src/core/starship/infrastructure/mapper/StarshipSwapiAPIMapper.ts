import { dasherize } from "../../../shared/domain/utils/dasherize"
import { createPageFrom, Page } from "../../../shared/domain/valueObject/Page"
import { SwapiAPIPage } from "../../../shared/infrastructure/dto/SwapiAPIPage"
import { Starship } from "../../domain/entity/Starship"
import { StarshipSwapiAPIDTO } from "../dto/StarshipSwapiAPIDto"

export const starshipSwapiAPIMapper = {
  toDomain({ created, name, cargo_capacity, consumables, cost_in_credits, length, max_atmosphering_speed, model }: StarshipSwapiAPIDTO): Starship {
    return {
      id: `${dasherize(name)}-${new Date(created).getTime()}`,
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
  toDomainPage({ count, results, currentPage }: SwapiAPIPage<StarshipSwapiAPIDTO> & { currentPage: number }): Page<Starship> {
    return createPageFrom({
      totalElements: count,
      currentPage: currentPage,
      content: starshipSwapiAPIMapper.toDomainList(results),
    })
  }
}