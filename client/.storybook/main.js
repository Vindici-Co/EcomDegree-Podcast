module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
    
  ]
}


// import {addDecorator} from '@storybook/react';
// import {withThemesProvider} from 'storybook-addon-styled-component-theme';
// import theme from "../src/styles/theme"

// const themes = [theme];
// addDecorator(withThemesProvider(themes));