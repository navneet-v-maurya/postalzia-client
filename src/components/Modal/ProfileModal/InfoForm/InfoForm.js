import React from "react";
import "./InfoForm.css";

function InfoForm() {
  return (
    <form className="info-form">
      <p>Your Info</p>
      <div>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
      </div>
      <input type="text" placeholder="Works at" />
      <div>
        <input type="text" placeholder="Lives in" />
        <input type="text" placeholder="Country" />
      </div>
      <input type="text" placeholder="Relationship Status" />
      <div>
        <p>Profile Image</p>
        <input type="file" />
        <p>Cover Image</p>
        <input type="file" />
      </div>
    </form>
  );
}

export default InfoForm;
