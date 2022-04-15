import { memo, useState } from "react";
import { InputAtom } from "../../../shared/component/atom/input/InputAtom";
import "./StarshipFilterMolecule.scss";

type StarshipFilterMoleculeProps = {
	value: string;
	onSearchStarshipByName: (keyword: string) => any;
};

export const StarshipFilterMolecule = memo(({ value, onSearchStarshipByName }: StarshipFilterMoleculeProps) => {
	const [searchKeyword, setSearchKeyword] = useState<string>(value);

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchKeyword(event.target.value);
	};

	const handleOnClick = () => {
		onSearchStarshipByName(searchKeyword);
	};

	return (
		<div className="filter">
			<div className="filter__search-box">
				<InputAtom value={searchKeyword} label="Looking for a starship?" onChange={handleOnChange} />
			</div>

			<InputAtom type="button" value="Search!" onClick={handleOnClick} />
		</div>
	);
});
