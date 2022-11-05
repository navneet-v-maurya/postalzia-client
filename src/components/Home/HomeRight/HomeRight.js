import React, { useState } from "react";
import ShareModal from "../../Modal/ShareModal/ShareModal";
import "./HomeRight.css";
import RightNavbar from "./RightNavbar/RightNavbar";
import Trends from "./Trends/Trends";

function HomeRight() {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="home-right">
      <RightNavbar />
      <Trends />
      <button
        onClick={() => {
          setModalOpened(true);
        }}
      >
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
}

export default HomeRight;
