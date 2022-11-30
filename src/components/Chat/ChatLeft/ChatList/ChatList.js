import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import "./ChatList.css";
import UserChat from "./UserChat/UserChat";

function ChatList({ chats }) {
  return (
    <div className="chat-list">
      <p>Chats</p>
      <div>
        {chats.map((chat) => {
          return <UserChat key={chat._id} chat={chat} />;
        })}
      </div>
    </div>
  );
}

export default ChatList;
