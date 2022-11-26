import React, { useState } from "react";
import "./WriteChatNav.css";
import { BsPlusLg } from "react-icons/bs";
import InputEmoji from "react-input-emoji";

function WriteChatNav() {
  const [newMessage, setNewMessage] = useState("");
  const handleChange = (newMessage) => {
    setNewMessage(newMessage);
  };
  return (
    <div className="write-chat">
      <BsPlusLg />
      <InputEmoji value={newMessage} onChange={handleChange} />
      <button>Send</button>
    </div>
  );
}

export default WriteChatNav;
