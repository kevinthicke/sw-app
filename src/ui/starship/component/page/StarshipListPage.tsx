import { StarshipFilterContainer } from "../molecule/StarshipFilterContainer";
import { StarshipCardListContainer } from "../organism/StarshipCardListContainer";


export const StarShipListPage = () => {
	return (
		<div>
			<StarshipFilterContainer />
			<StarshipCardListContainer />
		</div>
	);
};
