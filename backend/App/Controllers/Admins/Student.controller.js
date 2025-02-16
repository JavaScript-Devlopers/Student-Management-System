"use strict";
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const db = require('../../Models');
const Student_model = db.Student_model;


class Auth {

    async addStudent(req, res) {
        try {
            const {
                FullName, Enrolment_Number, Email, Student_PhoneNo, Password, Class_id, Gender, DOB,
                Address, subject, ParentId, Role, Alternate_PhoneNo, FatherName,
                Mother_Name, Parent_Email, PhoneNo , section
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

            const findRoleNumber = await Student_model.countDocuments({ Class_id, section });
            const rollNumber = findRoleNumber + 1;



            // const classPrefixes = {
            //     "Nursery": "NRS",
            //     "LKG": "LKG",
            //     "UKG": "UKG",
            //     "Class 1": "CLS1",
            //     "Class 2": "CLS2",
            //     "Class 3": "CLS3",
            //     "Class 4": "CLS4",
            //     "Class 5": "CLS5",
            //     "Class 6": "CLS6",
            //     "Class 7": "CLS7",
            //     "Class 8": "CLS8",
            //     "Class 9": "CLS9",
            //     "Class 10": "CLS10",
            //     "Class 11": "CLS11",
            //     "Class 12": "CLS12"
            // };
            
            
            const normalizedEnrolmentNumber = UserName.toLowerCase().trim();
            const existingEnrolmentNumber = await Student_model.findOne({ UserName: normalizedEnrolmentNumber });
            if (existingEnrolmentNumber) {
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
                Enrolment_Number: normalizedEnrolmentNumber,
                Email: normalizedEmail,
                Student_PhoneNo,
                Password: hashedPassword,
                Gender,
                DOB,
                Address,
                subject,
                Roll_number : rollNumber,
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