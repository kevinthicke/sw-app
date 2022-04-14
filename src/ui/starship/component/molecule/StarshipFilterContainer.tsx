import { useSearchParams } from "react-router-dom";
import { StarshipRouteQueryParams } from "../../../../core/starship/domain/valueObject/StarshipRouteQueryParams";
import { StarshipFilterMolecule } from "./StarshipFilterMolecule";

export const StarshipFilterContainer = () => {
	const [search, setSearch] = useSearchParams();

	const value = search.get(StarshipRouteQueryParams.SEARCH) ?? "";
	const handleOnSearchStartship = (keyword: string) => {
		setSearch({ [StarshipRouteQueryParams.SEARCH]: keyword });
	};

	return <StarshipFilterMolecule value={value} onSearchStarshipByName={handleOnSearchStartship} />;
};
