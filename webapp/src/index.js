import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/app";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import "./style.scss";

const root = document.getElementById("root");
ReactDOM.render(
  <MantineProvider>
    <NotificationsProvider>
      <App />
    </NotificationsProvider>
  </MantineProvider>,
  root
);
