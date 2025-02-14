const {model , Schema, default: mongoose} = require('mongoose')

const FeeSchema = new Schema({
    StudentId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Student',
        required : true,
        unique : true
    },
    Amount : {
        type : Number,
        required : true,
    },
    status : {
        type : String,
        enum : [0,1,2],   // 0=> Pending , 1=> complete, 2=> reject
        required : true,
    },
    PaymentMethod : {
        type : String,
        required : true,
        enum : [0,1]  // 0=> online , 1=> offline
    },
    Transection_Id : {
        type : String,
        required : true,
        defauld : null
    }
},
{timestamps : true}
)

const Fee_model = model("Fee", FeeSchema)

module.exports = Fee_model