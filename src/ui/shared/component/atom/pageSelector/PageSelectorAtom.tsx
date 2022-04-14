import { compose } from "../../../../../core/shared/domain/utils/compose";
import { Page } from "../../../../../core/shared/domain/valueObject/Page";
import { createPageRangeFrom, getPageRangeToString } from "../../../../../core/shared/domain/valueObject/PageRange";
import { ButtonAtom } from "../button/ButtonAtom";
import "./PageSelectorAtom.scss";

type PageSelectorAtomProps = {
	page: Page<any>;
	ariaLabel: string;
	onPrevPageClick: () => any;
	onNextPageClick: () => any;
};

export const PageSelectorAtom = ({ page, ariaLabel, onPrevPageClick, onNextPageClick }: PageSelectorAtomProps) => {
	const pageRangeLabel = compose(createPageRangeFrom, getPageRangeToString)(page);

	return (
		<nav aria-label={ariaLabel} className="page-selector">
			<ul className="page-selector__button-group">
				<li className="page-selector__button-group__button">
					<ButtonAtom
						onClick={onPrevPageClick}
						role="link"
						size="sm"
						aria-label="Go to previous page"
						isDisabled={!page.existsPrevPage}
					>
						Prev
					</ButtonAtom>
				</li>
				<span className="page-selector__button-group__range">
					{pageRangeLabel} of {page.totalElements}
				</span>
				<li aria-label="Go to next page" className="page-selector__button-group__button">
					<ButtonAtom
						onClick={onNextPageClick}
						role="link"
						size="sm"
						aria-label="Go to next page"
						isDisabled={!page.existsNextPage}
					>
						Next
					</ButtonAtom>
				</li>
			</ul>
		</nav>
	);
};
