import mongoose from "mongoose";



const Connect_DB=async(database_url)=>{

    try{

        const db_option={

            dbName:"BookInventory"
        }

        const result=await mongoose.connect(database_url,db_option);
        console.log("Database Connected");

    }catch(err){

        console.log(err);
    }
}


export default Connect_DB;