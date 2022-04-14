import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ButtonAtom } from "../atom/button/ButtonAtom";
import { NavigationLinkListMolecule } from "./../molecule/navigationLinkList/NavigationLinkListMolecule";
import "./NavigationMenuOrganism.scss";

export const NavigationMenuOrganism = () => {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);

	const handleOnExpandClick = () => {
		setIsExpanded((value) => !value);
	};

	const navigationLinksClassName = `navigation__links ${isExpanded ? "navigation__links--expanded" : ""}`;

	return (
		<div className="navigation">
			<div className="navigation__header">
				<h2 id="main-menu" className="navigation__title">
					Main menu
				</h2>
				<div className="navigation__button">
					<ButtonAtom
						onClick={handleOnExpandClick}
						size="sm"
						ariaExpanded={isExpanded}
						ariaHaspopup={true}
						ariaControls="main-menu"
					>
						Expand
					</ButtonAtom>
				</div>
			</div>
			<nav aria-labelledby="main-menu" className={navigationLinksClassName}>
				<NavigationLinkListMolecule />
			</nav>
		</div>
	);
};
