// @flow
import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import "./index.css";
import { ThemeProvider, StyledEngineProvider, createTheme } from "@mui/material/styles";
import client from "./apollo";
import App from "./components/App";

const theme = createTheme();

const element = document.getElementById("root");

if (!element) {
  throw new Error("couldn't find element with id root");
}

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </StyledEngineProvider>
    </ApolloProvider>
  </React.StrictMode>,
  element
);
