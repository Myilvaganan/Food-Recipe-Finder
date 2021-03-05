import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";
import Input from "@material-ui/core/Input";

import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import "./App.css";

const App = () => {
  /*   const classes = useStyles();*/
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0);

  const APP_ID = "6ad59d2f";
  const APP_KEY = "07416716df80e17aa65d0e7f10cfdbe0";
  const example_Url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(example_Url);
    const data = await response.json();
    setRecipes(data.hits);
  };

  const getInput = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
    runCount();
  };

  const refreshCount = () => {
    setCount(0);
  };

  setInterval(refreshCount, 60000);

  const runCount = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      setCount("wait for a min...");
    }
  };

  return (
    <div className="main">
      <div className="opacity-reducer"></div>

      <div className="App">
        <form noValidate autoComplete="off" onSubmit={getSearch}>
          <p className="text">Myil's Kitchen</p>
          <Input
            placeholder="Search here ..."
            type="text"
            value={search}
            onChange={getInput}
            className="input"
          />
          <Button
            variant="contained"
            startIcon={<SearchIcon />}
            size="medium"
            type="submit"
          >
            RECIPE
          </Button>
          <p className="count">{count}</p>
        </form>

        <div className="Content">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              source={recipe.recipe.source}
              className="Card"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
