import express from "express";

import bookController from "../controller/bookController.js";

import bookModel from "../model/bookstore.js";

const bookrouter=express.Router();


// creatabook
bookrouter.get("/createbook" , bookController.createBook);
bookrouter.post("/createbook" , bookController.createBook);


// findbook 
bookrouter.get("/findbook" , bookController.Findbook);
bookrouter.post("/findbook" , bookController.Findbook);


// single book
bookrouter.get("/singlebook/:id" , bookController.Singlebook);


//update book
bookrouter.put("/updatebook/:id" , bookController.Updatebook);


//delete book
bookrouter.delete("/deletebook/:id", bookController.Deletebook);



export default bookrouter;