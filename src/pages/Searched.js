import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../components/Common.css";

const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <div className="container">
      {searchedRecipes.map((item) => {
        const { id, image, title } = item;
        return (
          <div className="single-recipe" key={id}>
            <img src={image} alt={title} />
            <p>{title}</p>
            <div className="gradient"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Searched;
