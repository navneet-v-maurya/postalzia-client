import React from "react";
import ProfileCard from "../HomeLeft/ProfileCard/ProfileCard";
import "./HomeMiddle.css";
import NavBar from "./NavBar/NavBar";
import Posts from "./Posts/Posts";
function HomeMiddle({ profile }) {
  return (
    <div className="home-middle">
      {profile ? <ProfileCard profile={profile} /> : ""}
      <NavBar />
      <Posts />
    </div>
  );
}

export default HomeMiddle;
