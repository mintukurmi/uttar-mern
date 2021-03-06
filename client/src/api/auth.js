import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });
// const API = axios.create({ baseURL: "http://192.168.29.248:5000" });

// login user
export const executeLogin = (authData) =>
    API.post("/login", authData)
        .then((res) => res.data)
        .catch((error) => {
            return error.response;
        });

// signup user
export const executeSignup = (data) =>
    API.post("/signup", data)
        .then((res) => res.data)
        .catch((error) => {
            return error.response;
        });
