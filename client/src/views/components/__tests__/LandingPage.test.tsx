import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import LandingPage from "../LandingPage/LandingPage";
import store from "../../../store";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "../../../styles/theme";
import PageOne from "../LandingPage/PageOne";
import PageTwo from "../LandingPage/PageTwo";
import PageThree from "../LandingPage/PageThree";

afterEach(cleanup);

const mockPageChange = jest.fn((event: number) => event + 1);

const pageChange = (event: number, prevPage: number) => {
	const NUM_PAGES = 3;

	let newPage = (prevPage + event) % NUM_PAGES;
	while (newPage < 0) {
		newPage += NUM_PAGES;
	}
	return newPage;
};

test("<LandingPage/> renders without errors", () => {
	const { getByTestId, container } = render(
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<LandingPage />
			</Provider>
		</ThemeProvider>
	);

	expect(getByTestId("landingPageContainer")).toBeTruthy();
	expect(container).toMatchSnapshot();

	let page = 0;
	page = pageChange(1, page);
	expect(page).toBe(1);

	page = pageChange(1, page);
	expect(page).toBe(2);

	page = pageChange(1, page);
	expect(page).toBe(0);

	page = 0;
	page = pageChange(-1, page);
	expect(page).toBe(2);

	page = pageChange(-1, page);
	expect(page).toBe(1);

	page = pageChange(-1, page);
	expect(page).toBe(0);
});

test("LandingPage component: <PageOne/> renders without errors", () => {
	const { getByTestId, container } = render(
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<PageOne pageChange={mockPageChange} />
			</Provider>
		</ThemeProvider>
	);

	expect(getByTestId("pageOneContainer")).toBeTruthy();
	expect(container).toMatchSnapshot();

	const plusButton = getByTestId("plusButton");
	const minusButton = getByTestId("minusButton");
	expect(plusButton).toBeTruthy();
	expect(minusButton).toBeTruthy();

	fireEvent.click(plusButton);
	expect(mockPageChange).toHaveBeenCalledWith(1);

	fireEvent.click(minusButton);
	expect(mockPageChange).toHaveBeenCalledWith(-1);
});

test("LandingPage component: <PageTwo/> renders without errors", () => {
	const { getByTestId, container } = render(
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<PageTwo pageChange={mockPageChange} />
			</Provider>
		</ThemeProvider>
	);

	expect(getByTestId("pageTwoContainer")).toBeTruthy();
	expect(container).toMatchSnapshot();

	const plusButton = getByTestId("plusButton");
	const minusButton = getByTestId("minusButton");
	expect(plusButton).toBeTruthy();
	expect(minusButton).toBeTruthy();

	fireEvent.click(plusButton);
	expect(mockPageChange).toHaveBeenCalledWith(1);

	fireEvent.click(minusButton);
	expect(mockPageChange).toHaveBeenCalledWith(-1);
});

test("LandingPage component: <PageThree/> renders without errors", () => {
	const { getByTestId, container } = render(
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<PageThree pageChange={mockPageChange} />
			</Provider>
		</ThemeProvider>
	);

	expect(getByTestId("pageThreeContainer")).toBeTruthy();
	expect(container).toMatchSnapshot();

	const plusButton = getByTestId("plusButton");
	const minusButton = getByTestId("minusButton");
	expect(plusButton).toBeTruthy();
	expect(minusButton).toBeTruthy();

	fireEvent.click(plusButton);
	expect(mockPageChange).toHaveBeenCalledWith(1);

	fireEvent.click(minusButton);
	expect(mockPageChange).toHaveBeenCalledWith(-1);
});
