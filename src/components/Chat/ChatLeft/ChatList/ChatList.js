import React from "react";
import "./ChatList.css";
import UserChat from "./UserChat/UserChat";

function ChatList() {
  return (
    <div className="chat-list">
      <p>Chats</p>
      <div>
        <div>
          <UserChat />
          <hr />
        </div>
        <div>
          <UserChat />
          <hr />
        </div>

        <div>
          <UserChat />
          <hr />
        </div>
      </div>
    </div>
  );
}

export default ChatList;
