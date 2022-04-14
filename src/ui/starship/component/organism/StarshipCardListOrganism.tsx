import { Starship } from "../../../../core/starship/domain/entity/Starship";
import { CardAtom } from "../../../shared/component/atom/card/CardAtom";
import { StarshipCardMolecule } from "../molecule/StarshipCardMolecule";
import "./StarshipCardListOrganism.scss";

type StarshipCardListProps = {
	starshipList: Starship[];
};

export const StarshipCardListOrganism = ({ starshipList }: StarshipCardListProps) => {
	return (
		<div className="starship-card-list">
			<h1 id="starship-list">Starships</h1>
			<ul aria-labelledby="starship-list" className="starship-card-list__list">
				{starshipList.map((starship) => (
					<li key={starship.id} className="starship-card-list__list__item">
						<StarshipCardMolecule starship={starship} />
					</li>
				))}
			</ul>
		</div>
	);
};
