import { createSlice } from "@reduxjs/toolkit";

const ISSERVER = typeof window === "undefined";
let initialState = {};

if (!ISSERVER) {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  initialState = {
    // userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
    userInfo: userInfo ? userInfo : null,
    isAuthenticated: userInfo ? true : null,
    pending: true,
    loading: false,
    token: localStorage.getItem("token"),
  };
  console.log(userInfo);
}

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.pending = false;
      state.isAuthenticated = false;
      state.token = null;
      state.loading = false;
    },
    registrationStart: (state) => {
      state.pending = true;
    },
    registrationEnd: (state) => {
      state.pending = false;
    },
    loginStart: (state) => {
      state.pending = true;
    },
    loginSuccess: (state, action) => {
      state.pending = false;
      state.isAuthenticated = true;
      state.userInfo = action.payload.user;
      localStorage.setItem("userInfo", JSON.stringify(action.payload.user));
      state.token = action.payload.user.token;
      localStorage.setItem("token", action.payload.user.token);
      console.log("gtsop");
    },
    loginFailure: (state) => {
      state.pending = false;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
      localStorage.clear();
      console.log("gjukj,hjg");
    },
    loadStart: (state) => {
      state.pending = true;
    },
    loadSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.userInfo = action.payload.user;
      state.token = localStorage.getItem("token");
      state.pending = false;
    },
    loadFailure: (state) => {
      state.pending = false;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userInfo = null;
      state.token = null;
      localStorage.clear();
      localStorage.removeItem("token");
      localStorage.removeItem("userInfo");
    },
  },
});

export const {
  registrationStart,
  registrationEnd,
  loginStart,
  loginFailure,
  loginSuccess,
  loadStart,
  loadSuccess,
  loadFailure,
  logout,
  reset,
} = authSlice.actions;
export default authSlice.reducer;
