"use strict";
const mongoose = require('mongoose');
const db = require('../../Models');
const Teacher_model = db.Teacher_model;
const bcrypt = require("bcrypt");


class Teachers {

    async addTeachers(req, res) {
        try {
            const { FullName, Email, PhoneNo, Password, Gender, Address, Subject, Role } = req.body

            

            if (!FullName) {
                return res.json({ status: false, msg: "Full Name is required!", data: [] });
            }
            if (!Email) {
                return res.json({ status: false, msg: "User Name is required!", data: [] });
            }
            if (!PhoneNo) {
                return res.json({ status: false, msg: "Email is required!", data: [] });
            }
            if (!Subject) {
                return res.json({ status: false, msg: "Phone Number is required!", data: [] });
            }
            if (!Password) {
                return res.json({ status: false, msg: "Password is required!", data: [] });
            }
            if (Gender === undefined || Gender === "" || Gender === null) {
                console.log("gent" , Gender)
                return res.json({ status: false, msg: "Gender is required!", data: [] });
            }
            if (!Address) {
                return res.json({ status: false, msg: "Address is required!", data: [] });
            }

            const existingUser = await Teacher_model.findOne({
                $or: [{ Email }, { PhoneNo }],
            });


            if (existingUser) {
                if (existingUser.Email === Email) {
                    return res.json({ status: false, msg: "Email already exists", data: [] });
                }
                if (existingUser.PhoneNo === PhoneNo) {
                    return res.json({ status: false, msg: "Phone Number already exists", data: [] });
                }
            }


            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(Password, salt);

            const newTeacher = new Teacher_model({
                FullName,
                Email,
                PhoneNo,
                Password: hashedPassword,
                Subject,
                Role,
                Gender,
                Address
            });

            await newTeacher.save();


            return res.json({ status: true, msg: "Added Successfully", data: newTeacher })

        } catch (error) {
            return res.json({ status: false, msg: "Server Error ", data: [] })

        }
    }

}

module.exports = new Teachers