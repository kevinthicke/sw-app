import { Outlet, Route } from "react-router-dom";
import { StarShipListPage } from "../../../starship/component/page/StarshipListPage";
import { NavigationMenuOrganism } from "./../organism/NavigationMenuOrganism";

export const MainLayout = () => {
	return (
		<div>
			<NavigationMenuOrganism />
			<main>
				<Outlet />
			</main>
		</div>
	);
};
