import React from "react";
import "./NavBar.css";
import {
  HiOutlinePhotograph,
  HiOutlineVideoCamera,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { AiOutlineSchedule } from "react-icons/ai";

import profileImg from "../../../../images/navneet.jpg";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-search">
        <img src={profileImg} alt="profile-img" />
        <input type="search" placeholder="Whats Happening?" />
      </div>
      <div className="navbar-components">
        <p>
          <HiOutlinePhotograph /> Photo
        </p>

        <p>
          <HiOutlineVideoCamera /> Video
        </p>
        <p>
          <HiOutlineLocationMarker /> Location
        </p>
        <p>
          <AiOutlineSchedule /> Schedule
        </p>
        <button>Share</button>
      </div>
    </div>
  );
}

export default NavBar;
