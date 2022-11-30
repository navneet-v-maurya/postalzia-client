import React, { useEffect, useState } from "react";
import "./ChatPage.css";
import UserChat from "../../ChatLeft/ChatList/UserChat/UserChat";
import Chats from "./Chats/Chats";
import WriteChatNav from "./WriteChatNav/WriteChatNav";
import { useSelector } from "react-redux";
import { addMessageApi } from "../../../Api/MessageApi";
import Loading from "../../../Loading/Loading";

function ChatPage({ messages, activeChat }) {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [newMessage, setNewMessage] = useState("");
  const [message, setMessage] = useState([]);
  const loading = useSelector((state) => state.messageReducer.loading);

  const handleChange = (newMessage) => {
    setNewMessage(newMessage);
  };

  useEffect(() => {
    setMessage(messages);
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const toBeSentMessage = {
      text: newMessage,
      senderId: user._id,
      chatId: activeChat._id,
    };

    try {
      const { data } = await addMessageApi(toBeSentMessage);
      setMessage([...message, data]);
      setNewMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="chat-page">
      {activeChat === null ? (
        "Click on chat to start a conversation"
      ) : (
        <>
          <div>
            <UserChat chat={activeChat} />
            <hr />
          </div>
          {loading ? (
            <Loading auth={false} loadinType="Fetching Chats.." />
          ) : (
            <Chats messages={message} user={user} />
          )}

          <WriteChatNav
            newMessage={newMessage}
            handleChange={handleChange}
            handleSendMessage={handleSendMessage}
          />
        </>
      )}
    </div>
  );
}

export default ChatPage;
