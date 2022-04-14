import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PromiseEither } from "../../../../core/shared/domain/dataType/PromisedEither";
import { Page } from "../../../../core/shared/domain/valueObject/Page";
import { getAllStarshipsUseCase } from "../../../../core/starship/application/useCase/getAllStarshipsUseCase";
import { Starship } from "../../../../core/starship/domain/entity/Starship";
import { StarshipRouteQueryParams } from "../../../../core/starship/domain/valueObject/StarshipRouteQueryParams";
import { LoadingAtom } from "../../../shared/component/atom/loading/LoadingAtom";
import { PageSelectorAtom } from "../../../shared/component/atom/pageSelector/PageSelectorAtom";
import { StarshipCardListOrganism } from "./StarshipCardListOrganism";

export const StarshipCardListContainer = () => {
	const [starshipPage, setStarshipPage] = useState<Page<Starship> | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [search] = useSearchParams();

	const searchParam = search.get(StarshipRouteQueryParams.SEARCH);
	useEffect(() => {
		console.log({ getAllStarshipsUseCase });
		const setStarshipListFromUseCase = async () => {
			setIsLoading(true);
			const { error, ok: starshipPageFromUseCase } = await getAllStarshipsUseCase({
				page: currentPage,
				keyword: searchParam ?? "",
			});
			console.log({ error, ok: starshipPageFromUseCase });

			starshipPageFromUseCase && setStarshipPage(() => starshipPageFromUseCase);
			setIsLoading(false);
		};

		setStarshipListFromUseCase();
	}, [currentPage, searchParam]);

	useEffect(() => {
		setCurrentPage(1);
	}, [searchParam]);

	return isLoading || !starshipPage ? (
		<LoadingAtom />
	) : (
		<div>
			<StarshipCardListOrganism starshipList={starshipPage.content} />
			<PageSelectorAtom page={starshipPage} ariaLabel="Starship paginator" onPageClick={setCurrentPage} />
		</div>
	);
};
