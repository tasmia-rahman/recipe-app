import React, { useState } from "react";
import "./Search.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + searchText);
  };
  return (
    <section>
      <form onSubmit={submitHandler}>
        <FaSearch className="search-icon" />
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Search;
