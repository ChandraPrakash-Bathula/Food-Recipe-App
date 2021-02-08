import React,{useEffect, useState} from "react";
import Recipe from "./Recipe";
import './App.css';

const App = () => {
  const APP_ID = "993eb7a5";
  const APP_KEY = "73448a68902fd2854f1e4703977e4938";

  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
     getRecipes();
   }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json;
   setRecipes(data.hits);
   console.log(data.hits);
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button  className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe =>(
        <Recipe />
      ))}
    </div>
  );
};

export default App;
