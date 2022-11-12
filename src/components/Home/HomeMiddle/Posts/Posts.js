import React, { useEffect } from "react";
import Post from "./Post/Post";
import "./Posts.css";
import { useDispatch, useSelector } from "react-redux";
import { getTimeLinePosts } from "../../../Redux/Actions/PostAction";

function Posts() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const { posts, loading } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(getTimeLinePosts(user._id));
  }, []);

  return (
    <div className="posts">
      {loading
        ? "Fetching Posts...."
        : posts.map((post) => <Post post={post} user={user} />)}
    </div>
  );
}

export default Posts;
