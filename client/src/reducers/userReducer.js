import {
  AUTH,
  LOGOUT,
  LOGIN_FAIL,
  GET_USER_PROFILE,
  GET_PROFILE_REQUEST,
  USER_ERRORS,
} from "../constants/actionTypes";

const initialState = {
  authData: JSON.parse(localStorage.getItem("profile")) || null,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      return { ...state, authData: action.payload, error: null };
    case LOGOUT:
      return { ...state, authData: null, error: null };
    case LOGIN_FAIL:
      return { ...state, error: action.payload };
    case GET_PROFILE_REQUEST:
      return { ...state, loading: true };
    case GET_USER_PROFILE:
      return { ...state, loading: false, userProfile: action.payload };
    case USER_ERRORS:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
