import { actionTypes } from "../constants/actionTypes";

export const setSignIn = (token) => {
    return {
        type: actionTypes.USER_SIGN_IN,
        payload: token,
    };
};
