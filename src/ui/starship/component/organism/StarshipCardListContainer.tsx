/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { compose } from "../../../../core/shared/domain/utils/compose";
import { createEmptyPage, Page } from "../../../../core/shared/domain/valueObject/Page";
import { getAllStarshipsUseCase } from "../../../../core/starship/application/useCase/getAllStarshipsUseCase";
import { Starship } from "../../../../core/starship/domain/entity/Starship";
import { StarshipRouteQueryParams } from "../../../../core/starship/domain/valueObject/StarshipRouteQueryParams";
import { PageSelectorAtom } from "../../../shared/component/atom/pageSelector/PageSelectorAtom";
import { useConsumeUsecase } from "../../../shared/hook/useConsumeUsecase";
import { usePaginate } from "../../../shared/hook/usePagination";
import { StarshipListErrorMessageWrapperAtom } from "../atom/StarshipListErrorMessageWrapperAtom";
import { StarshipCardListOrganism } from "./StarshipCardListOrganism";

export const StarshipCardListContainer = () => {
	const [starshipPage, setStarshipPage] = useState<Page<Starship> | null>(null);
	const [hasError, setHasError] = useState<boolean>(true);
	const { currentPage, setCurrentPage } = usePaginate();

	const [search] = useSearchParams();
	const searchParam = search.get(StarshipRouteQueryParams.SEARCH);

	const { consume } = useConsumeUsecase();

	useEffect(() => {
		consume({
			usecase: getAllStarshipsUseCase({ page: currentPage, keyword: searchParam ?? "" }),
			onSuccess: setStarshipPage,
			onError: compose(Boolean, setHasError),
		});
	}, [currentPage, searchParam]);

	const updateCurrentPage = (value: 1 | -1) => {
		setCurrentPage((currentPage) => currentPage + value);
	};

	return (
		<StarshipListErrorMessageWrapperAtom hasError={hasError || !starshipPage} currentPage={currentPage}>
			{starshipPage && (
				<React.Fragment>
					<StarshipCardListOrganism starshipList={starshipPage.elements} />
					<PageSelectorAtom
						page={starshipPage}
						ariaLabel="Starship paginator"
						onPrevPageClick={() => updateCurrentPage(-1)}
						onNextPageClick={() => updateCurrentPage(+1)}
					/>
				</React.Fragment>
			)}
		</StarshipListErrorMessageWrapperAtom>
	);
};
