const { model, Schema, default: mongoose } = require('mongoose');

const AttendanceSchema = new Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ["Present", "Absent", "Late"],
        required: true
    }
},
    { timestamps: true }
);

const Attendance = model("Attendance", AttendanceSchema);

module.exports = Attendance;
