import React from "react";
import { Link, Routes, useLocation } from "react-router-dom";
import { AppRouteName } from "../../../../../core/shared/domain/valueObject/AppRoute";
import { NavigationLinkAtom } from "../../atom/navigationLink/NavigationLinkAtom";
import { makeRoutesService } from "./../../../../../core/shared/domain/service/routesService";

export const NavigationLinkListMolecule = () => {
	const appRoutesService = makeRoutesService();
	const appRouteList = appRoutesService.getChildrenByName(AppRouteName.HOME);
	const { pathname } = useLocation();

	const isPathSelected = (path: string) => path === pathname;

	return (
		<ul>
			{appRouteList.map(({ path, label }) => (
				<NavigationLinkAtom key={path} to={path} label={label} isSelected={isPathSelected(path)} />
			))}
		</ul>
	);
};
