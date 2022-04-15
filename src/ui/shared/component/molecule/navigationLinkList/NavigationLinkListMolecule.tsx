import React from "react";
import { Link, Routes, useLocation } from "react-router-dom";
import { AppRouteName } from "../../../../../core/shared/domain/valueObject/AppRoute";
import { NavigationLinkAtom } from "../../atom/navigationLink/NavigationLinkAtom";
import { makeRoutesService } from "../../../../../core/shared/domain/service/RoutesService";
import "./NavigationLinkListMolecule.scss";

type NavigationLinkListMoleculeProps = {
	onSelectedLink: () => any;
};

export const NavigationLinkListMolecule = ({ onSelectedLink }: NavigationLinkListMoleculeProps) => {
	const { getHome, getChildrenByName } = makeRoutesService();
	const appRouteList = [getHome(), ...getChildrenByName(AppRouteName.HOME)];
	const { pathname } = useLocation();

	const isPathSelected = (path: string) => path === pathname;
	const getLinkClassName = (path: string) => {
		return `navigation-links__item ${isPathSelected(path) ? "navigation-links__item--selected" : ""}`;
	};

	return (
		<ul className="navigation-links">
			{appRouteList.map(({ path, label }) => (
				<li key={path} className={getLinkClassName(path)}>
					<NavigationLinkAtom to={path} label={label} isSelected={isPathSelected(path)} onClick={onSelectedLink} />
				</li>
			))}
		</ul>
	);
};
