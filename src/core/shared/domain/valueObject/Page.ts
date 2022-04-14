export type Page<T> = {
  totalElements: number;
  totalPages: number;
  elementsAtCurrentPage: number;
  currentPage: number;
  content: Array<T>
};

export const createPageFrom = <T>({
  totalElements,
  content,
  currentPage
}: Omit<Page<T>, 'elementsAtCurrentPage' | 'totalPages'>): Page<T> => {
  const elementsAtCurrentPage = content.length;
  const totalPages = elementsAtCurrentPage ? Math.ceil(totalElements / elementsAtCurrentPage) : 0

  return {
    totalElements,
    elementsAtCurrentPage,
    content,
    currentPage,
    totalPages
  }
}

export const createDefaultPage = <T = any>(): Page<T> => createPageFrom({
  content: [],
  currentPage: 0,
  totalElements: 0,
})