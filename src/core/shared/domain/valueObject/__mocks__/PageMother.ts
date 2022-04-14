import { createPageFrom, Page } from "../Page";

//NOTE: Object Mother pattern https://martinfowler.com/bliki/ObjectMother.html
export const PageMother = {
  newPage<T>({
    totalElements = 0,
    content = [],
    currentPage = 0
  }: Omit<Page<T>, 'elementsAtCurrentPage' | 'totalPages'>): Page<T> {
    return createPageFrom({ totalElements, content, currentPage })
  }
}