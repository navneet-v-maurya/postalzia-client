import React from "react";
import "./Option.css";
import { useDispatch } from "react-redux";
import { deltePostAction } from "../../../../../Redux/Actions/PostAction";
function Option({ post, userId }) {
  const dispatch = useDispatch();
  const hadnleDeletePost = () => {
    dispatch(deltePostAction(post._id, userId));
  };

  return (
    <button onClick={hadnleDeletePost} className="options">
      Delete
    </button>
  );
}

export default Option;
