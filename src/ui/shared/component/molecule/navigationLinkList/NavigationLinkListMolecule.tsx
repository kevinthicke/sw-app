import React from "react";
import { Link, Routes } from "react-router-dom";
import { AppRouteName } from "../../../../../core/shared/domain/valueObject/AppRoute";
import { NavigationLinkAtom } from "../../atom/navigationLink/NavigationLinkAtom";
import { makeRoutesService } from "./../../../../../core/shared/domain/service/routesService";

export const NavigationLinkListMolecule = () => {
	const appRoutesService = makeRoutesService();
	const appRouteList = appRoutesService.getChildrenByName(AppRouteName.HOME);

	return (
		<nav>
			<ul>
				{appRouteList.map(({ path, label }) => (
					<NavigationLinkAtom to={path} label={label} />
				))}
			</ul>
		</nav>
	);
};
