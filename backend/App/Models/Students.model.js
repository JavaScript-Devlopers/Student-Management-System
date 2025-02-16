const { Schema, model } = require('mongoose')
const mongoose = require('mongoose')
const studentSchema = new Schema({
    FullName: {
        type: String,
        required: true,
        trim: true,
        default: null
    },
    StudentID_Card: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        default: null
    },
    Email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    Student_PhoneNo: {
        type: String,
        required: true,
        trim: true,
        min: 10,
        max: 10,
        unique: true,
    },
    Password: {
        type: String,
        required: true,
        trim: true,
        default: null
    },
    Class_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref : "Class"
    },
    section: {
        type: String,
        enum: ["A", "B", "C", "D", "E"],
        default: "A",
    },
    Gender: {
        type: Number,
        enum: [0, 1, 2] // 0 = male ,1 = female , 2 = other

    },
    DOB: {
        type: Date,
        required: true
    },
    Address: {
        type: String,
        default: null

    },
    subject: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref : 'Subject'
    }],
    Roll_number: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    ParentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Parent",
        required: true
    },
    Role: {
        type: String,
        required: true,
        default: "STUDENT",
    }
})

const student_model = model("Student", studentSchema)

module.exports = student_model