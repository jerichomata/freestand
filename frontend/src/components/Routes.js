import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ListingsPage from "./ListingsPage";
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/categories" component={ListingsPage} />
        <Route path="/profile" component={ProfilePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
