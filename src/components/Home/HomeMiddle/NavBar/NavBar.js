import React, { useRef, useState } from "react";
import "./NavBar.css";
import { ImCross } from "react-icons/im";
import {
  HiOutlinePhotograph,
  HiOutlineVideoCamera,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { AiOutlineSchedule } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

import { useDispatch, useSelector } from "react-redux";
import { uploadPost } from "../../../Redux/Actions/UploadAction";

function NavBar() {
  const [image, setImage] = useState(null);
  const [desc, setDesc] = useState("");
  const imageRef = useRef();
  const dispatch = useDispatch();
  const uploading = useSelector((state) => state.postReducer.uploading);

  const { user } = useSelector((state) => state.authReducer.authData);

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setImage(base64);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      description: desc,
      image: image,
    };
    dispatch(uploadPost(newPost));
    handleReset();
  };

  const handleReset = () => {
    setImage(null);
    setDesc("");
  };

  return (
    <div className="navbar">
      <div className="navbar-search">
        {user.profilePic ? (
          <img src={user.profilePic} alt="profile" />
        ) : (
          <CgProfile className="default-profile-pic" />
        )}

        <input
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          type="search"
          placeholder="Whats Happening?"
        />
      </div>
      <div className="navbar-components">
        <p onClick={() => imageRef.current.click()}>
          <HiOutlinePhotograph /> Photo
        </p>

        <p>
          <HiOutlineVideoCamera /> Video
        </p>
        <p>
          <HiOutlineLocationMarker /> Location
        </p>
        <p>
          <AiOutlineSchedule /> Schedule
        </p>
        <button onClick={handleSubmit} disabled={uploading}>
          {uploading ? "Loading..." : "Share"}
        </button>
      </div>
      <div style={{ display: "none" }}>
        <input
          type="file"
          name="myImage"
          ref={imageRef}
          onChange={handleFileUpload}
        />
      </div>
      {image && (
        <div className="share-img-preview">
          <ImCross onClick={() => setImage(null)} />
          <img src={image} alt="selectedImage" />
        </div>
      )}
    </div>
  );
}

export default NavBar;
