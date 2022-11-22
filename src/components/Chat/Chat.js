import React from "react";
import "./Chat.css";
import ChatLeft from "./ChatLeft/ChatLeft";
import ChatRight from "./ChatRight/ChatRight";

function Chat() {
  return (
    <div className="chat">
      <ChatLeft />
      <ChatRight />
    </div>
  );
}

export default Chat;
