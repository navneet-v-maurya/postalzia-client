import React from "react";
import "./ChatLeft.css";
import SearchBar from "../../Home/HomeLeft/SearchBar/SearchBar";
import ChatList from "./ChatList/ChatList";

function ChatLeft({ chats, setChats, onlineUsers }) {
  return (
    <div className="chat-left">
      <SearchBar />
      <ChatList chats={chats} setChats={setChats} onlineUsers={onlineUsers} />
    </div>
  );
}

export default ChatLeft;
