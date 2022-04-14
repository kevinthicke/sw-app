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
import { PromiseEither } from "./../../../../core/shared/domain/dataType/PromisedEither";

const useConsumeUsecase = <L extends Error, R>(
	promise: PromiseEither<L, R>,
	{ dependencies, onSuccess }: { dependencies: any[]; onSuccess: (value: R) => any }
) => {
	const { showLoading, closeLoading } = useContext(LoadingContext);

	useEffect(() => {
		const consumePromise = async () => {
			showLoading();
			const { error, ok } = await promise;
			if (ok) {
				onSuccess(ok);
			}

			if (error) {
				handleErrorUseCase(error);
			}

			closeLoading();
		};

		consumePromise();
	}, [...dependencies]);
};

export const StarshipCardListContainer = () => {
	const [starshipPage, setStarshipPage] = useState<Page<Starship> | null>(null);
	const { currentPage, setCurrentPage } = usePaginate();

	const [search] = useSearchParams();

	const searchParam = search.get(StarshipRouteQueryParams.SEARCH);
	useConsumeUsecase(
		getAllStarshipsUseCase({
			page: currentPage,
			keyword: searchParam ?? "",
		}),
		{ dependencies: [currentPage], onSuccess: setStarshipPage }
	);

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
