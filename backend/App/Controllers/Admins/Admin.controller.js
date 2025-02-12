"use strict";
const mongoose = require('mongoose');
const db = require('../../Models');
const Subject_model = db.Subject_model;
const bcrypt = require("bcrypt");


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

}

module.exports = new Admin