import React, { useEffect, useRef, useState } from "react";
import "./Chat.css";
import ChatLeft from "./ChatLeft/ChatLeft";
import ChatRight from "./ChatRight/ChatRight";
import { useSelector } from "react-redux";
import { userChats } from "../Api/ChatApi";

function Chat() {
  const [chats, setChats] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);

  const getUserChats = async () => {
    try {
      const { data } = await userChats(user._id);
      setChats(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserChats();
    // eslint-disable-next-line
  }, [user]);

  return (
    <div className="chat">
      <ChatLeft chats={chats} />
      <ChatRight />
    </div>
  );
}

export default Chat;
