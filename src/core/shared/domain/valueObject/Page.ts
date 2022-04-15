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

export const createEmptyPage = <T = any>(): Page<T> => {
  return {
    totalElements: 0,
    currentPage: 1,
    elements: [],
    existsNextPage: false,
    existsPrevPage: false
  }
}

export const isCurrentPageValid = <T = any>(currentPage: Page<T>['currentPage']) => {
  const MIN_PAGE_ALLOWED = 1;
  return currentPage >= MIN_PAGE_ALLOWED;
}