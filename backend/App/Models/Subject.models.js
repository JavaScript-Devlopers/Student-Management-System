"use strict"

const { Schema, model } = require('mongoose');
const mongoose = require('mongoose')

const Subjectdata = Schema({

    Subject_Name: {
        type: String,
        required: true,
        trim: true,
        default: null
    },
    Subject_Code: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        default: null
    },

    Description: {
        type: String,
        trim: true,
        default: null
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "USER"
    },
},
    {
        timestamps: true
    },

)
const Subject_model = model('Subject', Subjectdata);



module.exports = Subject_model;
