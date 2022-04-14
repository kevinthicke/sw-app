import { useLocation } from "react-router-dom";
import { NavigationLinkListMolecule } from "./../molecule/navigationLinkList/NavigationLinkListMolecule";
import "./NavigationMenuOrganism.scss";

export const NavigationMenuOrganism = () => {
	return (
		<nav className="navigation" aria-labelledby="main-menu">
			<div className="navigation__header">
				<h2 id="main-menu" className="navigation__title">
					Main menu
				</h2>
				<button>Expand</button>
			</div>
			<NavigationLinkListMolecule />
		</nav>
	);
};
