import React, { useState } from "react";
import "./InfoForm.css";
import FileBase from "react-file-base64";
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
        <FileBase
          required
          value={infoFormData.profilePic}
          type="file"
          multiple={false}
          onDone={({ base64 }) =>
            setInfoFormData({ ...infoFormData, profilePic: base64 })
          }
        />
        <p>Cover Image</p>
        <FileBase
          required
          value={infoFormData.coverPic}
          type="file"
          multiple={false}
          onDone={({ base64 }) =>
            setInfoFormData({ ...infoFormData, coverPic: base64 })
          }
        />
      </div>
      <button onClick={handleClick}>Update</button>
    </form>
  );
}

export default InfoForm;
