import React from "react";
import "./HomeRight.css";
import RightNavbar from "./RightNavbar/RightNavbar";
import Trends from "./Trends/Trends";

function HomeRight() {
  return (
    <div className="home-right">
      <RightNavbar />
      <Trends />
      <button>Share</button>
    </div>
  );
}

export default HomeRight;
