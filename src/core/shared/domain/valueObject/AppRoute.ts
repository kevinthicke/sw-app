export enum AppRouteName {
  HOME = 'HOME',
  STARSHIPS_LIST = 'STARSHIPS_LIST',
  PEOPLE_LIST = 'PEOPLE_LIST',
  VEHICLE_LIST = 'VEHICLE_LIST',
  PLANET_LIST = 'PLANET_LIST',
  NOT_FOUND = 'NOT_FOUND'
}

export enum AppRoutePath {
  HOME = '/',
  STARSHIPS_LIST = '/starships',
  PEOPLE_LIST = '/peoples',
  VEHICLE_LIST = '/vehicles',
  PLANET_LIST = '/planets',
  NOT_FOUND = '*'
}

export type AppRoute<T = undefined> = {
  name: AppRouteName,
  path: string,
  label: string;
  component?: T,
  children?: AppRoute<T>[]
}


