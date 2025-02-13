const {model , Schema, default: mongoose} = require('mongoose')
const { schema } = require('./role.model')

const ParentSchema = new Schema({
    Fullname : {
        type : String,
        trim : true,
        require : true,
        default: null,
    },
    Email : {
        type: String,
        trim : true,
        require : true,
        unique: true,
    },
    PhoneNo : {
        type : String,
        trim : true,
        require : true,
        max : 10,
        unique : true,
    },
    Childs : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Student",
        require : true
    }],
    Role : { 
        type: String,
        require : true,
        trim : true,
        default : "PARENT",
    } 

},
{
    timestamps : true
})

const Parent_model = model('Parent', ParentSchema)

module.exports = Parent_model