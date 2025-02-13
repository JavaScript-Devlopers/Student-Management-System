const {model , Schema} = require('mongoose');

const subjectmodel = Schema({
    SubjectName: {
        type: String,
        required: true,
        trim: true,
        default: null
    },
    SubjectCode: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        default: null
    }, 
    SubjectDescription: {
        type: String,
        required: true,
        trim: true,
        default: null
    },    
},
    {
        timestamps: true
    },
)

module.exports = model('Subject', subjectmodel)