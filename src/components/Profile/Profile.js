import React from "react";
import "./Profile.css";
import ProfileLeft from "./ProfileLeft/ProfileLeft";
import ProfileMiddle from "./ProfileMiddle/ProfileMiddle";
import ProfileRight from "./ProfileRight/ProfileRight";

function Profile() {
  return (
    <div className="profile">
      <ProfileLeft />
      <ProfileMiddle />
      <ProfileRight />
    </div>
  );
}

export default Profile;
