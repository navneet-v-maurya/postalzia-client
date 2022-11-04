import React from "react";
import "./ProfileCard.css";
import background from "../../../../images/background.jpg";
import Profile from "../../../../images/navneet.jpg";

function ProfileCard({ profile, setProfile }) {
  const handleClick = () => {
    setProfile(!profile);
  };

  return (
    <div className="profile-card">
      <div className="background-img">
        <img src={background} alt="background" />
      </div>
      <img src={Profile} alt="profile" />
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
        {profile ? (
          <>
            <div></div>
            <div>
              <p>3</p>
              <p>Posts</p>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      <hr />
      {profile ? "" : <p onClick={handleClick}>My Profile</p>}
    </div>
  );
}

export default ProfileCard;
