import { Page } from "../../../../shared/domain/valueObject/Page";
import { Starship } from "../Starship";

//NOTE: Object Mother pattern https://martinfowler.com/bliki/ObjectMother.html
export const StarshipMother = {
  newStarship(starship: Partial<Starship>): Starship {
    const defaultStarship: Starship = {
      id: "1",
      name: "Death Star",
      model: "DS-1 Orbital Battle Station",
      length: "120000",
      costInCredits: "1000000000000",
      cargoCapacity: "1000000000000",
      consumables: "3 years",
      maxAtmostoheringSpeed: "n/a"
    }

    return {
      ...defaultStarship,
      ...starship
    }
  },
  newStarshipList() {
    const starshipList: Starship[] = [
      {
        id: "1",
        name: "Death Star",
        model: "DS-1 Orbital Battle Station",
        length: "120000",
        costInCredits: "1000000000000",
        cargoCapacity: "1000000000000",
        consumables: "3 years",
        maxAtmostoheringSpeed: "n/a"
      },
      {
        id: "2",
        name: "CR90 corvette",
        model: "CR90 corvette",
        length: "30000",
        costInCredits: "1400000000000",
        cargoCapacity: "1500000000000",
        consumables: "5 years",
        maxAtmostoheringSpeed: "n/a"
      },
      {
        id: "3",
        name: "Star Destroyer",
        model: "Imperial I-class Star Destroyer",
        length: "16000",
        costInCredits: "800000000000",
        cargoCapacity: "900000000000",
        consumables: "2 years",
        maxAtmostoheringSpeed: "975"
      },
    ]

    return starshipList
  },
  newStarshipPage(): Page<Starship> {
    return {
      totalElements: 10,
      elements: StarshipMother.newStarshipList(),
      currentPage: 2,
      existsNextPage: true,
      existsPrevPage: true,
    }
  }
}