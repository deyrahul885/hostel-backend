const mongoose = require('mongoose')
const visitorSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
 
})

const Visitor = mongoose.model("visitors",visitorSchema)
module.exports = Visitor;