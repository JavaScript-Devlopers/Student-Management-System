const {model , Schema, default: mongoose} = require('mongoose')


const ParentSchema = new Schema({
    Fullname : {
        type : String,
        trim : true,
        required : true,
        default: null,
    },
    Email : {
        type: String,
        trim : true,
        required : true,
        unique: true,
    },
    PhoneNo : {
        type : String,
        trim : true,
        required : true,
        max : 10,
        unique : true,
    },
    Childs : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Student",
        required : true
    }],
    Role : { 
        type: String,
        required : true,
        trim : true,
        default : "PARENT",
    } 

},
{
    timestamps : true
})

const Parent_model = model('Parent', ParentSchema)

module.exports = Parent_model