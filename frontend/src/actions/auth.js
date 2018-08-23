import axios from "axios";
import { GET_ERRORS } from "./types";

export const registerUser = (user, history) => dispatch => {
  axios
    .post("/api/auth/register", user)
    .then(res => history.push("/login"))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const loginUser = user => dispatch => {
  axios
    .post("/api/auth/login", user)
    .then(res => console.log(res.data))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
