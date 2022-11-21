import axios from "axios";

const URL = "http://localhost:5000";

export const logInApi = (UserData) => axios.post(`${URL}/auth/login`, UserData);

export const signUpApi = (UserData) =>
  axios.post(`${URL}/auth/register`, UserData);
