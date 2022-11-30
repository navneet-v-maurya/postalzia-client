import React from "react";
import "./RightNavbar.css";
import {
  RiHome3Line,
  RiSettings3Line,
  RiNotification3Line,
  RiChat3Line,
} from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeActiveChatAction } from "../../../Redux/Actions/ChatAction";
import { removeMessagesAction } from "../../../Redux/Actions/MessageAction";

function RightNavbar() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  return (
    <div className="right-navbar">
      <Link to="../home">
        <RiHome3Line
          onClick={() => {
            dispatch(removeActiveChatAction());
            dispatch(removeMessagesAction());
          }}
        />
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
