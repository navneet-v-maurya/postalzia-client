import React, { useState } from "react";
import "./WriteChatNav.css";
import { BsPlusLg } from "react-icons/bs";
import InputEmoji from "react-input-emoji";

function WriteChatNav({ newMessage, handleChange, handleSendMessage }) {
  return (
    <div className="write-chat">
      <BsPlusLg />
      <InputEmoji value={newMessage} onChange={handleChange} />
      <button type="submit" onClick={handleSendMessage}>
        Send
      </button>
    </div>
  );
}

export default WriteChatNav;
