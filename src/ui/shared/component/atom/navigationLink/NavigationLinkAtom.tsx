import React from "react";
import { Link } from "react-router-dom";

export type NavigationLinkAtomProps = {
	to: string;
	label: string;
};

export const NavigationLinkAtom = ({ to, label }: NavigationLinkAtomProps) => {
	return (
		<li>
			<Link to={to}>{label}</Link>;
		</li>
	);
};
