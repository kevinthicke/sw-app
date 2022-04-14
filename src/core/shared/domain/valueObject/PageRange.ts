import { Page } from "./Page";

export type PageRange = {
  from: number;
  to: number;
};

export const createPageRangeFrom = ({
  currentPage,
  elements,
  existsNextPage,
  existsPrevPage,
  totalElements,
}: Page<any>): PageRange => {
  const to = existsNextPage ? elements.length * currentPage : totalElements;

  let from = (currentPage - 1) * elements.length + 1;
  if (!existsPrevPage) {
    from = 1;
  }

  if (!existsNextPage) {
    from = to - (elements.length - 1);
  }

  return { from, to };
};

export const getPageRangeToString = ({ from, to }: PageRange) => {
  return `${from} to ${to}`
}
