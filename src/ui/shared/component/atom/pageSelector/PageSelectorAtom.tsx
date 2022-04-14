import { useEffect, useState } from "react";
import { createArrayOfNulls } from "../../../../../core/shared/domain/utils/createArrayOfNulls";
import { dasherize } from "../../../../../core/shared/domain/utils/dasherize";
import { Page } from "../../../../../core/shared/domain/valueObject/Page";
import { ButtonAtom } from "../button/ButtonAtom";

type PageSelectorAtomProps = {
	page: Page<any>;
	ariaLabel: string;
	onPageClick: (pageNumber: number) => any;
};

export const PageSelectorAtom = ({ page, ariaLabel, onPageClick }: PageSelectorAtomProps) => {
	return (
		<nav role="navigation" aria-label={ariaLabel}>
			<ul>
				{createArrayOfNulls(page.totalPages)
					.map((_, index) => index + 1)
					.map((number) => (
						<ButtonAtom key={`${number}-${ariaLabel}`} role="link" label={number} onClick={() => onPageClick(number)} />
					))}
			</ul>
		</nav>
	);
};
