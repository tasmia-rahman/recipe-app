import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../components/Common.css";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <div className="container">
      {cuisine.map((item) => {
        const { id, image, title } = item;
        return (
          <div className="single-recipe" key={id}>
            <Link to={"/recipe/" + id}>
              <img src={image} alt={title} />
              <p>{title}</p>
              <div className="gradient"></div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Cuisine;
