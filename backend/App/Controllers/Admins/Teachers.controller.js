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
                return res.json({ status: false, msg: "PhoneNo is required!", data: [] });
            }
            if (!Subject) {
                return res.json({ status: false, msg: "Subject  is required!", data: [] });
            }
            if (!Password) {
                return res.json({ status: false, msg: "Password is required!", data: [] });
            }
            if (Gender === undefined || Gender === "" || Gender === null) {
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

        const teacher = await Teacher_model.findOne({ _id: id })
        if (!teacher) {
            return res.json({ status: false, msg: "Teacher not found", data: [] })
        }


    }





    async getAllteacher(req, res) {
        try {
            const search = req.body.search || "";

            const TeacherDetails = await Teacher_model.aggregate([
                {
                    $match: {
                        $or: [
                            { FullName: { $regex: search, $options: "i" } },
                            { Email: { $regex: search, $options: "i" } }
                        ]
                    }
                },
                {
                    $lookup: {
                        from: "subjects",
                        let: { subjectIds: "$Subject" },
                        pipeline: [
                            {
                                $match: {
                                    $expr: { $in: ["$_id", { $map: { input: "$$subjectIds", as: "id", in: { $toObjectId: "$$id" } } }] }
                                }
                            },
                            {
                                $project: { Subject_Name: 1, _id: 0 }
                            }
                        ],
                        as: "SubjectDetails"
                    }
                },
                
                {
                    $project: {
                        FullName: 1,
                        Email: 1,
                        PhoneNo: 1,
                        Address: 1,
                        Gender: 1,
                        Qualification: 1,
                        Experience: 1,
                        JoiningDate: 1,
                        SubjectDetails: "$SubjectDetails.Subject_Name" // Subject_Name की list दिखाने के लिए
                    }
                }
            ]);
            

            return res.json({ status: true, msg: "Filtered Teachers", data: TeacherDetails });
        } catch (error) {
            console.log("error", error);
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