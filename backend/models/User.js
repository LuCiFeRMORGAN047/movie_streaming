const mongoose = require('mongoose')
const userSchema =  new mongoose.Schema({
    username : {
        type : String ,
        required : true , 
    } , 
    email :  {
        type : String ,
        required : true , 
        lowercase : true
    }  , 
    password : String ,
    posts : Array ,
    saved : Array ,
})


const User= mongoose.model("user" , userSchema)
module.exports = User