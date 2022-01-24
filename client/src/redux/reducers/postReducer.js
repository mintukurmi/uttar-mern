import { actionTypes } from "../constants/actionTypes";

const initialState = {
    latestPosts: [],
    selectedPost: {},
    categories: [],
};

export const postReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.FETCH_LATEST_POSTS:
            return { ...state, latestPosts: payload };

        case actionTypes.FETCH_POST_BY_ID:
            return { ...state, selectedPost: payload };

        case actionTypes.FETCH_ALL_CATEGORIES:
            return { ...state, categories: payload };

        default:
            return state;
    }
};
