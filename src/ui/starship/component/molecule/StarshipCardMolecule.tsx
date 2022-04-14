import { Starship } from "../../../../core/starship/domain/entity/Starship";
import { CardAtom } from "../../../shared/component/atom/card/CardAtom";
import "./StarshipCardMolecule.scss";

type StarshipCardProps = {
	starship: Starship;
};

export const StarshipCardMolecule = ({ starship }: StarshipCardProps) => {
	return (
		<CardAtom>
			<div className="starship-card">
				<h3 className="starship-card__title">{starship.name}</h3>
				<h4 className="starship-card__subtitle">{starship.model}</h4>
				<ul>
					<li>Consumables: {starship.consumables}</li>
					<li>Lenght: {starship.length}</li>
				</ul>
				<span>{starship.costInCredits} credits</span>
			</div>
		</CardAtom>
	);
};
