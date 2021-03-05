import React from "react";
import RecipeCard from "./RecipeCards";
import "./App.css";

const Recipe = ({ title, calories, image }) => {
  return <RecipeCard  title={title} calories={calories} image={image} />;
};

export default Recipe;
