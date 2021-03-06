import { AppRoute, AppRouteName, AppRoutePath } from "../valueObject/AppRoute"

export const makeRoutesService = () => {
  const appRouteList: AppRoute[] = [
    {
      name: AppRouteName.HOME,
      label: 'Home',
      path: AppRoutePath.HOME,
      children: [
        {
          name: AppRouteName.STARSHIPS_LIST,
          label: 'Starships',
          path: AppRoutePath.STARSHIPS_LIST
        },
        {
          name: AppRouteName.PEOPLE_LIST,
          label: 'People',
          path: AppRoutePath.PEOPLE_LIST
        },
        {
          name: AppRouteName.PLANET_LIST,
          label: 'Planets',
          path: AppRoutePath.PLANET_LIST
        },
        {
          name: AppRouteName.VEHICLE_LIST,
          label: 'Vehicles',
          path: AppRoutePath.VEHICLE_LIST
        },
      ]
    },
    {
      name: AppRouteName.NOT_FOUND,
      label: 'Not found page',
      path: AppRoutePath.NOT_FOUND
    }
  ]

  const getBaseAppRoutes = (): AppRoute[] => {
    return appRouteList;
  }

  const getHome = () => {
    return appRouteList.find(appRoute => appRoute.name === AppRouteName.HOME) as AppRoute;
  }

  const findBaseAppRouteByRouteName = (appRouteName: AppRouteName) => {
    return appRouteList.find(appRoute => appRoute.name === appRouteName) ?? null
  }

  const findBaseAppChildByName = (appRouteName: AppRouteName) => {
    const route = findBaseAppRouteByRouteName(AppRouteName.HOME);

    return route?.children
      ?.find(childAppRoute => childAppRoute.name === appRouteName) ?? null
  }


  const getChildrenByName = (appRouteName: AppRouteName) => {
    const appRoute = appRouteList.find(appRoute => appRoute.name === appRouteName);
    return appRoute?.children ?? [];
  }

  return {
    getHome,
    getBaseAppRoutes,
    getChildrenByName,
    findBaseAppRouteByRouteName,
    findBaseAppChildByName
  }
}