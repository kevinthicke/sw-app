import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { StarShipListPage } from "../StarshipListPage";

export {};

/**
 * NOTE: For testing, I would prefer mock the imported named function "makeStarshipMockRepository" and
 * mock its response with jest.fn(). Unfortunately, I am not able to do it :(
 *
 * See "StarshipRepositoryFactory".
 */
describe("StarshipListPage", () => {
	it("Should render a label with value 'Search'", () => {
		render(<StarShipListPage />, { wrapper: BrowserRouter });
		const element = screen.getByLabelText(/search/i);

		expect(element).toBeInTheDocument();
	});

	it("Should render a button with label 'Search'", () => {
		render(<StarShipListPage />, { wrapper: BrowserRouter });
		const buttonElement = screen.getByRole("button", { name: /search/i });

		expect(buttonElement).toBeInTheDocument();
	});

	fit("Should render a list with title 'Starships'", async () => {
		render(<StarShipListPage />, { wrapper: BrowserRouter });
		const listElement = await screen.findByRole("list", { name: /starships/i });

		expect(listElement).toBeInTheDocument();
	});
});
