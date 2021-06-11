import React, { Fragment } from "react";
import NavBar from "./NavBar";
import CategoriesBar from "./CategoriesBar"
import Header from "./Header";
import Grid from "@material-ui/core/Grid";
import FeaturedProfiles from "./FeaturedProfiles";
import FeaturedCategories from "./FeaturedCategories";
export default function HomePage() {
  return (
    <div>
      <NavBar />
      <CategoriesBar />
      <Header />
      <FeaturedProfiles />
      <FeaturedCategories />
    </div>
  );
}
