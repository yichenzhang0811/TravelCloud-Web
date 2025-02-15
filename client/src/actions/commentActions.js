import {
  CREATE_COMMENT,
  FETCH_COMMENTS,
  COMMENTS_ERROR,
  COMMENT_DELETE_SUCCESS,
  COMMENT_DELETE_FAIL,
  DELETE_COMMENT_REQUEST,
} from "../constants/actionTypes";
import * as api from "../api/index.js";

// create New Comment
export const createComment = (commentData) => async (dispatch) => {
  try {
    const profile = JSON.parse(localStorage.getItem("profile"));
    const token = profile?.token; // 获取 token
    console.log("update post action", token);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const { data } = await api.createComment(commentData, config);
    dispatch({ type: CREATE_COMMENT, payload: data });
  } catch (error) {
    console.error(" Error creating comment:", error);
    dispatch({ type: COMMENTS_ERROR, payload: "Error creating post" });
  }
};

// get all comments belong to post
export const getCommentsByPost = (postId) => async (dispatch) => {
  try {
    const { data } = await api.fetchComments(postId);
    dispatch({ type: FETCH_COMMENTS, payload: data });
  } catch (error) {
    console.error("❌ Error fetching comments for postId:", postId);
  }
};

export const deleteComment = (commentId, postId) => async (dispatch) => {
  try {
    const profile = JSON.parse(localStorage.getItem("profile"));
    const token = profile?.token; // 获取 token
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    dispatch({ type: DELETE_COMMENT_REQUEST });
    await api.deleteComment(commentId, config);
    dispatch({ type: COMMENT_DELETE_SUCCESS, payload: commentId });
    // get the comment again
    dispatch(getCommentsByPost(postId));
  } catch (error) {
    dispatch({
      type: COMMENT_DELETE_FAIL,
      payload: error.response?.data?.message || "Failed to delete comment",
    });
  }
};
