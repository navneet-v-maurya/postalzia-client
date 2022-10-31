import React from "react";
import HomeLeft from "./HomeLeft/HomeLeft";
import HomeMiddle from "./HomeMiddle/HomeMiddle";
import HomeRight from "./HomeRight/HomeRight";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <HomeLeft />
      <HomeMiddle />
      <HomeRight />
    </div>
  );
}

export default Home;
