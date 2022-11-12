import React, { useState } from "react";
import "./Post.css";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { BiComment, BiShare } from "react-icons/bi";
import { likePost } from "../../../../Api/PostApi";

function Post({ post, user }) {
  const [liked, setLiked] = useState(post.likes.includes(user._id));
  const [numberOfLikes, setNumberOfLikes] = useState(post.likes.length);

  const handleLiked = () => {
    setLiked((prev) => !prev);
    likePost(post._id, user._id);
    liked
      ? setNumberOfLikes((prev) => prev - 1)
      : setNumberOfLikes((prev) => prev + 1);
  };
  return (
    <div className="post">
      <img src={post.image} alt="post-img" />
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
        <p>name</p>
        <p>{post.description}</p>
        <p>#tags</p>
      </div>
    </div>
  );
}

export default Post;
