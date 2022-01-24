/**
 *  This module is used for user authentication.
 *  It is passed as a middleware to the routes to authenticate every request comig into the server..
 */
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const Response = require("../utils/response.util");
const User = require("../models/User");
const Role = require("../utils/roles");

dotenv.config();

const secret = process.env.JWT_SECRET;

const auth = async (req, res, next) => {
    try {
        let user;
        // we are splitting the Bearer token string received in header and taking only JWT from it
        const token = req.headers.authorization.split(" ")[1];

        if (!token) {
            throw new Error("Token not received");
        }
        const decodedData = jwt.verify(token, secret);
        const _id = decodedData._id;

        // if user is user fetching data from mentee collections
        if (decodedData.role === Role.User) {
            user = await User.findOne({ _id, "tokens.token": token });
        }

        if (!user) {
            return Response.notfound(res, {});
        }
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        Response.forbidden(res, {}, "invalid token");
    }
};

module.exports = auth;
