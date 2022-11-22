import React from "react";
import "./RightNavbar.css";
import {
  RiHome3Line,
  RiSettings3Line,
  RiNotification3Line,
  RiChat3Line,
} from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

function RightNavbar() {
  const Navigate = useNavigate();
  return (
    <div className="right-navbar">
      <Link to="../home">
        <RiHome3Line />
      </Link>
      <RiSettings3Line />
      <RiNotification3Line />
      <RiChat3Line
        onClick={() => {
          Navigate("/chat");
        }}
      />
    </div>
  );
}

export default RightNavbar;
