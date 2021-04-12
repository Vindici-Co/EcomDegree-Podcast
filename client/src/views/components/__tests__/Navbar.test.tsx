import React from "react";
import store from "../../../store";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";
import Navbar from "../Navbar/Navbar";
import theme from "../../../styles/theme";

test("<Navbar/>", () => {
	render(
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<Navbar />
			</Provider>
		</ThemeProvider>
	);
});
