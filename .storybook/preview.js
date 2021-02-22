import { MockedProvider } from "@apollo/client/testing";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  apolloClient: {
    MockedProvider,
  },
};
