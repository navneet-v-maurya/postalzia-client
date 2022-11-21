import React, { useState } from "react";
import "./InfoForm.css";
import imageCompression from "browser-image-compression";
import { useDispatch } from "react-redux";
import { UpdateUserAction } from "../../../Redux/Actions/UserAction";

function InfoForm({ user, setModal }) {
  const dispatch = useDispatch();
  const { password, ...other } = user;
  const [infoFormData, setInfoFormData] = useState(other);

  const handleChange = (e) => {
    setInfoFormData({ ...infoFormData, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(UpdateUserAction(user._id, infoFormData));
    setModal(false);
  };

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

  const handleImageChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const imageFile = e.target.files[0];
      const options = {
        maxSizeMB: 0.5,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };
      try {
        const compressedFile = await imageCompression(imageFile, options);
        const base64 = await convertToBase64(compressedFile);
        if (e.target.name === "profilePic") {
          setInfoFormData({ ...infoFormData, profilePic: base64 });
        } else {
          setInfoFormData({ ...infoFormData, coverPic: base64 });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form className="info-form">
      <p>Your Info</p>
      <div>
        <input
          name="firstName"
          onChange={handleChange}
          type="text"
          placeholder="First Name"
          value={infoFormData.firstName}
        />
        <input
          name="lastName"
          onChange={handleChange}
          type="text"
          placeholder="Last Name"
          value={infoFormData.lastName}
        />
      </div>
      <input
        name="worksAt"
        onChange={handleChange}
        type="text"
        placeholder="Works at"
        value={infoFormData.worksAt}
      />
      <div>
        <input
          name="livesIn"
          onChange={handleChange}
          type="text"
          placeholder="Lives in"
          value={infoFormData.livesIn}
        />
        <input
          name="country"
          onChange={handleChange}
          type="text"
          placeholder="Country"
          value={infoFormData.country}
        />
      </div>
      <input
        name="relationshipStatus"
        onChange={handleChange}
        type="text"
        placeholder="Relationship Status"
        value={infoFormData.relationshipStatus}
      />
      <div>
        <p>Profile Image</p>
        <input type="file" name="profilePic" onChange={handleImageChange} />
        <p>Cover Image</p>
        <input type="file" name="coverPic" onChange={handleImageChange} />
      </div>
      <button onClick={handleClick}>Update</button>
    </form>
  );
}

export default InfoForm;
