import React from "react";
import "./RightNavbar.css";
import {
  RiHashtag,
  RiSettings3Line,
  RiNotification3Line,
  RiChat3Line,
} from "react-icons/ri";
import { Link } from "react-router-dom";

function RightNavbar() {
  return (
    <div className="right-navbar">
      <Link to="../home">
        <RiHashtag />
      </Link>
      <RiSettings3Line />
      <RiNotification3Line />
      <RiChat3Line />
    </div>
  );
}

export default RightNavbar;
