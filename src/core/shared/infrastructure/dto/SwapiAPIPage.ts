export type SwapiAPIPage<T> = {
  count: number;
  next: string;
  previous: string;
  results: Array<T>
}