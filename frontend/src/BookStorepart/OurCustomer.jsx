import React, { useState } from 'react'
import './OurCustomer.css';

import { FaStar } from "react-icons/fa";

import propic  from   '../assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg';

import menpic from "../assets/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg";

import profilepic from "../assets/jurica-koletic-7YVZYZeITc8-unsplash.jpg";


const Ourcustomer = () => {          

    const [rating , setRating]=useState(null);

    const [colorRate , setColorRate]=useState(null);

    // const 



  return (
    
    
    <>
    <div className="customer">
    <h1>Our Satisfied Customer</h1>

    <div className="customer-detail">

   

    <div className='card-box'>




        {[...Array(5)].map( (star , index) =>{
            const currentRate=index+1

            return(
               <>
               
               <label>
                <FaStar  className='star' size={30}   value={currentRate}  onClick={()=>setRating(currentRate)}  color={currentRate <= ( colorRate || rating ) ? "yellow" : "gray" }  />

                </label>

               </>

            )

        })}


        <div className='card-title' >
            <p>The book store was excellent! I had the steak, and it was arrange perfectly.
            The service was wonderful. Some of the book was so attentive and accommodating.
            I had a great experience at this book store</p>

            <img src={propic} alt="" />
            <h2>Nevali mark</h2>
            <p>CEO of ABC Company</p>

        </div>


    </div>


    <div className='card-box'>


        

{[...Array(5)].map( (star , index) =>{
    const currentRate=index+1

    return(
       <>
       
       <label>
        <FaStar  className='star' size={30}   value={currentRate}  onClick={()=>setRating(currentRate)}  color={currentRate <= ( colorRate || rating ) ? "yellow" : "gray" }  />

        </label>

       </>

    )

})}


<div className='card-title' >
    <p>The book store was excellent! I had the steak, and it was arrange perfectly.
    The service was wonderful. Some of the book was so attentive and accommodating.
    I had a great experience at this book store</p>

    <img src={menpic} alt="" />
    <h2>Rio moss</h2>
    <p>CEO of ABC Company</p>

</div>


</div>




<div className='card-box'>


        

{[...Array(5)].map( (star , index) =>{
    const currentRate=index+1

    return(
       <>
       
       <label>
        <FaStar  className='star' size={30}   value={currentRate}  onClick={()=>setRating(currentRate)}  color={currentRate <= ( colorRate || rating ) ? "yellow" : "gray" }  />

        </label>

       </>

    )

})}


<div className='card-title' >
    <p>The book store was excellent! I had the steak, and it was arrange perfectly.
    The service was wonderful. Some of the book was so attentive and accommodating.
    I had a great experience at this book store</p>

    <img src={profilepic} alt="" />
    <h2>John mark</h2>
    <p>CEO of ABC Company</p>

</div>


</div>



<div className='card-box'>
  

{[...Array(5)].map( (star , index) =>{
    const currentRate=index+1

    return(
       <>
       
       <label>
        <FaStar  className='star' size={30}   value={currentRate}  onClick={()=>setRating(currentRate)}  color={currentRate <= ( colorRate || rating ) ? "yellow" : "gray" }  />

        </label>

       </>

    )

})}


<div className='card-title' >
    <p>The book store was excellent! I had the steak, and it was arrange perfectly.
    The service was wonderful. Some of the book was so attentive and accommodating.
    I had a great experience at this book store</p>

    <img src={menpic} alt="" />
    <h2>denver mark</h2>
    <p>CEO of ABC Company</p>

</div>


</div>



<div className='card-box'>
  

{[...Array(5)].map( (star , index) =>{
    const currentRate=index+1

    return(
       <>
       
       <label>
        <FaStar  className='star' size={30}   value={currentRate}  onClick={()=>setRating(currentRate)}  color={currentRate <= ( colorRate || rating ) ? "yellow" : "gray" }  />

        </label>

       </>

    )

})}


<div className='card-title' >
    <p>The book store was excellent! I had the steak, and it was arrange perfectly.
    The service was wonderful. Some of the book was so attentive and accommodating.
    I had a great experience at this book store</p>

    <img src={propic} alt="" />
    <h2>Nova mark</h2>
    <p>CEO of ABC Company</p>

</div>


</div>



<div className='card-box'>
  

{[...Array(5)].map( (star , index) =>{
    const currentRate=index+1

    return(
       <>
       
       <label>
        <FaStar  className='star' size={30}   value={currentRate}  onClick={()=>setRating(currentRate)}  color={currentRate <= ( colorRate || rating ) ? "yellow" : "gray" }  />

        </label>

       </>

    )

})}


<div className='card-title' >
    <p>The book store was excellent! I had the steak, and it was arrange perfectly.
    The service was wonderful. Some of the book was so attentive and accommodating.
    I had a great experience at this book store</p>

    <img src={profilepic} alt="" />
    <h2>Berline mark</h2>
    <p>CEO of ABC Company</p>

</div>


</div>



    </div>

    </div>
    
    </>
  )
}

export default Ourcustomer;