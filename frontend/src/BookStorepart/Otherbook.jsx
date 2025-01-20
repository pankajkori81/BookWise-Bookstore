import axios from 'axios'
import React, { useEffect, useState } from 'react'

import './Otherbook.css';

const Otherbook = () => {

    const [otherBooks , setOtherBooks]=useState([])


    const getData=async()=>{
        try{

            const response=await axios.get("http://localhost:5100/findbook" , otherBooks);
            console.log(response.data);
            setOtherBooks(response.data.slice(0,10));

        }catch(err){
            console.log(err);
        }
    }


    useEffect(()=>{

        getData();
    },[])


  return (
  
    <>

    <div className="otherbook">


    <h1>Other Books</h1>
       

        <div className="other-part">
     

            {
                otherBooks.map(item=>{

                    const { _id, booktitle , authorname , imageurl}=item;

                    return(

                        <div className="books" key={_id}>

                            <img src={imageurl} alt="" />
                            <h1>{booktitle}</h1>
                            <p>{authorname}</p>

                        </div>
                        
                    )
                })
            }
            


        </div>
    </div>
    
    
    </>
  )
}

export default Otherbook;