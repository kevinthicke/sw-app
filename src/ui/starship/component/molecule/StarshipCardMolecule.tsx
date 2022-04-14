import { Starship } from "../../../../core/starship/domain/entity/Starship";

type StarshipCardProps = {
	starship: Starship;
};

export const StarshipCardMolecule = ({ starship }: StarshipCardProps) => {
	return <div>{starship.name}</div>;
};
