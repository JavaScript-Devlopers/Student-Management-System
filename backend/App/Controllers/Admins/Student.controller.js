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
                Address, subject, Role, Alternate_PhoneNo, FatherName,
                Mother_Name, PhoneNo, section, District, State
            } = req.body;


            if (!FullName || !Email || !Student_PhoneNo || !Password || !Gender || !Class_id ||
                !DOB || !Address || !subject || !Enrolment_Number || !section || !FatherName || !Mother_Name || !PhoneNo || !Role) {
                return res.json({ status: false, msg: "All fields are required", data: [] });
            }



            const normalizedEmail = Email.toLowerCase().trim();
            const existingEmail = await Student_model.findOne({ Email: normalizedEmail });
            if (existingEmail) {
                return res.json({ status: false, msg: "Email already exists", data: [] });
            }



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
        try {
            const { _id } = req.body;

            if (!_id) {
                return res.json({ status: false, msg: "Student ID is required", data: [] });
            }

            const existingStudent = await Student_model.findById(_id);
            if (!existingStudent) {
                return res.json({ status: false, msg: "Student not found", data: [] });
            }

            const {
                FullName, Enrolment_Number, Email, Student_PhoneNo, Gender, DOB,
                Address, subject, ParentId, Role, Alternate_PhoneNo, FatherName,
                Mother_Name, PhoneNo, section, District, State
            } = req.body;


            if (Email) {
                const normalizedEmail = Email.toLowerCase().trim();
                const emailExists = await Student_model.findOne({ Email: normalizedEmail, _id: { $ne: _id } });
                if (emailExists) {
                    return res.json({ status: false, msg: "Email already exists", data: [] });
                }
            }


            if (Enrolment_Number) {
                const normalizedEnrolmentNumber = Enrolment_Number.toLowerCase().trim();
                const enrolmentExists = await Student_model.findOne({ Enrolment_Number: normalizedEnrolmentNumber, _id: { $ne: _id } });
                if (enrolmentExists) {
                    return res.json({ status: false, msg: "Enrolment Number already exists", data: [] });
                }
            }

            // Update student details
            const updatedStudent = await Student_model.findByIdAndUpdate(
                _id,
                {
                    FullName,
                    Enrolment_Number,
                    Email,
                    Student_PhoneNo,
                    Gender,
                    DOB,
                    Address,
                    subject,
                    ParentId,
                    Role,
                    section,
                    District,
                    State,
                    Alternate_PhoneNo,
                    FatherName,
                    Mother_Name,
                    PhoneNo
                },
                { new: true }
            );

            if (!updatedStudent) {
                return res.json({ status: false, msg: "Failed to update student", data: [] });
            }

            return res.json({ status: true, msg: "Student updated successfully", data: updatedStudent });

        } catch (error) {
            console.error("Error updating student:", error);
            return res.status(500).json({ status: false, msg: "Server Error", data: [] });
        }
    }


    async getAllStudent(req, res) {
        try {
            const { classname, section } = req.body;
    
            if (!classname) {
                return res.send({ status: false, msg: "Class Name is required", data: [] });
            }
            if (!section) {
                return res.send({ status: false, msg: "Section Name is required", data: [] });
            }
    
            const studentDetails = await Student_model.aggregate([
                {
                    $match: { className: classname, section: section }  
                },
                {
                    $lookup: {
                        from: "parents",  
                        localField: "ParentId",
                        foreignField: "_id",
                        as: "Parent"
                    }
                },
                {
                    $unwind: { 
                        path: "$Parent", 
                        preserveNullAndEmptyArrays: true  
                    }
                },
                {
                    $sort: { name: 1 }  
                }
            ]);
    
            res.send({ status: true, msg: "Student Details", data: studentDetails });
    
        } catch (err) {
            console.error("Error:", err);
            res.status(500).send({ status: false, msg: "Internal Server Error", data: [] });
        }
    }
    
}


module.exports = new Auth();