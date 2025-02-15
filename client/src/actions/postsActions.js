import {
  FETCH_POSTS,
  FETCH_POST,
  CREATE_POST,
  POSTS_ERROR,
  DELETE_POST,
  UPDATE_POST,
  FETCH_USER_POSTS,
} from "../constants/actionTypes";
import * as api from "../api/index.js";

// get posts for one City
export const getPostsByCity = (cityId) => async (dispatch) => {
  try {
    const { data } = await api.fetchPostsByCity(cityId);
    dispatch({ type: FETCH_POSTS, payload: data });
  } catch (error) {
    console.error("Error fetching posts for a specific City", error);
  }
};

// see one post in details
export const getPostById = (postId) => async (dispatch) => {
  try {
    const { data } = await api.fetchPost(postId);
    dispatch({ type: FETCH_POST, payload: data });
  } catch (error) {
    console.error("Error fetching this post", error);
  }
};

// create new post
export const createPost = (postData) => async (dispatch) => {
  try {
    const profile = JSON.parse(localStorage.getItem("profile"));
    const token = profile?.token;

    if (!token) {
      console.error("Unlogin users cannot create post");
      return Promise.reject("Unlogin Users");
    }

    // make the type is form-data for uploading images to S3
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };

    // send request
    const { data } = await api.createPost(postData, config);
    dispatch({ type: CREATE_POST, payload: data });

    return Promise.resolve(data);
  } catch (error) {
    console.error("Create Post failed", error.response?.data || error);
    dispatch({
      type: POSTS_ERROR,
      payload: error.response?.data?.message || "Create post failed",
    });

    return Promise.reject(error);
  }
};

//delete a post
export const deletePost = (postId, c) => async (dispatch) => {
  try {
    const profile = JSON.parse(localStorage.getItem("profile"));
    const token = profile?.token;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    await api.deletePost(postId, config);

    dispatch({ type: DELETE_POST, payload: postId });
    await dispatch({ type: FETCH_POSTS });

    return Promise.resolve();
  } catch (error) {
    dispatch({
      type: POSTS_ERROR,
      payload: error.response?.data?.message || "Failed to delete post",
    });
  }
};

// update a post
export const updatePost = (postId, postData) => async (dispatch) => {
  try {
    const profile = JSON.parse(localStorage.getItem("profile"));
    const token = profile?.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };

    const formData = new FormData();
    for (let key in postData) {
      if (key === "newImages") {
        // deal with data array
        for (let i = 0; i < postData[key].length; i++) {
          formData.append("newImages", postData[key][i]);
        }
      } else {
        formData.append(key, postData[key]);
      }
    }

    await api.updatePost(postId, postData, config);
    dispatch({ type: UPDATE_POST, payload: postData });
  } catch (error) {
    console.error("更新帖子失败:", error);
    throw error;
  }
};
// get users all post
export const getUserPosts = (userId) => async (dispatch) => {
  try {
    const { data } = await api.getUserPosts(userId);
    dispatch({
      type: FETCH_USER_POSTS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POSTS_ERROR,
      payload: error.response?.data?.message || "Failed to fetch posts",
    });
  }
};
