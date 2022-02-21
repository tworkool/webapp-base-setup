import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/app";
import { Provider as ReduxStoreProvider } from "react-redux";
import store from "./redux/store";
import "regenerator-runtime/runtime";
import "./style";

const root = document.getElementById("root");
ReactDOM.render(
  <ReduxStoreProvider store={store}>
    <App />
  </ReduxStoreProvider>,
  root
);
