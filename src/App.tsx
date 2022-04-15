import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { makeRoutesService } from "./core/shared/domain/service/RoutesService";
import { AppRoute, AppRouteName } from "./core/shared/domain/valueObject/AppRoute";
import { PeopleListPage } from "./ui/people/component/page/PeopleListPage";
import { PlanetListPage } from "./ui/planet/component/page/PlanetListPage";
import { ErrorBoundary } from "./ui/shared/component/atom/errorBoundary/ErrorBoundaty";
import { HomePage } from "./ui/shared/component/page/HomePage";
import { NotFoundPage } from "./ui/shared/component/page/NotFoundPage";
import { MainLayout } from "./ui/shared/component/template/MainLayout";
import { StarShipListPage } from "./ui/starship/component/page/StarshipListPage";
import { VehiclePage } from "./ui/vehicle/component/page/VehiclePage";

function App() {
	const { findBaseAppRouteByRouteName, getChildrenByName } = makeRoutesService();

	const homeAppRouteChildren = getChildrenByName(AppRouteName.HOME).map((appRoute) => {
		const componentHandler = {
			[AppRouteName.STARSHIPS_LIST]: <StarShipListPage />,
			[AppRouteName.PEOPLE_LIST]: <PeopleListPage />,
			[AppRouteName.PLANET_LIST]: <PlanetListPage />,
			[AppRouteName.VEHICLE_LIST]: <VehiclePage />,
		};

		const appRouteName = appRoute.name as Exclude<AppRouteName, "HOME" | "NOT_FOUND">;

		return {
			...appRoute,
			component: componentHandler[appRouteName],
		} as AppRoute<JSX.Element>;
	});

	const notFoundAppRoute = findBaseAppRouteByRouteName(AppRouteName.NOT_FOUND);

	return (
		<ErrorBoundary>
			<React.StrictMode>
				<Router>
					<Routes>
						<Route path="/" element={<MainLayout />}>
							<Route index element={<HomePage />} />
							{homeAppRouteChildren.map((appRoute) => {
								return <Route key={appRoute.path} path={appRoute.path} element={appRoute.component} />;
							})}
						</Route>
						{notFoundAppRoute && <Route path={notFoundAppRoute.path} element={<NotFoundPage />} />}
					</Routes>
				</Router>
			</React.StrictMode>
		</ErrorBoundary>
	);
}

export default App;
