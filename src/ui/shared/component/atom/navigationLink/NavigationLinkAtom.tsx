import React from "react";
import { Link } from "react-router-dom";
import "./NavigationLinkAtom.scss";

export type NavigationLinkAtomProps = {
	to: string;
	label: string;
	isSelected: boolean;
};

export const NavigationLinkAtom = ({ to, label, isSelected }: NavigationLinkAtomProps) => {
	const ariaCurrent = isSelected ? "page" : "false";

	return (
		<Link to={to} aria-current={ariaCurrent} className="link">
			{label}
		</Link>
	);
};
