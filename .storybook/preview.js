import { MockedProvider } from "@apollo/client/testing";
import { withKnobs } from "@storybook/addon-knobs";

export const decorators = [
  withKnobs(),
  (Story) => (
    <DragDropContext>
      <Story />
    </DragDropContext>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  apolloClient: {
    MockedProvider,
  },
};
