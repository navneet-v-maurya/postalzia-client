import React from "react";
import "./Following.css";
import profileImg from "../../../../../images/navneet.jpg";

function Following() {
  return (
    <div className="following">
      <div>
        <img src={profileImg} alt="profile-img" />
        <div>
          <p>Name</p>
          <p>@username</p>
        </div>
      </div>
      <button>Follow</button>
    </div>
  );
}

export default Following;
