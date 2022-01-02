// @flow
import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import "./index.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import client from "./apollo";
import App from "./components/App";

const theme = createMuiTheme();

const element = document.getElementById("root");

if (!element) {
  throw new Error("couldn't find element with id root");
}

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  element
);
