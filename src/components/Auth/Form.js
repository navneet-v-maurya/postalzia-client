import React from "react";
import "./Form.css";

function Form() {
  return (
    <div className="form">
      <div>hoii</div>
      <form>
        <p>Sign Up</p>
        <div>
          <input placeholder="First Name" type="text" />
          <input placeholder="Last Name" type="text" />
        </div>
        <input placeholder="Username" type="email" />
        <div>
          <input placeholder="Password" type="password" />
          <input placeholder="Confirm Password" type="password" />
        </div>
        <div>
          <p>Already have an account Login</p>
          <button>Sign up</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
