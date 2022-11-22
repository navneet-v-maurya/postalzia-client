import React from "react";
import "./UserChat.css";
import profilePic from "../../../../../images/navneet.jpg";
function UserChat() {
  return (
    <div className="user-chat">
      <img src={profilePic} />
      <div>
        <p>Navneet Maurya</p>
        <p>Online</p>
      </div>
    </div>
  );
}

export default UserChat;
