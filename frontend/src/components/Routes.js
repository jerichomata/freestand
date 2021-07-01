import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ListingsPage from "./ListingsPage";
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import Login from "./Login";
import SignUp from "./SignUp";
import { AuthProvider } from "../contexts/AuthContext";
import ForgotPassword from "./ForgotPassword";
import Logout from "./Logout";
import PrivateRoute from "./PrivateRoute";
import EmailVerification from "./EmailVerification";
import CategoriesAndTags from "./SignUpComponents/CategoriesAndTags";
import TitlesAndDesc from "./SignUpComponents/TitlesAndDesc";
import BasicInfo from "./SignUpComponents/BasicInfo";
import Links from "./SignUpComponents/Links";
import PhotosAndVideos from "./SignUpComponents/PhotosAndVideos";
const Routes = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/verify-email" component={EmailVerification} />
          <Route
            exact
            path="/categories-and-tags"
            component={CategoriesAndTags}
          />
          <Route
            exact
            path="/titles-and-description"
            component={TitlesAndDesc}
          />
          <Route exact path="/basic-info" component={BasicInfo} />
          <Route exact path="/links" component={Links} />
          <Route exact path="/photos-and-videos" component={PhotosAndVideos} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route
            path="/fitness-and-exercise"
            render={(props) => <ListingsPage {...props} category={"Fitness"} />}
          ></Route>

          <Route
            path="/meditation-mindfulness-spirituality"
            render={(props) => (
              <ListingsPage {...props} category={"Meditation"} />
            )}
          ></Route>
          <Route
            path="/cooking"
            render={(props) => <ListingsPage {...props} category={"Cooking"} />}
          ></Route>
          <Route
            path="/nutrition-and-dieting"
            render={(props) => (
              <ListingsPage {...props} category={"Nutritionist"} />
            )}
          ></Route>
          <Route path="/profile" component={ProfilePage} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Routes;
