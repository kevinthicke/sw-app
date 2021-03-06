import { Outlet } from "react-router-dom";
import { LoadingProvider } from "../../context/loading/LoadingProvider";
import { FooterAtom } from "../atom/footer/FooterAtom";
import { LoadingContainer } from "../atom/loading/LoadingContainer";
import { MainHeader } from "../molecule/mainHeader/MainHeader";
import { NavigationMenuOrganism } from "./../organism/NavigationMenuOrganism";
import "./MainLayout.scss";

export const MainLayout = () => {
	return (
		<LoadingProvider>
			<LoadingContainer />
			<div className="main-layout">
				<header className="main-layout__header">
					<MainHeader />
				</header>
				<div className="main-layout__navigation-menu">
					<NavigationMenuOrganism />
				</div>
				<div className="main-layout__content">
					<main className="main-layout__content__main">
						<Outlet />
					</main>
					<footer className="main-layout__footer">
						<FooterAtom />
					</footer>
				</div>
			</div>
		</LoadingProvider>
	);
};
