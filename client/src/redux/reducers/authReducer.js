import { actionTypes } from "../constants/actionTypes";

const initialState = {
    isAuthenticated: false,
    user: "",
};

export const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.USER_SIGN_IN:
            return { ...state, user: payload.user };

        default:
            return state;
    }
};
