import React, { memo } from "react";
import { Link } from "react-router-dom";
import "./NavigationLinkAtom.scss";

export type NavigationLinkAtomProps = {
	to: string;
	label: string;
	isSelected: boolean;
	onClick?: () => any;
};

export const NavigationLinkAtom = memo(({ to, label, isSelected, onClick }: NavigationLinkAtomProps) => {
	const ariaCurrent = isSelected ? "page" : "false";

	return (
		<Link to={to} aria-current={ariaCurrent} className="link" onClick={onClick}>
			{label}
		</Link>
	);
});
