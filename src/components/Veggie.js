import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";
import "./Common.css";
import { Link } from "react-router-dom";

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");
    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    }
  };

  useEffect(() => {
    getVeggie();
  }, []);

  return (
    <section>
      <h3>Vegetable picks</h3>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
        }}
      >
        {veggie.map((recipe) => {
          const { id, title, image } = recipe;
          return (
            <SplideSlide key={id}>
              <div className="single-recipe">
                <Link to={"/recipe/" + id}>
                  <img src={image} alt={title} />
                  <p>{title}</p>
                  <div className="gradient"></div>
                </Link>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
};

export default Veggie;
