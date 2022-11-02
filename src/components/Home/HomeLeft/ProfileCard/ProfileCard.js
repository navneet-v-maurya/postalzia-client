import React from "react";
import "./ProfileCard.css";
import background from "../../../../images/background.jpg";
import profile from "../../../../images/navneet.jpg";

function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="background-img">
        <img src={background} alt="background" />
      </div>
      <img src={profile} alt="profile" />
      <p>Name</p>
      <p>Profession</p>
      <hr />
      <div className="following-info">
        <div>
          <p>845</p>
          <p>Followers</p>
        </div>
        <div></div>
        <div>
          <p>12587</p>
          <p>Following</p>
        </div>
      </div>
      <hr />
      <p>My Profile</p>
    </div>
  );
}

export default ProfileCard;
