// @flow
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import configureStore from "./redux/configureStore";
import type { Store } from "./types";
import "./index.css";
import getInitialState from "./utils/initialState";
import { saveState } from "./utils/localStorage";

const initialState = getInitialState();

const store: Store = configureStore(initialState);

export default store;

store.subscribe(() => {
  saveState(store.getState().todos.present);
});

const element = document.getElementById("root");

if (!element) {
  throw new Error("couldn't find element with id root");
}

ReactDOM.render(
  /* <React.StrictMode>
		<App />
	</React.StrictMode>, */
  <Provider store={store}>
    <App />
  </Provider>,
  element
);
