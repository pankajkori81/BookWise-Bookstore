

import mongoose from "mongoose";


// defining schema 

const bookSchema=new mongoose.Schema({

    booktitle:{type:String  , required:true},
    authorname:{type:String  , required:true},
    imageurl:{type:String , required:true},
    category:{type:String , required:true},
    bookdescription:{type:String  , required:true},
    bookpdfurl:{type:String , required:true},
    createdata:{type:Date , default:Date.now}

})


// compleing model


const bookModel=mongoose.model('bookstore' , bookSchema);


// export here

export default bookModel;

