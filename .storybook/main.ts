import type { StorybookConfig } from "@storybook/vue3-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack"
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
