"use strict";
const mongoose = require('mongoose');
const db = require('../../Models');
const Teacher_model = db.Teacher_model;
const bcrypt = require("bcrypt");


class Teachers {

    async Addteachers(req, res) {
        try {
            const { FullName, Email, PhoneNo, Password, Subject, Role } = req.body
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
                Role
            });

            await newTeacher.save();


            return res.json({ status: true, msg: "Added Successfully", data: newTeacher })

        } catch (error) {
            return res.json({ status: false, msg: "Server Error ", data: [] })
        }
    }

    async updateTeacher(req, res) {
        const { id, FullName, Email, PhoneNo, Password, Subject, Role } = req.body
        if (!id) {
            return res.json({ status: false, msg: "ID is required", data: [] })
        }
        if (!FullName) {
            return res.json({ status: false, msg: "Full Name is required", data: [] })
        }
        if (!Email) {
            return res.json({ status: false, msg: "Email is required", data: [] })
        }
        if (!PhoneNo) {
            return res.json({ status: false, msg: "Phone Number is required", data: [] })
        }
        if (!Subject) {
            return res.json({ status: false, msg: "Subject is required", data: [] })
        }
    
        if (!Password) {
            return res.json({ status: false, msg: "Password is required", data: [] })
        }
    }

    async getAllteacher(req, res) {
        try {
            const search = req.query.search || "";
            const teachers = await Teacher_model.find({
                $or: [
                    { FullName: { $regex: search, $options: "i" } },
                    { Email: { $regex: search, $options: "i" } },
                    { PhoneNo: { $regex: search, $options: "i" } },
                ]
            });

            return res.json({ status: true, msg: "Filtered Teachers", data: teachers });
        } catch (error) {
            return res.json({ status: false, msg: "Server Error", data: [] });
        }
    }


    async deleteTeacher(req, res) {
        try {
            const { id } = req.body
            if (!id) {
                return res.json({ status: false, msg: "ID is required", data: [] })
            }
            const teacher = await Teacher_model.findByIdAndDelete(id)
            if (!teacher) {
                return res.json({ status: false, msg: "Teacher not found", data: [] })
            }
            return res.json({ status: true, msg: "Deleted Successfully", data: teacher })
        }
        catch (error) {
            return res.json({ status: false, msg: "Server Error", data: [] })
        }
    }





}

module.exports = new Teachers