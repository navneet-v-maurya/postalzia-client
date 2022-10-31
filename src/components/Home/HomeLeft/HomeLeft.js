import React from "react";
import FollowingCard from "./FollowingCard/FollowingCard";
import "./HomeLeft.css";
import ProfileCard from "./ProfileCard/ProfileCard";
import SearchBar from "./SearchBar/SearchBar";

function HomeLeft() {
  return (
    <div>
      <SearchBar />
      <ProfileCard />
      <FollowingCard />
    </div>
  );
}

export default HomeLeft;
