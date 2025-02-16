"use strict"

const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const db = require('../../Models')
const class_db = db.class_model

class ClassName {
    async addClass (req, res){
        const {className , section , classTeacher , teachers , subject} = req.body
        if(!className || !section || !classTeacher || !teachers || !subject){
            return res.send({status : false , msg: "All field require" , data : []})
        }

        
        

    }

    async updateClass(req, res){

    }

    async deleteClass(req, res){
        
    }

}

module.exports = ClassName