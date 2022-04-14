/***
 * NOTE: We don't include attributes "nextPage: string" and "prevPage: string" in order 
 * not to depend on infrastructure layer (StarshipSwapiAPIDto)
 */
export type Page<T> = {
  totalElements: number;
  currentPage: number;
  elements: T[];
  existsNextPage: boolean;
  existsPrevPage: boolean;
};
