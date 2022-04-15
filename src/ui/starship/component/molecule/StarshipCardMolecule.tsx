import { memo } from "react";
import { Starship } from "../../../../core/starship/domain/entity/Starship";
import { CardAtom } from "../../../shared/component/atom/card/CardAtom";
import { ImageAtom } from "../../../shared/component/atom/image/ImageAtom";
import "./StarshipCardMolecule.scss";

type StarshipCardProps = {
	starship: Starship;
};

export const StarshipCardMolecule = memo(({ starship }: StarshipCardProps) => {
	return (
		<CardAtom ariaLabel={starship.id}>
			<div className="starship-card">
				<ImageAtom
					src={"/static/images/cr90corvette.png"}
					webpSrc={"/static/images/cr90corvette.webp"}
					alt={`${starship.name} image`}
				/>
				<h2 id={starship.id} className="starship-card__title">
					{starship.name}
				</h2>
				<h3 className="starship-card__subtitle">{starship.model}</h3>
				{/* <ul>
					<li>Consumables: {starship.consumables}</li>
					<li>Lenght: {starship.length}</li>
				</ul>
				<span>{starship.costInCredits} credits</span> */}
			</div>
		</CardAtom>
	);
});
