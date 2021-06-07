import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CategoryPage from "./CategoryPage";
import HomePage from "./HomePage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/categories" component={CategoryPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
