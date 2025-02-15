"use strict";
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const db = require('../../Models');
const student_db = db.Student_model;


class Auth {

    async AddStudent(req, res){

    }

    async UpdateStudent(req, res){

    }

    async getAllStudent(req , res){
       try{
        const {classname, section} = req.body
        if(classname==undefined || classname==null || classname == ""){
            res.send({status : false, msg: "Class Name is require", data : []})
        }

        else if(section==undefined || section==null || section==""){
            res.send({status : false , msg: "section name is require", data : []})
        }
        
        const allStudents= await student_db.find()

        console

       }
       catch(err){
        console.log("Error", err)
        res.send({status : true, msg: "internal server error", data : []})

       }
      

    }
}


module.exports = new Auth();