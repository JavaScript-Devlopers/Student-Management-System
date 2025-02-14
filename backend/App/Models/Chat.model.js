const {Schema , model} = require('mongoose')
const mongoose = require('mongoose')
const ChatSchema = new Schema({
    className : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Class',
    },
    Sender_id : {
        type : mongoose.Schema.Types.ObjectId,
        required: true,

    },
    Recevier_id : {
        type : mongoose.Schema.Types.ObjectId,
        required: true,

    },
    Message : {
        type : String,
      
    },
    Status:{
        type:Number,
        enum:[0,1] // 0 - unseen ,1 seen 
    }

},

{
    timestamps: true
},

)

const Chat_model = model("Chatbox",ChatSchema)


module.exports = Chat_model