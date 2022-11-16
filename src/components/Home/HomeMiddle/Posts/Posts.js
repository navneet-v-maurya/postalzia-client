import React, { useEffect } from "react";
import Post from "./Post/Post";
import "./Posts.css";
import { useDispatch, useSelector } from "react-redux";
import { getTimeLinePosts } from "../../../Redux/Actions/PostAction";
import { useParams } from "react-router-dom";
import Loading from "../../../Loading/Loading";

function Posts() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);
  const params = useParams();

  useEffect(() => {
    dispatch(getTimeLinePosts(user._id));
  }, [params.id]);

  if (!posts) return "no posts";
  if (params.id) {
    posts = posts.filter((post) => post.userId === params.id);
  }

  return (
    <div className="posts">
      {loading ? (
        <Loading loadinType="Fetching Posts..." />
      ) : (
        posts.map((post) => <Post post={post} user={user} key={post._id} />)
      )}
    </div>
  );
}

export default Posts;
