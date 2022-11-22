import React, { useState } from "react";
import "./Form.css";
import { GiHummingbird } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { signUpAction, logInAction } from "../Redux/Actions/AuthAction";
import Loading from "../Loading/Loading";

function Form() {
  const dispatch = useDispatch();
  let loading = useSelector((state) => state.authReducer.loading);
  const [login, setLogin] = useState(false);
  const [passError, setPassError] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    userName: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!login) {
      if (userData.password !== userData.confirmPassword) {
        setPassError(true);
      } else {
        dispatch(signUpAction(userData));
        handleReset();
      }
    } else {
      dispatch(logInAction(userData));
      handleReset();
    }
  };

  const handleReset = () => {
    setUserData({
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
      userName: "",
    });
    setPassError(false);
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return loading ? (
    <Loading loadinType="Please wait!!" auth={true} />
  ) : (
    <div className="form">
      <GiHummingbird />

      <form onSubmit={handleSubmit}>
        <p>{login ? "Login" : "Sign up"}</p>
        {!login ? (
          <>
            <div>
              <input
                name="firstName"
                value={userData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                type="text"
              />
              <input
                name="lastName"
                value={userData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                type="text"
              />
            </div>
            <input
              name="userName"
              value={userData.userName}
              onChange={handleChange}
              placeholder="Username"
              type="email"
            />
            <div>
              <input
                name="password"
                value={userData.password}
                onChange={handleChange}
                placeholder="Password"
                type="password"
              />
              <input
                name="confirmPassword"
                value={userData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                type="password"
              />
            </div>
            {passError ? (
              <p
                style={{
                  fontSize: "small",
                  alignSelf: "flex-end",
                  color: "red",
                }}
              >
                * Confirm password is not same
              </p>
            ) : (
              ""
            )}
          </>
        ) : (
          <>
            <input
              name="userName"
              value={userData.userName}
              onChange={handleChange}
              placeholder="Username"
              type="email"
            />
            <input
              name="password"
              value={userData.password}
              onChange={handleChange}
              placeholder="Password"
              type="password"
            />
          </>
        )}
        <div>
          <p
            onClick={() => {
              setLogin(!login);
              handleReset();
            }}
          >
            {login
              ? "Dont have an account Sign up"
              : "Already have an account Sign up"}
          </p>
          <button disabled={loading} type="submit">
            {login ? "Login" : "Sign up"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
