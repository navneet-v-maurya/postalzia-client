import React, { useState } from "react";
import "./Form.css";
import { GiHummingbird } from "react-icons/gi";

function Form() {
  const [login, setLogin] = useState(false);

  return (
    <div className="form">
      <GiHummingbird />

      <form>
        <p>{login ? "Login" : "Sign up"}</p>
        {!login ? (
          <>
            <div>
              <input placeholder="First Name" type="text" />
              <input placeholder="Last Name" type="text" />
            </div>
            <input placeholder="Username" type="email" />
            <div>
              <input placeholder="Password" type="password" />
              <input placeholder="Confirm Password" type="password" />
            </div>
          </>
        ) : (
          <>
            <input placeholder="Username" type="email" />
            <input placeholder="Password" type="password" />
          </>
        )}
        <div>
          <p
            onClick={() => {
              setLogin(!login);
            }}
          >
            {login
              ? "Dont have an account Sign up"
              : "Already have an account Sign up"}
          </p>
          <button>{login ? "Login" : "Sign up"}</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
