"use strict";
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require('../../Models');
const User_models = db.User;


class Auth {



    async RegisterUser(req, res) {
        try {
            const { FullName, UserName, Email, PhoneNo, password, Role } = req.body;

            if (!FullName) {
                return res.json({ status: false, msg: "Full Name is required!", data: [] });
            }
            if (!UserName) {
                return res.json({ status: false, msg: "User Name is required!", data: [] });
            }
            if (!Email) {
                return res.json({ status: false, msg: "Email is required!", data: [] });
            }
            if (!PhoneNo) {
                return res.json({ status: false, msg: "Phone Number is required!", data: [] });
            }
            if (!password) {
                return res.json({ status: false, msg: "Password is required!", data: [] });
            }

            // Check if user already exists
            const existingUser = await User_models.findOne({
                $or: [{ UserName }, { Email }, { PhoneNo }],
            });

            if (existingUser) {
                if (existingUser.UserName === UserName) {
                    return res.json({ status: false, msg: "Username already exists", data: [] });
                }
                if (existingUser.Email === Email) {
                    return res.json({ status: false, msg: "Email already exists", data: [] });
                }
                if (existingUser.PhoneNo === PhoneNo) {
                    return res.json({ status: false, msg: "Phone Number already exists", data: [] });
                }
            }

            // Hash Password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            // Create new user
            const newUser = await User_models.create({
                FullName,
                UserName,
                Email,
                PhoneNo,
                Role,
                Password: hashedPassword,
            });

            return res.json({ status: true, msg: "User registered successfully!", data: newUser });

        } catch (error) {

            return res.json({ status: false, msg: "Internal Server Error", data: [] });
        }
    }


    async login(req, res) {
        try {
            const { Email, Password } = req.body;
            console.log("email", Email, Password)
            return
            const EmailCheck = await User_models.findOne({ Email: Email });
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