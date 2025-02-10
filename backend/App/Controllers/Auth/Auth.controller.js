"use strict";
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require('../../Models');
const User = db.User;


class Auth {


    async login(req, res) {
        try {
            const { Email, Password } = req.body;

            const EmailCheck = await User.findOne({ Email: Email });
            if (!EmailCheck) {
                return res.send({ status: false, msg: 'User Not exists', data: [] });
            }

            // Password Check
            const validPassword = await bcrypt.compare(Password, EmailCheck.Password);

            if (validPassword == false) {
                return res.send({ status: false, msg: 'Password Not Match', data: [] });
            }


            // JWT TOKEN CREATE
            var token = jwt.sign({ id: EmailCheck._id }, process.env.SECRET, {
                expiresIn: 36000 // 10 hours
            });


            const user_login = new user_logs({
                user_Id: EmailCheck._id,
                admin_Id: EmailCheck.parent_id,
                login_status: "Panel On",
                role: EmailCheck.Role,
                device: "WEB",
                system_ip: ip

            })
            await user_login.save();



            try {
                return res.send({ status: true, msg: "Login Succesfully", data: msg })
            } catch (error) {
                console.log("Error Some Error in a login", error);
            }
        }
        catch (error) {

            res.send({ status: false, msg: "Server Side error", data: error })
        }

    }


}


module.exports = new Auth();