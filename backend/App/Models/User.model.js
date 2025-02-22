"use strict"

const { Schema, model } = require('mongoose');
const mongoose = require('mongoose')
const Role = require('./role.model')




const userModel = Schema({
    FullName: {
        type: String,
        required: true,
        trim: true,
        default: null
    },
    Email: {
        type: String,
        required: true,
        trim: true,
        default: null
    },
    Password: {
        type: String,
        required: true,
        trim: true,
        default: null
    },
    PhoneNo: {
        type: Number,
        trim: true,

    },
    otp: {
        type: String,
        default: null
    },

    Role: {
        type: String,
        required: true
    },
},
    {
        timestamps: true
    },

)
const User_model = model('USER', userModel);



module.exports = User_model;
