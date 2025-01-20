
import mongoose from "mongoose";

//defining schema 


const userSchema=new mongoose.Schema({

    name:{type:String , required:true},
    email:{type:String , required:true , unique:true},
    password:{type:String , required:true},
    createdate:{type:Date , default:Date.now}

})


// compaling model


const userModel=mongoose.model('user' , userSchema);


// export here

export default userModel;