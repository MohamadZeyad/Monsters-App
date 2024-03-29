import React from "react";
import "./searchBox.styles.css";
export const SearchBox = ({ placeholder, handlechange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handlechange}
  ></input>
);
