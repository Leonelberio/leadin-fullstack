import axios from "axios";
import {
  registrationStart,
  registrationEnd,
  loginStart,
  loginFailure,
  loginSuccess,
  loadStart,
  loadSuccess,
  loadFailure
} from "./authSlice";
import { openAlert } from "../alertSlice";
import setBearer from "../../utils/setBearer";
// const baseUrl = "https://eyichem.herokuapp.com/api/";
// const baseUrl = "http://localhost:8080/api/";
// const baseUrl = "http://localhost:8080/api/";
const baseUrl = `${process.env.baseUrl}/api/`;


export const register = async (
  { firstName, lastName, email, password, repassword },
  dispatch
) => {
  dispatch(registrationStart());
  if (password !== repassword) {
    dispatch(
      openAlert({
        message: "Les 2 mots de passe ne sont pas identiques!",
        severity: "error"
      })
    );
  } else {
    try {
      const res = await axios.post(`${baseUrl}users/signup`, {
        firstName,
        lastName,
        email,
        password
      });
      dispatch(
        openAlert({
          message: res.data.message,
          severity: "success",
          nextRoute: "",
          duration: 1500
        })
      );
    } catch (error) {
      dispatch(
        openAlert({
          message: error?.response?.data?.errMessage
            ? error.response.data.errMessage
            : error.message,
          severity: "error"
        })
      );
    }
  }
  dispatch(registrationEnd());
};

export const login = async ({ email, password }, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`${baseUrl}auth/login`, { email, password });
    const { user, message } = res.data;
    localStorage.setItem("token", user.token);
    setBearer(user.token);
    dispatch(loginSuccess({ user }));
    dispatch(
      openAlert({
        message,
        severity: "success",
        duration: 500,
        nextRoute: "/"
      })
    );
  } catch (error) {
    dispatch(loginFailure());
    console.log(error);
    dispatch(
      openAlert({
        message: error?.response?.data?.errMessage
          ? error.response.data.errMessage
          : error.message,
        severity: "error"
      })
    );
  }
};

export const loadUser = async (dispatch) => {
  dispatch(loadStart());
  if (!localStorage.token) return dispatch(loadFailure());
  setBearer(localStorage.token);
  try {
    const res = await axios.get(baseUrl + "get-user");
    dispatch(loadSuccess({ user: res.data }));
  } catch (error) {
    dispatch(loadFailure());
  }
};

export const logout = () => {
  localStorage.removeItem("userInfo");
};
