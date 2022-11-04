import React, { useState } from "react";
import HomeLeft from "./HomeLeft/HomeLeft";
import HomeMiddle from "./HomeMiddle/HomeMiddle";
import HomeRight from "./HomeRight/HomeRight";
import "./Home.css";

function Home() {
  const [profile, setProfile] = useState(false);
  return (
    <div className="home">
      <HomeLeft profile={profile} setProfile={setProfile} />
      <HomeMiddle profile={profile} />
      <HomeRight />
    </div>
  );
}

export default Home;
