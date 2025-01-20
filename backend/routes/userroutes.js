import express from "express";

const router=express.Router();

import userController from "../controller/userController.js";

// import bookController from "../controller/bookController.js";


router.get("/" , (req ,res)=>{

    res.send("home page");
});


// create user data
router.get("/register" ,userController.createUser)
router.post("/register" ,userController.createUser)


// find login data 
router.get("/login" ,userController.FindUser);
router.post("/login" ,userController.FindUser);



// findall user data
router.get("/findall" ,userController.FindAllUser)
router.post("/findall" ,userController.FindAllUser)


// findone user data 
router.get("/findoneuser/:id" , userController.FindOneUser);
router.post("/findoneuser/:id" , userController.FindOneUser);





// book routes 

// router.get("/createbook" , bookController.createBook);
// router.post("/createbook" , bookController.createBook);


// // findbook 
// router.get("/findbook" , bookController.Findbook);
// router.post("/findbook" , bookController.Findbook);


// // single book
// router.get("/singlebook/:id" , bookController.Singlebook);


// //update book
// router.put("/updatebook/:id" , bookController.Updatebook);


// //delete book
// router.delete("/deletebook/:id", bookController.Deletebook);



export default router;

