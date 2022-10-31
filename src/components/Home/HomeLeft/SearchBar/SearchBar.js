import React from "react";
import "./SearchBar.css";
import { GiHummingbird } from "react-icons/gi";
import { FcSearch } from "react-icons/fc";

function SearchBar() {
  return (
    <div className="search-bar">
      <GiHummingbird />
      <div>
        <input type="search" placeholder="#Explore" />
        <FcSearch />
      </div>
    </div>
  );
}

export default SearchBar;
