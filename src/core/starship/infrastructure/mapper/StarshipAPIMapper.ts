import { Startship } from "../../domain/entity/Starship"
import { StarshipApiDTO } from "../dto/StarshipAPIDto"

export const starshipAPIMapper = {
  toDomain({ created, name, cargo_capacity, consumables, cost_in_credits, length, max_atmosphering_speed, model }: StarshipApiDTO): Startship {
    return {
      id: new Date(created).getTime(),
      name,
      cargoCapacity: +cargo_capacity,
      consumables,
      costInCredits: +cost_in_credits,
      length: +length,
      maxAtmostoheringSpeed: +max_atmosphering_speed,
      model
    }
  },
  toDomainList(starshipDTOList: StarshipApiDTO[]): Startship[] {
    return starshipDTOList.map(this.toDomain)
  }
}