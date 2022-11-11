import React from "react";
import "./Post.css";
import { FcLikePlaceholder } from "react-icons/fc";
import { BiComment, BiShare } from "react-icons/bi";

function Post({ post }) {
  return (
    <div className="post">
      <img src={post.image} alt="post-img" />
      <div>
        <FcLikePlaceholder />
        <BiComment />
        <BiShare />
      </div>
      <p>{post.likes} likes</p>
      <div>
        <p>name</p>
        <p>{post.description}</p>
        <p>#tags</p>
      </div>
    </div>
  );
}

export default Post;
