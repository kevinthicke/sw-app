import React from "react";
import { Link, Routes, useLocation } from "react-router-dom";
import { AppRouteName } from "../../../../../core/shared/domain/valueObject/AppRoute";
import { NavigationLinkAtom } from "../../atom/navigationLink/NavigationLinkAtom";
import { makeRoutesService } from "./../../../../../core/shared/domain/service/routesService";
import "./NavigationLinkListMolecule.scss";

export const NavigationLinkListMolecule = () => {
	const appRoutesService = makeRoutesService();
	const appRouteList = appRoutesService.getChildrenByName(AppRouteName.HOME);
	const { pathname } = useLocation();

	const isPathSelected = (path: string) => path === pathname;
	const getLinkClassName = (path: string) => {
		return `navigation-links__item ${isPathSelected(path) ? "navigation-links__item--selected" : ""}`;
	};

	return (
		<ul className="navigation-links">
			{appRouteList.map(({ path, label }) => (
				<li className={getLinkClassName(path)}>
					<NavigationLinkAtom key={path} to={path} label={label} isSelected={isPathSelected(path)} />
				</li>
			))}
		</ul>
	);
};
