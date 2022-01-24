import { actionTypes } from "../constants/actionTypes";

export const fetchLatestPosts = (latestPosts) => {
    return {
        type: actionTypes.FETCH_LATEST_POSTS,
        payload: latestPosts,
    };
};

export const createNewPost = (post) => {
    return {
        type: actionTypes.CREATE_NEW_POST,
        payload: post,
    };
};

export const fetchPostById = (post) => {
    return {
        type: actionTypes.FETCH_POST_BY_ID,
        payload: post,
    };
};

export const fetchAllCategories = (categories) => {
    return {
        type: actionTypes.FETCH_ALL_CATEGORIES,
        payload: categories,
    };
};
