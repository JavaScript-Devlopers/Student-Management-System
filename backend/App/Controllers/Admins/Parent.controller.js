"use strick"

const mongoose = require('mongoose')
const db = require('../../Models')

const parent_db = db.Parent_model

class Parent {

    async addParent(req, res) {
        const { FatherName, Mother_Name, Parent_Email, PhoneNo, Alternate_PhoneNo } = req.body

        try {


            if (!FatherName) {
               return res.send({ status: false, msg: "Father name is require", data: [] })
            }
            if (!Mother_Name) {
                return  res.send({ status: false, msg: "Mother name is require", data: [] })
            }
            if (!Parent_Email) {
                return res.send({ status: false, msg: "Parent email is require", data: [] })
            }
            if (!PhoneNo) {
                return res.send({ status: false, msg: "Parent Phone number is require", data: [] })
            }

            if (PhoneNo.length != 10 || Alternate_PhoneNo?.length != 10) {
                return res.send({ status: false, msg: "Phone number except only 10 digit", data: [] })
            }

            const querySearch = {
                $or: [
                    { Parent_Email },
                    { PhoneNo }
                ]
            }

            const isExit = await parent_db.findOne(querySearch)

            if (isExit) {
                if (isExit?.Parent_Email == Parent_Email) {
                    return  res.send({ status: false, msg: "Parent email already exit", data: [] })
                }
                if (isExit?.PhoneNo == PhoneNo) {
                    return res.send({ status: false, msg: "Parent Phone number already exit", data: [] })
                }
            }

            const newParent = new parent_db({
                FatherName,
                Mother_Name,
                Parent_Email,
                PhoneNo,
                Alternate_PhoneNo,
            })

            await newParent.save()

            return res.send({ status: true, msg: "Parent added successfully", data: newParent })
        }
        catch (err) {
            console.log("err", err)
            res.send({ status: false, msg: "Internal server error", data: [] })
        }


    }

    async editParent(req, res) {

    }
    async getAllParent(req, res) {

    }
    async deleteParent(req, res) {

    }

}

module.exports = new Parent()