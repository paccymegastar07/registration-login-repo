
const mongoose=require('mongoose');
const Joi=require('joi');
const Schema=mongoose.Schema

const userSchema= new Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    confirm_password:{
        type:String,
        required:true,
    }

},
{
    timestamps:true
});


const User=mongoose.model("userData",userSchema);

module.exports=User;
