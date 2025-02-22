"use strict"

const { Schema, model } = require('mongoose');
const mongoose = require('mongoose')

const Teachersdata = Schema({

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
        unique: true,
        default: null
    },
    PhoneNo: {
        type: Number,
        required: true,
        trim: true,
        unique: true,
        default: null
    },
    Password: {
        type: String,
        required: true,
        trim: true,
        default: null
    },
    Gender: {
        type: Number,
        enum: [0, 1, 2] // 0 = male ,1 = female , 2 = other

    },
    Address: {
        type: String,
        default: null

    },
    Subject: {
        type: [String],
        trim: true,
        default: []
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
const Teacher_model = model('Teachers', Teachersdata);



module.exports = Teacher_model;
