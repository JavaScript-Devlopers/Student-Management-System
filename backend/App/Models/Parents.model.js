const { model, Schema, default: mongoose } = require('mongoose')


const ParentSchema = new Schema({
    FatherName: {
        type: String,
        trim: true,
        required: true,
        default: null,
    },
    Mother_Name: {
        type: String,
        trim: true,
        required: true,
        default: null,
    },
    Parent_Email: {
        type: String,
        trim: true,
    },
    PhoneNo: {
        type: Number,
        trim: true,
        required: true,


    },
    Alternate_PhoneNo: {
        type: Number,
        trim: true,
        required: true,
        default: null
    },
    User_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null
    },
    Role: {
        type: String,
        required: true,
        trim: true,
        default: "PARENT",
    }
},
    {
        timestamps: true
    })

const Parent_model = model('Parent', ParentSchema)

module.exports = Parent_model