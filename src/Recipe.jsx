import React from "react";
import RecipeCard from "./RecipeCards";
import "./App.css";

const Recipe = ({ title, calories, image, ingredients, source}) => {

  return <RecipeCard  title={title} calories={calories} image={image} ingredients={ingredients} source={source} />;
};

export default Recipe;
