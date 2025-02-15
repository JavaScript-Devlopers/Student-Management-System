"use strict";
const mongoose = require('mongoose');
const db = require('../../Models');
const Subject_model = db.Subject_model;
const bcrypt = require("bcrypt");
const Student_model = db.Student_model
const Parent_model = db.Parent_model

class Admin {

    async AddSubject(req, res) {
        try {
            const { Subject_Name, Subject_Code, Description, user_id } = req.body

            const newSubject = new Subject_model({
                Subject_Name,
                Subject_Code,
                Description,
                user_id,

            });

            await newSubject.save();


            return res.json({ status: true, msg: "Subject Added Successfully", data: newSubject })

        } catch (error) {

            return res.json({ status: false, msg: "Server Error ", data: [] })

        }
    }




    async AddStudent(req, res) {
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


}

module.exports = new Admin