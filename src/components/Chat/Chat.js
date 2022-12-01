import React, { useEffect, useRef, useState } from "react";
import "./Chat.css";
import ChatLeft from "./ChatLeft/ChatLeft";
import ChatRight from "./ChatRight/ChatRight";
import { useSelector } from "react-redux";
import { userChats } from "../Api/ChatApi";
import io from "socket.io-client";
const socket = io.connect("http://localhost:8800");

function Chat() {
  const [chats, setChats] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    socket.emit("new-user-add", user._id);
    socket.on("get-users", (data) => {
      setOnlineUsers(data);
    });
    // eslint-disable-next-line
  }, [socket]);

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
      <ChatRight socket={socket} onlineUsers={onlineUsers} />
    </div>
  );
}

export default Chat;
