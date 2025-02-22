const { model, Schema, default: mongoose } = require('mongoose')

const School_Schema = new Schema({

    School_Name: {
        type: String,
        required: true,
    },
    Address: {
        type: String,
        required: true,
    },
    Contact: {
        type: String,
        required: true,
    },
    Admin_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
},
    {
        timestamps: true
    },)

const School_model = model("School_detail", School_Schema)

module.exports = School_model