import React from "react";
import ProfileInfoCard from "./ProfileInfoCard/ProfileInfoCard";
import FollowingCard from "../../Home/HomeLeft/FollowingCard/FollowingCard";
import SearchBar from "../../Home/HomeLeft/SearchBar/SearchBar";

function ProfileLeft() {
  return (
    <div>
      <SearchBar />
      <ProfileInfoCard />
      <FollowingCard />
    </div>
  );
}

export default ProfileLeft;
