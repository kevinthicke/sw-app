import { Link } from "react-router-dom";
import { AppRoutePath } from "../../../../core/shared/domain/valueObject/AppRoute";

export const HomePage = () => {
	return (
		<div>
			<h1>Welcome to Imperial Destroyer Center App</h1>
			<p>
				Navigate to <Link to={AppRoutePath.STARSHIPS_LIST}>Starship</Link> to see content
			</p>
		</div>
	);
};
