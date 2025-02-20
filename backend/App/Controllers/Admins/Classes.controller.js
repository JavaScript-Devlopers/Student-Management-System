"use strict"
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const db = require('../../Models')
const class_model = db.class_model

class ClassName {


    async addClass(req, res) {

        try {
            const { className, section, classTeacher, teachers, subject } = req.body

            if (!className) {
                return res.json({ status: false, msg: "Class Name is required!", data: [] });
            }
            if (!section) {
                return res.json({ status: false, msg: "Section is required!", data: [] });
            }
            if (!classTeacher) {
                return res.json({ status: false, msg: "ClassTeacher is required!", data: [] });
            }
            if (!teachers) {
                return res.json({ status: false, msg: "Teachers is required!", data: [] });
            }
            if (!subject) {
                return res.json({ status: false, msg: "Subject is required!", data: [] });
            }

            const newclass = new class_model({
                className,
                section,
                classTeacher,
                teachers,
                subject
            })

            await newclass.save()
            return res.json({ status: true, msg: "Class added successfully", data: newclass });


        } catch (error) {
            console.log("error", error)
            return res.json({ status: false, msg: "Internal error ", data: [] });
        }


    }



    async getAllclass(req, res) {
        try {
            let result = await class_model.find({});

            if (result.length === 0) {
                return res.json({ status: false, msg: "No Class found", data: [] });
            }
            return res.json({ status: true, msg: "Success", data: result });

        } catch (error) {
            return res.json({ status: false, msg: "Server error", data: [] });
        }
    }


    async updateClass(req, res) {

    }

    async deleteClass(req, res) {
        try {
            const { id } = req.body;

            const result = await class_model.findByIdAndDelete(id);

            if (!result) {
                return res.json({ status: false, msg: "Class Not Found", data: [] });
            }

            return res.json({ status: true, msg: "Class Deleted Successfully", data: [] });

        } catch (error) {
            return res.json({ status: false, msg: "Internal Server Error", data: [] });
        }
    };

}

module.exports = new ClassName()