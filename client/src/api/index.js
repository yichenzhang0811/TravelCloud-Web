import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5001/" });

// City API
// get all cities
export const fetchCities = () => api.get("/cities");
// get One City
export const fetchCity = (cityId) => {
  return api.get(`/cities/${cityId}`);
};
// create City
export const createCity = (newCity) => api.post("/cities", newCity);
// update City
export const updateCity = (cityId, updateCity) =>
  api.patch(`/cities/${cityId}`, updateCity);
//delete City
export const deleteCity = (cityId) => api.delete(`/cities/${cityId}`);

// Posts API
// get all posts of one City
export const fetchPostsByCity = (cityId) => api.get(`/posts/city/${cityId}`);
// get One post
export const fetchPost = (postId) => {
  return api.get(`/posts/${postId}`);
};
// create Post
export const createPost = (newPost, config) => {
  return api.post("/posts", newPost, config);
};

// delete Post
export const deletePost = (postId, config) => {
  api.delete(`/posts/${postId}`, config);
};
// update Post
// 这是api index.js
export const updatePost = (postId, postData, config) => {
  return api.put(`/posts/${postId}/edit`, postData, config);
};

// Users API
export const register = (formData) => api.post("/auth/register", formData);
export const login = (formData) => api.post("/auth/login", formData);
export const logout = () => api.post("/auth/logout");
export const getUserProfile = (userId) => api.get(`/users/${userId}`);
export const getUserPosts = (userId) => api.get(`/posts/users/${userId}`);
export const updateUserAvatar = (userId, avatarData) =>
  api.put(`/users/${userId}/avatar`, avatarData);

// Comment API
// create Commnent
export const createComment = (newComment, config) => {
  return api.post("/comments", newComment, config);
};
// get all Comments of one post
export const fetchComments = (postId) => api.get(`/comments/post/${postId}`);

// authization for change
api.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});
// delet Comment
export const deleteComment = (commentId, config) =>
  api.delete(`/comments/${commentId}`, config);
