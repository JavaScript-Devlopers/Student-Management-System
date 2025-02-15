"use strict";
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const db = require('../../Models');
const student_db = db.Student_model;


class Auth {

    async addStudent(req, res) {
        try {
            const {
                FullName, UserName, Email, Student_PhoneNo, Password, Class_id, Gender, DOB,
                Address, subject, Roll_number, ParentId, Role, Alternate_PhoneNo, FatherName,
                Mother_Name, Parent_Email, PhoneNo
            } = req.body;


            if (!FullName || !UserName || !Email || !Student_PhoneNo || !Password || !Gender ||
                !DOB || !Address || !subject || !studentId || !ParentId || !Role) {
                return res.json({ status: false, msg: "All fields are required", data: [] });
            }


            const normalizedEmail = Email.toLowerCase().trim();
            const normalizedUserName = UserName.toLowerCase().trim();


            const existingEmail = await Student_model.findOne({ Email: normalizedEmail });
            if (existingEmail) {
                return res.json({ status: false, msg: "Email already exists", data: [] });
            }


            const existingUserName = await Student_model.findOne({ UserName: normalizedUserName });
            if (existingUserName) {
                return res.json({ status: false, msg: "Username already exists", data: [] });
            }


            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(Password, salt);


            const newParents = new Parent_model({
                FatherName,
                Mother_Name,
                Parent_Email,
                PhoneNo,
                Role,
                Alternate_PhoneNo
            });

            await newParents.save();


            const newStudent = new Student_model({
                FullName,
                UserName: normalizedUserName,
                Email: normalizedEmail,
                Student_PhoneNo,
                Password: hashedPassword,
                Gender,
                DOB,
                Address,
                subject,
                Roll_number,
                ParentId: newParents._id,
                Role,
                Class_id
            });

            await newStudent.save();

            return res.json({ status: true, msg: "Student added successfully", data: newStudent });

        } catch (error) {
            console.error("Error adding student:", error);
            return res.json({ status: false, msg: "Server Error", data: [] });
        }
    }

    async updateStudent(req, res) {


    }

    async getAllStudent(req, res) {
        try {
            const { classname, section } = req.body
            if (classname == undefined || classname == null || classname == "") {
                res.send({ status: false, msg: "Class Name is require", data: [] })
            }

            else if (section == undefined || section == null || section == "") {
                res.send({ status: false, msg: "section name is require", data: [] })
            }

            const allStudents = await student_db.find()

            console

        }
        catch (err) {
            console.log("Error", err)
            res.send({ status: true, msg: "internal server error", data: [] })

        }


    }
}


module.exports = new Auth();