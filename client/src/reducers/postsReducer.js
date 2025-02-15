import {
  FETCH_POSTS,
  FETCH_POST,
  CREATE_POST,
  POSTS_ERROR,
  DELETE_POST,
  UPDATE_POST,
  FETCH_USER_POSTS,
} from "../constants/actionTypes";

const initialState = {
  post: null,
  posts: [],
  loading: false,

  error: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, posts: action.payload };
    case CREATE_POST:
      return { ...state, posts: [...state.posts, action.payload], error: null };
    case FETCH_POST:
      return {
        ...state,
        post: action.payload,
        loading: false,
        error: null,
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case POSTS_ERROR:
      return { ...state, error: action.payload };
    case FETCH_USER_POSTS:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

export default postReducer;
