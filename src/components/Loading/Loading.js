import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../Redux/Actions/AuthAction";
import "./Loading.css";
import poolBird from "../../images/poolbird.ico";
function Loading({ loadinType, auth }) {
  const dispatch = useDispatch();

  const handleRedirect = () => {
    dispatch(logoutAction());
  };
  let [error, seterror] = useState(false);

  useEffect(() => {
    if (auth) {
      setTimeout(() => {
        seterror(true);
      }, 10000);
    }
  }, []);

  return (
    <div className="loading">
      {!error ? (
        <p>{loadinType}</p>
      ) : (
        <div className="login-again">
          Something went wrong!!
          <button onClick={handleRedirect}>Login again</button>
        </div>
      )}
      {error ? (
        <img src={poolBird} />
      ) : (
        <div className="scene">
          <div className="plane">
            <div className="cube cube--0">
              <div className="cube__side"></div>
              <div className="cube__side"></div>
              <div className="cube__side"></div>
              <div className="cube__side"></div>
              <div className="cube__side"></div>
              <div className="cube__side"></div>
            </div>
            <div className="shadow shadow--0"></div>
            <div className="cube cube--1">
              <div className="cube__side"></div>
              <div className="cube__side"></div>
              <div className="cube__side"></div>
              <div className="cube__side"></div>
              <div className="cube__side"></div>
              <div className="cube__side"></div>
            </div>
            <div className="shadow shadow--1"></div>
            <div className="cube cube--2">
              <div className="cube__side"></div>
              <div className="cube__side"></div>
              <div className="cube__side"></div>
              <div className="cube__side"></div>
              <div className="cube__side"></div>
              <div className="cube__side"></div>
            </div>
            <div className="shadow shadow--2"></div>
            <div className="cube cube--3">
              <div className="cube__side"></div>
              <div className="cube__side"></div>
              <div className="cube__side"></div>
              <div className="cube__side"></div>
              <div className="cube__side"></div>
              <div className="cube__side"></div>
            </div>
            <div className="shadow shadow--3"></div>
            <div className="cube cube--4">
              <div className="cube__side"></div>
              <div className="cube__side"></div>
              <div className="cube__side"></div>
              <div className="cube__side"></div>
              <div className="cube__side"></div>
              <div className="cube__side"></div>
            </div>
            <div className="shadow shadow--4"></div>
            <div className="cube cube--5">
              <div className="cube__side"></div>
              <div className="cube__side"></div>
              <div className="cube__side"></div>
              <div className="cube__side"></div>
              <div className="cube__side"></div>
              <div className="cube__side"></div>
            </div>
            <div className="shadow shadow--5"></div>
            <div className="cube cube--6">
              <div className="cube__side"></div>
              <div className="cube__side"></div>
              <div className="cube__side"></div>
              <div className="cube__side"></div>
              <div className="cube__side"></div>
              <div className="cube__side"></div>
            </div>
            <div className="shadow shadow--6"></div>
            <div className="cube cube--7">
              <div className="cube__side"></div>
              <div className="cube__side"></div>
              <div className="cube__side"></div>
              <div className="cube__side"></div>
              <div className="cube__side"></div>
              <div className="cube__side"></div>
            </div>
            <div className="shadow shadow--7"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Loading;
