
import mongoose from "mongoose";

import bookModel from "../model/bookstore.js";


class bookController{


    // create book
    static createBook=async(req , res)=>{

        try{

            const {booktitle , authorname , imageurl , category , bookdescription , bookpdfurl }=req.body;

            const bookData=new bookModel({
                booktitle:booktitle,
                authorname:authorname,
                imageurl:imageurl,
                category:category,
                bookdescription:bookdescription,
                bookpdfurl:bookpdfurl
            })


            const result=await bookData.save();

            if(!result){
                return res.status(404).json({msg:"No data found" , result})
            }

            return res.status(200).json({msg:"Book data Created" , result})

            

        }catch(err){
            console.log(err);
        }
    }


// findbook
    static Findbook=async(req ,res)=>{
        

        try{
            // NOTE: Frequently facing the problem here beacause of writing something in 
            // || json({msg:"data and aall"}) || this is not right method because of this 
            // fetching problem occuring so write only || json(result) || that's it 
            const result=await bookModel.find();
            console.log(result);
            if(!result){
                return res.status(404).json(result)                       
            }

            return res.status(200).json(result)


           
        }catch(err){
            console.log(err);
        }
    }



    // find sigal book
    static Singlebook=async(req ,res)=>{

        try{

            const id=req.params.id;

            const result=await bookModel.findById(id);

            if(!result){

                return res.status(404).json({msg:"No data available"})
            }

            return res.status(200).json(result)

        }catch(err){
            console.log(err);
        }
    }


    // updatebook 

    static Updatebook=async(req , res)=>{

        try{

            const id=req.params.id;

            const response=await bookModel.findById(id);

            if(!response){
                return res.status(404).json({msg:"Book Data not found"})
                
            }
            
            const UpdateBookPart=await bookModel.findByIdAndUpdate(id , req.body , {new:true})

            return res.status(200).json({msg:"book Updated" , UpdateBookPart})

        }catch(err){
            console.log(err);
        }
    }



    static Deletebook=async(req ,res)=>{

        try{

            const id=req.params.id;

            const response=await bookModel.findById(id);

            if(!response){
                return res.status(404).json({msg:"Book Data not found"})
                
            }

            const DeleteBookPart= await bookModel.findByIdAndDelete(id , req.body , {new:true})

            return res.status(200).json({msg:"Book Delete" , DeleteBookPart})

        }catch(err){
            console.log(err);
        }
    }



}

export default bookController;