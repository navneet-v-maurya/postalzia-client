import React from "react";
import Following from "./Following/Following";
import "./FollowingCard.css";

function FollowingCard() {
  return (
    <div className="following-card">
      <p>Who is Following you</p>
      <div>
        <Following />
        <Following />
        <Following />
        <Following />
      </div>
    </div>
  );
}

export default FollowingCard;
