import axios from "axios";

const URL = "https://postalzia.herokuapp.com";

export const logInApi = (UserData) => axios.post(`${URL}/auth/login`, UserData);

export const signUpApi = (UserData) =>
  axios.post(`${URL}/auth/register`, UserData);
