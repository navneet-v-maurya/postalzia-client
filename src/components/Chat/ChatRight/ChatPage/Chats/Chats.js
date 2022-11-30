import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import "./Chats.css";
import moment from "moment";

function Chats({ messages, user }) {
  const scroll = useRef();

  useEffect(() => {
    scroll.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }, [messages]);

  return (
    <div className="chats">
      {messages.map((m) => {
        return (
          <div
            key={m._id}
            className={m.senderId === user._id ? "myChat" : "userChat"}
            style={
              m.senderId === user._id
                ? { alignSelf: "flex-end" }
                : { alignSelf: "flex-start" }
            }
          >
            {m.text}
            <p>{moment(m.createdAt).fromNow()}</p>
          </div>
        );
      })}
      <div ref={scroll} />
    </div>
  );
}

export default Chats;
