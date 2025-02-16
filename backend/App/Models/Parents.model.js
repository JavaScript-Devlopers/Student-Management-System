const {model , Schema, default: mongoose} = require('mongoose')


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
        required: true,
        unique: true,
    },
    PhoneNo: {
        type: String,
        trim: true,
        required: true,
        max: 10,
        min: 10,
        unique: true,
    },
    Alternate_PhoneNo: {
        type: String,
        trim: true,
        required: true,
        max: 10,
        min :10,
        unique: true,
        default : null
    },
    // Child_id: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Student",
    //     required: true
    // }],
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