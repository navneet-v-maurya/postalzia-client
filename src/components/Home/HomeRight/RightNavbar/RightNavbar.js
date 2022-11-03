import React from "react";
import "./RightNavbar.css";
import {
  RiHashtag,
  RiSettings3Line,
  RiNotification3Line,
  RiChat3Line,
} from "react-icons/ri";

function RightNavbar() {
  return (
    <div className="right-navbar">
      <RiHashtag />
      <RiSettings3Line />
      <RiNotification3Line />
      <RiChat3Line />
    </div>
  );
}

export default RightNavbar;
