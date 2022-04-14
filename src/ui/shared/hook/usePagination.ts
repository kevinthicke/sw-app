import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { isStringOfInteger } from "../../../core/shared/domain/utils/isStringOfInteger";
import { StarshipRouteQueryParams } from "../../../core/starship/domain/valueObject/StarshipRouteQueryParams";

export const usePaginate = () => {
  const DEFAULT_PAGE = 1;
  const [search, setSearch] = useSearchParams();

  const checkIsValidParam = (pageParam: string | null) => {
    return pageParam && isStringOfInteger(pageParam) && Number(pageParam) > 0
  }

  const setCurrentPage = (updateCurrentPageCallback: (value: number) => number) => {
    const currentPageUpdated = updateCurrentPageCallback(currentPage);
    setSearch({ [StarshipRouteQueryParams.PAGE]: `${currentPageUpdated}` });
  };

  const pageParam = search.get(StarshipRouteQueryParams.PAGE);
  if (!checkIsValidParam(pageParam)) {
    setSearch({ [StarshipRouteQueryParams.PAGE]: `${DEFAULT_PAGE}` });
  }

  const currentPage = Number(pageParam);

  return {
    currentPage,
    setCurrentPage,
  };
};