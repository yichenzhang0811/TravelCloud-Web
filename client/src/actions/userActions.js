import {
  AUTH,
  LOGOUT,
  LOGIN_FAIL,
  GET_USER_PROFILE,
  USER_ERRORS,
} from "../constants/actionTypes";
import * as api from "../api/index.js";

// User Register
export const registerUser = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.register(formData);
    dispatch({ type: AUTH, payload: data });
    localStorage.setItem("profile", JSON.stringify(data));
    navigate("/");
  } catch (error) {
    console.error("Error registering user:", error);
  }
};

// User Login
export const loginUser = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);
    dispatch({ type: AUTH, payload: data });
    localStorage.setItem("profile", JSON.stringify(data)); // store the jwt

    navigate("/");
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Login failed, please try again";
    dispatch({
      type: LOGIN_FAIL,
      payload: errorMessage,
    });
  }
};
export const logoutUser = (navigate) => async (dispatch) => {
  try {
    // remove the data in local Storage
    localStorage.removeItem("profile");

    dispatch({ type: LOGOUT });
    navigate("/signin");
  } catch (error) {
    console.error("Logout failed:", error);
  }
};

// get user Profile
export const getUserProfile = (userId) => async (dispatch) => {
  try {
    const { data } = await api.getUserProfile(userId);
    dispatch({
      type: GET_USER_PROFILE,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_ERRORS,
      payload: error.response?.data?.message || "Failed to fetch profile",
    });
  }
};

// update photo for avatar
export const updateUserAvatar =
  (userId, avatar) => async (dispatch, getState) => {
    try {
      const { data } = await api.updateUserAvatar(userId, { avatar });
      //update avatar in the user object
      const updatedAuthData = {
        ...getState().auth.authData,
        user: { ...getState().auth.authData.user, avatar: data.avatar },
      };

      dispatch({ type: AUTH, payload: updatedAuthData });
      localStorage.setItem("profile", JSON.stringify(updatedAuthData));

      return Promise.resolve(data);
    } catch (error) {
      dispatch({
        type: USER_ERRORS,
        payload: error.response?.data?.message || "Failed to update avatar",
      });
      return Promise.reject(error);
    }
  };
