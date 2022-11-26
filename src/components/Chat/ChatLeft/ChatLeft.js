import React from "react";
import "./ChatLeft.css";
import SearchBar from "../../Home/HomeLeft/SearchBar/SearchBar";
import ChatList from "./ChatList/ChatList";

function ChatLeft({ chats }) {
  return (
    <div className="chat-left">
      <SearchBar />
      <ChatList chats={chats} />
    </div>
  );
}

export default ChatLeft;
