import { Starship } from "../../../../core/starship/domain/entity/Starship";
import { StarshipCardMolecule } from "../molecule/StarshipCardMolecule";

type StarshipCardListProps = {
	starshipList: Starship[];
};

export const StarshipCardListOrganism = ({ starshipList }: StarshipCardListProps) => {
	return (
		<div>
			<h1 id="starship-list">Starships</h1>
			<ul aria-labelledby="starship-list">
				{starshipList.map((starship) => (
					<li key={starship.id}>
						<StarshipCardMolecule starship={starship} />
					</li>
				))}
			</ul>
		</div>
	);
};
