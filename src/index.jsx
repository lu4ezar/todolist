// @flow
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import App from "./components/App";
import configureStore from "./redux/configureStore";
import type { Store } from "./types";
import "./index.css";
import { saveState } from "./utils/localStorage";
import client from "./graphql";

const store: Store = configureStore();

export default store;

store.subscribe(() => {
  saveState(store.getState().todos.present);
});

const element = document.getElementById("root");

if (!element) {
  throw new Error("couldn't find element with id root");
}

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  element
);
