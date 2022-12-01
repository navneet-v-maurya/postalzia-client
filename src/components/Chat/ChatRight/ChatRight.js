import React, { useEffect } from "react";
import "./ChatRight.css";
import RightNavBar from "../../Home/HomeRight/RightNavbar/RightNavbar";
import ChatPage from "./ChatPage/ChatPage";
import { useDispatch, useSelector } from "react-redux";
import { getMessagesAction } from "../../Redux/Actions/MessageAction";

function ChatRight({ socket, onlineUsers }) {
  const messages = useSelector((state) => state.messageReducer.messages);
  const activeChat = useSelector((state) => state.ChatReducer.activeChat);
  const dispatch = useDispatch();
  const getMessages = async () => {
    dispatch(getMessagesAction(activeChat._id));
  };
  useEffect(() => {
    if (activeChat !== null) {
      getMessages();
      //setMessage(messages);
    }
    // eslint-disable-next-line
  }, [activeChat]);

  return (
    <div className="chat-right">
      <RightNavBar />
      <ChatPage
        messages={messages}
        activeChat={activeChat}
        socket={socket}
        onlineUsers={onlineUsers}
      />
    </div>
  );
}

export default ChatRight;
