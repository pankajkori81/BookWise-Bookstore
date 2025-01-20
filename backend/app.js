import express from "express";

import cors from "cors";

import Connect_DB from "./dbconnect/dbconnect.js";

import userModel from "./model/user.js";

import bookModel from "./model/bookstore.js";

import router from "./routes/userroutes.js";

import bookrouter from "./routes/bookroutes.js";


import bodyParser from "body-parser";

const app=express();

const PORT=process.env.PORT || 5100

const database_url=process.env.database_url || "mongodb://localhost:27017"


// midleware 
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:"http://localhost:3000",
    methods:['GET' , 'POST' , 'PUT' ,'DELETE'],
    credentials:true
}));

// routes
app.use("/" , router);

app.use("/" , bookrouter);

// database connect
Connect_DB(database_url);

// calling models
userModel();

bookModel();



app.listen(PORT , "127.0.0.1" , ()=>{
    console.log(`${PORT} port is running`);
})