import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProfileCard from "../HomeLeft/ProfileCard/ProfileCard";
import "./HomeMiddle.css";
import NavBar from "./NavBar/NavBar";
import Posts from "./Posts/Posts";
function HomeMiddle({ profile }) {
  const { user } = useSelector((state) => state.authReducer.authData);

  const params = useParams();
  const paramsId = params.id;

  return (
    <div className="home-middle">
      {profile ? <ProfileCard profile={profile} /> : ""}
      {paramsId === user._id || !paramsId ? <NavBar /> : ""}
      <Posts />
    </div>
  );
}

export default HomeMiddle;
