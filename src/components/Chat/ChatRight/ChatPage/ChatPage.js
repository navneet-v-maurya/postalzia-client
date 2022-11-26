import React from "react";
import "./ChatPage.css";
import UserChat from "../../ChatLeft/ChatList/UserChat/UserChat";
import Chats from "./Chats/Chats";
import WriteChatNav from "./WriteChatNav/WriteChatNav";
import { useSelector } from "react-redux";

function ChatPage() {
  const activeChat = useSelector((state) => state.ChatReducer.activeChat);
  return (
    <div className="chat-page">
      {activeChat === null ? (
        "Click on chat to statrt a conversation"
      ) : (
        <>
          <div>
            <UserChat chat={activeChat} />
            <hr />
          </div>
          <Chats />
          <WriteChatNav />
        </>
      )}
    </div>
  );
}

export default ChatPage;
