import React from 'react';
import { ThemeProvider } from 'styled-components';
import ecomDegreeTheme from "../src/styles/theme"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'centered',
}

// .storybook/preview.js

export const decorators = [
  (Story) => (
    <ThemeProvider theme={ecomDegreeTheme}>
      <Story />
    </ThemeProvider>
  ),
];