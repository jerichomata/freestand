import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ListingsPage from "./ListingsPage";
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import Login from "./Login";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route
          path="/fitness"
          render={(props) => <ListingsPage {...props} category={"Fitness"} />}
        ></Route>
        <Route
          path="/dance"
          render={(props) => <ListingsPage {...props} category={"Dance"} />}
        ></Route>
        <Route
          path="/yoga"
          render={(props) => <ListingsPage {...props} category={"Yoga"} />}
        ></Route>
        <Route
          path="/meditation"
          render={(props) => (
            <ListingsPage {...props} category={"Meditation"} />
          )}
        ></Route>
        <Route
          path="/cooking"
          render={(props) => <ListingsPage {...props} category={"Cooking"} />}
        ></Route>
        <Route
          path="/nutritionist"
          render={(props) => (
            <ListingsPage {...props} category={"Nutritionist"} />
          )}
        ></Route>
        <Route
          path="/therapy"
          render={(props) => <ListingsPage {...props} category={"Therapy"} />}
        ></Route>
        <Route
          path="/pilates"
          render={(props) => <ListingsPage {...props} category={"Pilates"} />}
        ></Route>
        <Route path="/profile" component={ProfilePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
