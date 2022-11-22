import React from "react";
import "./ChatLeft.css";
import SearchBar from "../../Home/HomeLeft/SearchBar/SearchBar";
import ChatList from "./ChatList/ChatList";

function ChatLeft() {
  return (
    <div className="chat-left">
      <SearchBar />
      <ChatList />
    </div>
  );
}

export default ChatLeft;
