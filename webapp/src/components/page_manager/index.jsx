import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import DatenschutzPage from "../../pages/datenschutz";
import HomePage from "../../pages/home";
import { CubeSpinner } from "../spinners";

const PageManager = () => {
  return (
    <Switch>
      <Route exact path="/datenschutz">
        <Suspense fallback={<CubeSpinner />}>
          <DatenschutzPage />
        </Suspense>
      </Route>
      <Route exact path="/">
        <Suspense fallback={<CubeSpinner />}>
          <HomePage />
        </Suspense>
      </Route>
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default PageManager;
