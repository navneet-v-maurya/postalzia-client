import React from "react";
import "./Post.css";
import { FcLikePlaceholder } from "react-icons/fc";
import { BiComment, BiShare } from "react-icons/bi";

import photo from "../../../../../images/background.jpg";

function Post() {
  return (
    <div className="post">
      <img src={photo} alt="post-img" />
      <div>
        <FcLikePlaceholder />
        <BiComment />
        <BiShare />
      </div>
      <p>2300 likes</p>
      <div>
        <p>Name</p>
        <p>Details</p>
        <p>#tags</p>
      </div>
    </div>
  );
}

export default Post;
