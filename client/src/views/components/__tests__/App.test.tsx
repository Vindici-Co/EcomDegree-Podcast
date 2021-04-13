import React from "react";
import store from "../../../store";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";
import App from "../../../App";
import theme from "../../../styles/theme";

test("<App/>", () => {
	render(
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<App />
			</Provider>
		</ThemeProvider>
	);
});
