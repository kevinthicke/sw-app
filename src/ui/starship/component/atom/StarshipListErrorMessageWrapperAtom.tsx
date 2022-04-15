import { memo } from "react";
import { Link } from "react-router-dom";
import { AppRoutePath } from "../../../../core/shared/domain/valueObject/AppRoute";

type StarshipListErrorMessageWrapperAtomProps = {
	children: any;
	hasError: boolean;
	currentPage: number;
};

export const StarshipListErrorMessageWrapperAtom = memo(
	({ children, hasError, currentPage }: StarshipListErrorMessageWrapperAtomProps) => {
		return hasError ? (
			<div>
				<h2>There are not starships at page {currentPage}</h2>
				<Link to={AppRoutePath.STARSHIPS_LIST}>Go to first page</Link>
			</div>
		) : (
			children
		);
	}
);
