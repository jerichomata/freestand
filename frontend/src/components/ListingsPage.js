import React from "react";
import NavBar from "./NavBar";
import CategoriesBar from "./CategoriesBar";
import ListingsCategoriesBar from "./ListingsCategoriesBar";
import CategoryProfiles from "./CategoryProfiles";
export default function ListingsPage(props) {
  return (
    <div>
      <NavBar />
      <ListingsCategoriesBar />
      <CategoryProfiles />
    </div>
  );
}
