import React, { useState } from "react";
import "./Post.css";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { BiComment, BiShare } from "react-icons/bi";
import { likePost } from "../../../../Api/PostApi";

import Option from "./Options/Option";
import { useParams } from "react-router-dom";

function Post({ post, user }) {
  const [liked, setLiked] = useState(post.likes.includes(user._id));
  const [numberOfLikes, setNumberOfLikes] = useState(post.likes.length);
  const params = useParams();
  const handleLiked = () => {
    setLiked((prev) => !prev);
    likePost(post._id, user._id);
    liked
      ? setNumberOfLikes((prev) => prev - 1)
      : setNumberOfLikes((prev) => prev + 1);
  };
  return (
    <div className="post">
      <div>
        <img src={post.image} />
        {!params || params.id !== user._id ? (
          ""
        ) : (
          <Option post={post} userId={user._id} />
        )}
      </div>

      <div>
        {liked ? (
          <FcLike onClick={handleLiked} />
        ) : (
          <FcLikePlaceholder onClick={handleLiked} />
        )}
        <BiComment />
        <BiShare />
      </div>
      <p>{numberOfLikes} likes</p>
      <div>
        <p>{post.userName}</p>
        <p>{post.description}</p>
        <p></p>
      </div>
    </div>
  );
}

export default Post;
