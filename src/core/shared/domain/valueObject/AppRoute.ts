export enum AppRouteName {
  HOME = 'HOME',
  STARSHIPS_LIST = 'STARSHIPS_LIST',
  PEOPLE_LIST = 'PEOPLE_LIST',
  VEHICLE_LIST = 'VEHICLE_LIST',
  PLANET_LIST = 'PLANET_LIST',
  NOT_FOUND = 'NOT_FOUND'
}

export type AppRoute<T = undefined> = {
  name: AppRouteName,
  path: string,
  label: string;
  component?: T,
  children?: AppRoute<T>[]
}


