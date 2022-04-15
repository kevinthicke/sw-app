import { memo } from "react";
import "./MainHeader.scss";

export const MainHeader = memo(() => {
	return (
		<header className="main-header">
			<span className="main-header__title">Imperial destroyer centers</span>
		</header>
	);
});
