"use strict";
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const db = require('../../Models');
const Student_model = db.Student_model;
const User = db.User
const Parent_model = db.Parent_model

class Auth {

    async addStudent(req, res) {
        try {
            const {
                FullName, Enrolment_Number, Email, Student_PhoneNo, Password, Class_id, Gender, DOB,
                Address, subject, ParentId, Role, Alternate_PhoneNo, FatherName,
                Mother_Name, PhoneNo, section, District, State
            } = req.body;

            if (!FullName || !Email || !Student_PhoneNo || !Password || !Gender || !Class_id ||
                !DOB || !Address || !subject || !ParentId || !Enrolment_Number || !section || !FatherName || !Mother_Name || !Parent_Email || !PhoneNo || !Role) {
                return res.json({ status: false, msg: "All fields are required", data: [] });
            }


            const normalizedEmail = Email.toLowerCase().trim();
            const existingEmail = await Student_model.findOne({ Email: normalizedEmail });
            if (existingEmail) {
                return res.json({ status: false, msg: "Email already exists", data: [] });
            }

            // const findRoleNumber = await Student_model.countDocuments({ Class_id, section });
            // const rollNumber = findRoleNumber + 1;

            const normalizedEnrolmentNumber = Enrolment_Number.toLowerCase().trim();
            const existingEnrolmentNumber = await Student_model.findOne({ Enrolment_Number: normalizedEnrolmentNumber });
            if (existingEnrolmentNumber) {
                return res.json({ status: false, msg: "Enrolment Number already exists", data: [] });
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(Password, salt);

            const newUser = new User({
                FullName,
                Email,
                Password: hashedPassword,
                otp: Password,
                Role
            });

            await newUser.save();

            const newParents = new Parent_model({
                FatherName,
                Mother_Name,
                PhoneNo,
                Role,
                Alternate_PhoneNo
            });

            await newParents.save();


            const newStudent = new Student_model({
                FullName,
                Enrolment_Number: normalizedEnrolmentNumber,
                Email: normalizedEmail,
                Student_PhoneNo,
                Password: hashedPassword,
                Gender,
                DOB,
                Address,
                subject,
                Roll_number: rollNumber,
                ParentId: newParents._id,
                Role,
                Class_id,
                section,
                User_id: newUser._id,
                District,
                State,



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