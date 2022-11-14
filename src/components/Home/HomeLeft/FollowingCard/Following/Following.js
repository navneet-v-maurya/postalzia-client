import React from "react";
import "./Following.css";

function Following({ user }) {
  return (
    <div className="following">
      <div>
        <img src={user.profilePic} alt="profile-img" />
        <div>
          <p>
            {user.firstName} {user.lastName}
          </p>
          <p>{user.userName}</p>
        </div>
      </div>
      <button>Follow</button>
    </div>
  );
}

export default Following;
