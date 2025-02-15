import {
  FETCH_COMMENTS,
  CREATE_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT,
  COMMENTS_ERROR,
  COMMENT_DELETE_SUCCESS,
  DELETE_COMMENT_REQUEST,
  COMMENT_DELETE_FAIL,
} from "../constants/actionTypes";

const commentReducer = (state = { comments: [], error: null }, action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return { ...state, comments: action.payload, error: null };
    case CREATE_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
        error: null,
      };
    case DELETE_COMMENT_REQUEST:
      return { ...state, loading: true };
    case COMMENT_DELETE_SUCCESS:
      return {
        ...state,
        comments: state.comments.filter(
          (comment) => comment._id !== action.payload
        ),
      };
    case COMMENT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case UPDATE_COMMENT:
      return {
        ...state,
        comments: state.comments.map((comment) =>
          comment._id === action.payload._id ? action.payload : comment
        ),
        error: null,
      };

    case COMMENTS_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default commentReducer;
