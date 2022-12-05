import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import FollowingModal from "../../../Modal/FollowingModal/FollowinfModal";
import "./ChatList.css";
import UserChat from "./UserChat/UserChat";

function ChatList({ chats, setChats, onlineUsers }) {
  const [modal, setModal] = useState(false);

  return (
    <div className="chat-list">
      <p>Chats</p>
      <div>
        {chats.map((chat) => {
          return (
            <UserChat key={chat._id} chat={chat} onlineUsers={onlineUsers} />
          );
        })}
      </div>
      <button
        onClick={() => {
          setModal(true);
        }}
      >
        Add new chat
      </button>
      {modal ? (
        <FollowingModal
          modal={modal}
          setModal={setModal}
          chats={chats}
          setChats={setChats}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default ChatList;
