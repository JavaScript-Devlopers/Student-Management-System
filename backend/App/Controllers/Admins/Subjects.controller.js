"use strict";
const mongoose = require('mongoose');
const db = require('../../Models');
const Subject_model = db.Subject_model;

class Subjects {

    async addSubject(req, res) {
        try {
            const { Subject_Name, Subject_Code, Description, user_id } = req.body

            const isExits = await Subject_model.findOne({ Subject_Code: Subject_Code })

            if (isExits) {
                return res.send({ status: false, msg: "Subject code is already Exits", data: [] })
            }

            const newSubject = new Subject_model({
                Subject_Name,
                Subject_Code,
                Description,
                user_id,

            });

            await newSubject.save();


            return res.json({ status: true, msg: "Subject Added Successfully", data: newSubject })

        } catch (error) {
            console.log("err", error)
            return res.json({ status: false, msg: "Server Error ", data: [] })

        }
    }


    async getAllSubject(req, res) {
        try {
            let result = await Subject_model.find({});

            if (result.length === 0) {
                return res.json({ status: false, msg: "No subjects found", data: [] });
            }
            return res.json({ status: true, msg: "Success", data: result });

        } catch (error) {
            return res.status(500).json({ status: false, msg: "Server error", data: [] });
        }
    }




}

module.exports = new Subjects