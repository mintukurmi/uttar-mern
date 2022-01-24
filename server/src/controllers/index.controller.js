const User = require("../models/User");
const Response = require("../utils/response.util");
const bcrypt = require("bcryptjs");

module.exports = {
    loginHandler: async (req, res) => {
        try {
            const userFound = await User.findOne({ email: req.body.email });

            if (!userFound) {
                throw new Error("User not found");
            }

            const user = await User.findByCredentials(req.body.email, req.body.password);
            const token = await user.generateAuthToken();
            Response.success(res, { token, user: user._id }, "Signin successful");
        } catch (err) {
            console.log(err.message);
            Response.error(res, {});
        }
    },

    signupHandler: async (req, res) => {
        try {
            const { name, email, password, confirmPassword } = req.body;

            if (!name || !email || !password || !confirmPassword) {
                return Response.badrequest(res, {}, "All fields required");
            }

            if (password != confirmPassword) {
                return Response.error(res, {}, "Passwords doesn't match");
            }

            const newUser = new User({
                usermeta: {
                    name,
                },
                email,
                password,
            });
            newUser.usermeta.name = name;
            let hashedPassword = await bcrypt.hash(req.body.password, 8);
            newUser.password = hashedPassword;
            await newUser.save();
            Response.success(res, newUser);
        } catch (err) {
            console.log(err);
            Response.error(res, {});
        }
    },

    // user profile
    getUserProfie: async (req, res) => {
        try {
            const user = req.user;
            Response.success(res, { user });
        } catch (err) {
            Response.error(res, {});
        }
    },
    editProfileHandler: async (req, res) => {
        try {
            const user = req.user;
            const { name, phone, profession, bio } = req.body;

            if (name) {
                user.usermeta.name = name;
            }

            if (phone) {
                user.usermeta.phone = phone;
            }

            if (profession) {
                user.usermeta.profession = profession;
            }

            if (bio) {
                user.usermeta.bio = bio;
            }
            await user.save();
            Response.success(res, { user }, "Profile updated");
        } catch (err) {
            console.log(err);
            Response.error(res, {});
        }
    },

    logoutHandler: async (req, res) => {
        try {
            const user = req.user;
            user.tokens = [];
            await user.save();
            Response.success(res, {}, "Logout successful");
        } catch (err) {
            console.log(err);
            Response.error(res, {});
        }
    },
    fetchUserbyId: async (req, res) => {
        try {
            const _id = req.params.id;
            const user = await User.findById(_id);

            if (!user) {
                Response.notfound(res, {}, "User not found");
            }

            Response.success(res, { user }, "Logout successful");
        } catch (err) {
            console.log(err);
        }
    },
};
