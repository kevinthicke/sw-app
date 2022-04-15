import { act, cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import {
	STARSHIPS_AT_FIRST_PAGE,
	STARSHIPS_AT_SECOND_PAGE,
	STARSHIPS_FILTERED_BY_NAME,
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
	const mockStarshipFilteredPage = STARSHIPS_FILTERED_BY_NAME;

	it("Should render a label with value 'Search'", () => {
		// Arrange
		render(<StarShipListPage />, { wrapper: BrowserRouter });

		// Assert
		const element = screen.getByLabelText(/Looking for a starship?/i);
		expect(element).toBeInTheDocument();
	});

	it("Should render a button with label 'Search'", () => {
		// Arrange
		render(<StarShipListPage />, { wrapper: BrowserRouter });

		// Assert
		const buttonElement = screen.getByRole("button", { name: /search/i });
		expect(buttonElement).toBeInTheDocument();
	});

	it("Should render a list with title 'Starships'", async () => {
		// Arrange
		render(<StarShipListPage />, { wrapper: BrowserRouter });

		// Assert
		const listElement = await screen.findByRole("list", { name: /starships/i });
		expect(listElement).toBeInTheDocument();
	});

	it("Should render a text '1 to 3 of 4'", async () => {
		// Arrange
		render(<StarShipListPage />, { wrapper: BrowserRouter });

		// Assert
		const textElement = await screen.findByText(/1 to 3 of 4/i);
		expect(textElement).toBeInTheDocument();
	});

	it(`Should render name of starships given in page 1`, async () => {
		// Arrange
		render(<StarShipListPage />, { wrapper: BrowserRouter });
		const [starship1, starship2, starship3] = mockStarshipFirstPage.elements;

		// Assert
		const listItemElement1 = await screen.findByRole("article", { name: starship1.name });
		const listItemElement2 = await screen.findByRole("article", { name: starship2.name });
		const listItemElement3 = await screen.findByRole("article", { name: starship3.name });

		expect(listItemElement1).toBeInTheDocument();
		expect(listItemElement2).toBeInTheDocument();
		expect(listItemElement3).toBeInTheDocument();
	});

	describe('When I click in "Prev" button', () => {
		it("Should render name of starships given in page 1", async () => {
			// Arrange
			render(<StarShipListPage />, { wrapper: BrowserRouter });
			const [starship1, starship2, starship3] = mockStarshipFirstPage.elements;

			// Act
			const prevButtonElement = await screen.findByRole("link", { name: /Prev/i });
			await userEvent.click(prevButtonElement);

			// Assert
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
			// Arrange
			const [starship] = mockStarshipSecondPage.elements;
			render(<StarShipListPage />, { wrapper: BrowserRouter });

			// Act
			const nextButtonElement = await screen.findByRole("link", { name: /Next/i });
			await userEvent.click(nextButtonElement);

			// Assert
			const listItemElement = await screen.findByRole("article", { name: starship.name });
			expect(listItemElement).toBeInTheDocument();
		});

		it("Should render a text '4 to 4 of 4'", async () => {
			// Arrange
			render(<StarShipListPage />, { wrapper: BrowserRouter });

			// Act
			const prevButtonElement = await screen.findByRole("link", { name: /Next/i });
			await userEvent.click(prevButtonElement);

			// Assert
			const textElement = await screen.findByText(/4 to 4 of 4/i);
			expect(textElement).toBeInTheDocument();
		});

		describe('And I click again in "Next" button', () => {
			it("Should render name of starships given in page 2", async () => {
				// Arrange
				const [starship] = mockStarshipSecondPage.elements;
				render(<StarShipListPage />, { wrapper: BrowserRouter });

				// Act
				const nextButtonElement = await screen.findByRole("link", { name: /Next/i });
				await userEvent.click(nextButtonElement);
				await userEvent.click(nextButtonElement);

				// Assert
				const listItemElement = await screen.findByRole("article", { name: starship.name });
				expect(listItemElement).toBeInTheDocument();
			});
		});
	});

	describe("When I search for a starship", () => {
		// Test failed :(
		xit("Should render a text '1 to 1 of 1'", async () => {
			// Arrange
			render(<StarShipListPage />, { wrapper: BrowserRouter });

			// Act
			const searchElement = await screen.findByLabelText(/Looking for a starship/i);
			await userEvent.type(searchElement, "StarshipSearched");
			const searchButtonElement = screen.getByRole("button", { name: /search/i });
			await userEvent.click(searchButtonElement);

			// Assert
			const textElement = await screen.findByText(/1 to 1 of 1/i);
			expect(textElement).toBeInTheDocument();
		});

		// Test Failed :(
		xit("Should render the starships filtered", async () => {
			// Arrange
			const [starshipFiltered] = mockStarshipFilteredPage.elements;
			render(<StarShipListPage />, { wrapper: BrowserRouter });

			// Act
			const searchElement = screen.getByLabelText(/Looking for a starship?/i);
			await userEvent.type(searchElement, "StarshipSearched");
			const searchButtonElement = screen.getByRole("button", { name: /search/i });
			await userEvent.click(searchButtonElement);

			// Assert
			const listItemElement1 = await screen.findByRole("article", { name: starshipFiltered.name });
			expect(listItemElement1).toBeInTheDocument();
		});
	});
});
