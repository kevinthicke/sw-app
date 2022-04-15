import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import {
	STARSHIPS_AT_FIRST_PAGE,
	STARSHIPS_AT_SECOND_PAGE,
} from "../../../../../core/starship/infrastructure/repository/StarshipMockRepository";
import { StarShipListPage } from "../StarshipListPage";

export {};

/**
 * NOTE: For testing, I would prefer mock the imported named function "makeStarshipMockRepository" and
 * mock its response with jest.fn(). Unfortunately, I am not able to do it :(
 *
 * See "StarshipRepositoryFactory".
 */
describe("StarshipListPage", () => {
	const mockStarshipFirstPage = STARSHIPS_AT_FIRST_PAGE;
	const mockStarshipSecondPage = STARSHIPS_AT_SECOND_PAGE;

	it("Should render a label with value 'Search'", () => {
		render(<StarShipListPage />, { wrapper: BrowserRouter });

		const element = screen.getByLabelText(/Looking for a starship?/i);

		expect(element).toBeInTheDocument();
	});

	it("Should render a button with label 'Search'", () => {
		render(<StarShipListPage />, { wrapper: BrowserRouter });
		const buttonElement = screen.getByRole("button", { name: /search/i });

		expect(buttonElement).toBeInTheDocument();
	});

	it("Should render a list with title 'Starships'", async () => {
		render(<StarShipListPage />, { wrapper: BrowserRouter });
		const listElement = await screen.findByRole("list", { name: /starships/i });

		expect(listElement).toBeInTheDocument();
	});

	it(`Should render name of starships given in page 1`, async () => {
		render(<StarShipListPage />, { wrapper: BrowserRouter });
		const [starship1, starship2, starship3] = mockStarshipFirstPage.elements;

		const listItemElement1 = await screen.findByRole("article", { name: starship1.name });
		const listItemElement2 = await screen.findByRole("article", { name: starship2.name });
		const listItemElement3 = await screen.findByRole("article", { name: starship3.name });

		expect(listItemElement1).toBeInTheDocument();
		expect(listItemElement2).toBeInTheDocument();
		expect(listItemElement3).toBeInTheDocument();
	});

	describe('When I click in "Prev" button', () => {
		it("Should render name of starships given in page 1", async () => {
			render(<StarShipListPage />, { wrapper: BrowserRouter });
			const [starship1, starship2, starship3] = mockStarshipFirstPage.elements;

			const prevButtonElement = await screen.findByRole("link", { name: /Prev/i });
			await userEvent.click(prevButtonElement);

			const listItemElement1 = await screen.findByRole("article", { name: starship1.name });
			const listItemElement2 = await screen.findByRole("article", { name: starship2.name });
			const listItemElement3 = await screen.findByRole("article", { name: starship3.name });

			expect(listItemElement1).toBeInTheDocument();
			expect(listItemElement2).toBeInTheDocument();
			expect(listItemElement3).toBeInTheDocument();
		});
	});

	describe('When I click in "Next" button', () => {
		it("Should render name of starships given in page 2", async () => {
			render(<StarShipListPage />, { wrapper: BrowserRouter });
			const [starship] = mockStarshipSecondPage.elements;
			const nextButtonElement = await screen.findByRole("link", { name: /Next/i });
			await userEvent.click(nextButtonElement);

			const listItemElement = await screen.findByRole("article", { name: starship.name });

			expect(listItemElement).toBeInTheDocument();
		});

		describe('And I click again in "Next" button', () => {
			it("Should render name of starships given in page 2", async () => {
				render(<StarShipListPage />, { wrapper: BrowserRouter });
				const [starship] = mockStarshipSecondPage.elements;
				const nextButtonElement = await screen.findByRole("link", { name: /Next/i });
				await userEvent.click(nextButtonElement);
				await userEvent.click(nextButtonElement);

				const listItemElement = await screen.findByRole("article", { name: starship.name });

				expect(listItemElement).toBeInTheDocument();
			});
		});
	});

	describe("When I search for a starship", () => {
		it("Should render the starship filtered", () => {});
	});
});
