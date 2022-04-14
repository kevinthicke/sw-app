import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { handleErrorUseCase } from "../../../../core/shared/application/useCase/handleErrorUseCase";
import { Page } from "../../../../core/shared/domain/valueObject/Page";
import { getAllStarshipsUseCase } from "../../../../core/starship/application/useCase/getAllStarshipsUseCase";
import { Starship } from "../../../../core/starship/domain/entity/Starship";
import { StarshipRouteQueryParams } from "../../../../core/starship/domain/valueObject/StarshipRouteQueryParams";
import { PageSelectorAtom } from "../../../shared/component/atom/pageSelector/PageSelectorAtom";
import { LoadingContext } from "../../../shared/context/loading/LoadingContext";
import { usePaginate } from "../../../shared/hook/usePagination";
import { StarshipCardListOrganism } from "./StarshipCardListOrganism";

export const StarshipCardListContainer = () => {
	const [starshipPage, setStarshipPage] = useState<Page<Starship> | null>(null);
	const { showLoading, closeLoading } = useContext(LoadingContext);
	const { currentPage, setCurrentPage } = usePaginate();

	const [search] = useSearchParams();

	const searchParam = search.get(StarshipRouteQueryParams.SEARCH);
	useEffect(() => {
		const setStarshipListFromUseCase = async () => {
			showLoading();
			const { error, ok: starshipPageFromUseCase } = await getAllStarshipsUseCase({
				page: currentPage,
				keyword: searchParam ?? "",
			});

			if (error) {
				handleErrorUseCase(error);
			}

			starshipPageFromUseCase && setStarshipPage(() => starshipPageFromUseCase);
			closeLoading();
		};

		setStarshipListFromUseCase();
	}, [currentPage, showLoading, closeLoading, searchParam]);

	//useEffect(() => {
	//	setCurrentPage(() => 1);
	//}, [searchParam, setCurrentPage]);

	const updateCurrentPage = (value: 1 | -1) => {
		setCurrentPage((currentPage) => currentPage + value);
	};

	return (
		starshipPage && (
			<div>
				<StarshipCardListOrganism starshipList={starshipPage.elements} />
				<PageSelectorAtom
					page={starshipPage}
					ariaLabel="Starship paginator"
					onPrevPageClick={() => updateCurrentPage(-1)}
					onNextPageClick={() => updateCurrentPage(+1)}
				/>
			</div>
		)
	);
};
