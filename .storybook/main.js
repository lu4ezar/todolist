module.exports = {
  stories: ["../src/components/**/*.stories.jsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-knobs",
    "storybook-addon-apollo-client",
  ],
};
