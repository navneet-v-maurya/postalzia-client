import React from "react";
import "./HomeMiddle.css";
import NavBar from "./NavBar/NavBar";
import Posts from "./Posts/Posts";
function HomeMiddle() {
  return (
    <div className="home-middle">
      <NavBar />
      <Posts />
    </div>
  );
}

export default HomeMiddle;
