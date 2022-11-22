import React from "react";
import "./ChatRight.css";
import RightNavBar from "../../Home/HomeRight/RightNavbar/RightNavbar";
import ChatPage from "./ChatPage/ChatPage";

function ChatRight() {
  return (
    <div className="chat-right">
      <RightNavBar />
      <ChatPage />
    </div>
  );
}

export default ChatRight;
