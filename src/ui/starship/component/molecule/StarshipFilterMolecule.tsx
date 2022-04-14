import { useState } from "react";
import { ButtonAtom } from "../../../shared/component/atom/button/ButtonAtom";
import { InputAtom } from "../../../shared/component/atom/input/InputAtom";

type StarshipFilterMoleculeProps = {
	value: string;
	onSearchStarshipByName: (keyword: string) => any;
};

export const StarshipFilterMolecule = ({ value, onSearchStarshipByName }: StarshipFilterMoleculeProps) => {
	const [searchKeyword, setSearchKeyword] = useState<string>(value);

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchKeyword(event.target.value);
	};

	const handleOnClick = () => {
		onSearchStarshipByName(searchKeyword);
	};

	return (
		<div>
			<InputAtom value={searchKeyword} label="Search" onChange={handleOnChange} />
			<InputAtom type="button" value="Search!" onClick={handleOnClick} />
		</div>
	);
};
