const { model, Schema, default: mongoose } = require('mongoose')

const classSchema = new Schema({
    className: {
        type: String,
        require: true,
        enum: [
            "Nursery", "LKG", "UKG",
            "Class 1", "Class 2", "Class 3", "Class 4", "Class 5",
            "Class 6", "Class 7", "Class 8", "Class 9", "Class 10",
            "Class 11", "Class 12"
        ]
    },
    section: {
        type: String,
        enum: ["A", "B", "C", "D", "E"],
        default: "A",
    },
    classTeacher: {
        type: String,
        require: true,
    },
    teachers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher",
        required: true
    }],
    subject: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subject",
        require: true
    }],
    student: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        require: true,
    }]
},
    {
        timestamps: true
    },)

const class_Model = model("Class", classSchema)

module.exports = class_Model