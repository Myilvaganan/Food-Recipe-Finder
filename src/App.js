import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import "./App.css";

const App = () => {
  /*   const classes = useStyles();*/
  const APP_ID = "6ad59d2f";
  const APP_KEY = "07416716df80e17aa65d0e7f10cfdbe0";
  const example_Url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(example_Url);
    const data = await response.json();
    setRecipes(data.hits);
  };

  return (
    <div className="main">

      <div className="opacity-reducer"></div>

      <div className="App">
        <form noValidate autoComplete="off">
          <p className="text">Welcome to MYIL's KITCHEN</p>
          <Input placeholder="Enjoy by Searching..." type="text" />
          <Button variant="contained" startIcon={<SearchIcon />} size="small">
            RECIPE
          </Button>
        </form>

        <div className="Content">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients.text}
              className="Card"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
