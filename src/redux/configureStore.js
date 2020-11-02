// @flow
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import type { Store } from "../types";
import reducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (): Store =>
  createStore(reducer, undefined, composeEnhancers(applyMiddleware(thunk)));

export default configureStore;
