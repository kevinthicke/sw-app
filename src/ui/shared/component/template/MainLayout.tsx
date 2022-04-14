import { Outlet, Route } from "react-router-dom";
import { StarShipListPage } from "../../../starship/component/page/StarshipListPage";
import { MainHeader } from "../molecule/mainHeader/MainHeader";
import { NavigationMenuOrganism } from "./../organism/NavigationMenuOrganism";
import "./MainLayout.scss";

export const MainLayout = () => {
	return (
		<div className="main-layout">
			<div className="main-layout__header">
				<MainHeader />
			</div>
			<div className="main-layout__navigation-menu">
				<NavigationMenuOrganism />
			</div>
			<main className="main-layout__main">
				<Outlet />
			</main>
		</div>
	);
};
