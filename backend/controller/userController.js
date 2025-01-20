
import mongoose from "mongoose";
import userModel from "../model/user.js";
import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";

const SECRET_KEY="klcphajhbdaajcama";

class userController{


    // created user
    static createUser=async(req  , res)=>{


        try{
        
        const {name , email , password}=req.body;

        const hashpassword= await bcrypt.hash(password , 10);
            const userdata=new userModel({
            
                name:name,
                email:email,
                password:hashpassword
            
            })

            const result=await userdata.save()
            console.log(result);

            if(!result){
                return res.status(404).json({msg:"User Not Found"})
            }

             return res.status(200).json({msg:"user created"})


        }catch(err){

            console.log(err);
        }
    }


    // find user and email matched part
 
    static FindUser=async(req ,res)=>{

        try{

            const {email , password}=req.body;

            const result=await userModel.findOne({email:email});
            

            if(result!=null){
                const isMatch=await bcrypt.compare(password , result.password);

            if(result.email===email && isMatch){
                
                const token=jwt.sign({email:email} , SECRET_KEY , {expiresIn:"5m"})
                res.cookie("token", token , {httpOnly:true ,maxAge:360000})


                return res.status(200).json({msg:"Login Successful" , token})

             
            }
          
            return res.status(404).json({msg:"email and password not matched"})

             }else{
                res.status(404).json({msg:"user not registered"})
             }

         
             

        }catch(err){
            console.log(err);
        }
    }


    // find all user 

    static FindAllUser=async(req , res)=>{

        try{

            const result=await userModel.find();
            
            if(!result){
                return res.status(404).json({msg:"No Data Available" , result })

            }

            return res.status(200).json({msg:"All Data" , result})

        }catch(err){
            console.log(err);
        }
    }


    // find one user 

    static FindOneUser=async(req ,res)=>{

        try{
            
            
            const id=req.params.id;
            const result=await userModel.findById(id) 

            if(!result){
                return res.status(404).json({msg:"No Data Available" , result })
            }

            return res.status(200).json({msg:"One User Info." , result})

        }catch(err){

        console.log(err);
        }
    }

    
}

export default userController;