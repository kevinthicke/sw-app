import React from "react";
import { Link } from "react-router-dom";

export type NavigationLinkAtomProps = {
	to: string;
	label: string;
	isSelected: boolean;
};

export const NavigationLinkAtom = ({ to, label, isSelected }: NavigationLinkAtomProps) => {
	const ariaCurrent = isSelected ? "page" : "false";

	return (
		<li>
			<Link to={to} aria-current={ariaCurrent}>
				{label}
			</Link>
			;
		</li>
	);
};
