import React from "react";
import "./ChatPage.css";
import UserChat from "../../ChatLeft/ChatList/UserChat/UserChat";
import Chats from "./Chats/Chats";
import WriteChatNav from "./WriteChatNav/WriteChatNav";

function ChatPage() {
  return (
    <div className="chat-page">
      <div>
        <UserChat />
        <hr />
      </div>
      <Chats />
      <WriteChatNav />
    </div>
  );
}

export default ChatPage;
