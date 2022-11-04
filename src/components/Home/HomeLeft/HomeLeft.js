import React from "react";
import FollowingCard from "./FollowingCard/FollowingCard";
import "./HomeLeft.css";
import InfoCard from "./InfoCard/InfoCard";
import ProfileCard from "./ProfileCard/ProfileCard";
import SearchBar from "./SearchBar/SearchBar";

function HomeLeft({ profile }) {
  return (
    <div className="home-left">
      <SearchBar />
      {profile ? <InfoCard /> : <ProfileCard />}
      <FollowingCard />
    </div>
  );
}

export default HomeLeft;
