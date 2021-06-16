import React from "react";
import NavBar from "./NavBar";
import CategoriesBar from "./CategoriesBar";
import CategoryProfiles from "./CategoryProfiles";
export default function ListingsPage(props) {
  return (
    <div>
      <NavBar />
      <CategoriesBar />
      <CategoryProfiles category={props.category}/>
    </div>
  );
}
