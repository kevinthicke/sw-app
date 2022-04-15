import { memo } from "react";
import { Starship } from "../../../../core/starship/domain/entity/Starship";
import { CardAtom } from "../../../shared/component/atom/card/CardAtom";
import { ImageAtom } from "../../../shared/component/atom/image/ImageAtom";
import { StarshipImageGenerator } from "../atom/StarshipImageGenerator";
import "./StarshipCardMolecule.scss";

type StarshipCardProps = {
	starship: Starship;
};

export const StarshipCardMolecule = memo(({ starship }: StarshipCardProps) => {
	return (
		<CardAtom ariaLabel={starship.id}>
			<div className="starship-card">
				<div className="starship-card__image">
					<StarshipImageGenerator starship={starship} />
				</div>
				<h2 id={starship.id} className="starship-card__title">
					{starship.name}
				</h2>
				<h3 className="starship-card__subtitle">{starship.model}</h3>
				<ul className="starship-card__info-list">
					<li className="starship-card__info-list__item">
						<span className="starship-card__info-list__item__key">Consumables:</span>
						<span className="starship-card__info-list__item__value">{starship.consumables}</span>
					</li>
					<li className="starship-card__info-list__item">
						<span className="starship-card__info-list__item__key">Lenght:</span>
						<span className="starship-card__info-list__item__value">{starship.length}</span>
					</li>
					<li className="starship-card__info-list__item">
						<span className="starship-card__info-list__item__key">Capacity:</span>
						<span className="starship-card__info-list__item__value">{starship.cargoCapacity}</span>
					</li>
				</ul>
				<span className="starship-card__credits">$ {starship.costInCredits} credits</span>
			</div>
		</CardAtom>
	);
});
