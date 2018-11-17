import axios from "axios";
import {
  GET_POST,
  GET_POSTS,
  GET_ERRORS,
  ADD_POST,
  POST_LOADING
} from "./types";

export const setPostsLoading = () => {
  return {
    type: POST_LOADING
  };
};

export const addPost = postData => dispatch => {
  axios
    .post("/api/posts", postData)
    .then(res =>
      dispatch({
        type: ADD_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
export const getPosts = () => dispatch => {
  dispatch(setPostsLoading());
  axios
    .get("/api/posts")
    .then(res => {
      dispatch({
        type: GET_POSTS,
        payload: res.data
      });
    })
    .catch(err => {
      //If user is registered but no profile found, hence we send an empty object as profile
      dispatch({
        type: GET_POSTS,
        payload: null
      });
    });
};

export const getPostByID = id => dispatch => {
  dispatch(setPostsLoading());
  axios
    .get(`/api/posts/${id}`)
    .then(res => {
      dispatch({
        type: GET_POST,
        payload: res.data
      });
    })
    .catch(err => {
      //If user is registered but no profile found, hence we send an empty object as profile
      dispatch({
        type: GET_POST,
        payload: null
      });
    });
};
