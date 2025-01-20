import React, { useState } from 'react';

import './Createbook.css';

import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Createbook = () => {

  const [book , setBook]=useState({


    booktitle:"",
    authorname:"",
    imageurl:"",
    category:"",
    bookdescription:"",
    bookpdfurl:""

  });


  const handleChange=(event)=>{

    const {name , value}=event.target;


    setBook({

      ...book,
      [name]:value
    })

  }


  const navigate=useNavigate();
 const handleSubmit=async(event)=>{

  event.preventDefault();

  console.log(book);


  try{

    const response=await axios.post("http://localhost:5100/createbook" , book);
    console.log(response.data);
    setBook(response.data);


    if(response.data.msg){
     
      navigate("/allbook")
      
    }

  }catch(err){
    console.log(err);
  }



 }



  return (
   

    <>
    
     <div className="createbook">

      <h1>Add Book Here</h1>



      <form onSubmit={handleSubmit} >

        <label htmlFor="booktitle">Bookname</label>
        <input type="text" name='booktitle' placeholder='Enter Bookname' required  onChange={handleChange} value={book.booktitle} />


        <label htmlFor="authorname">Authorname</label>
        <input type="text" name='authorname' placeholder='Enter Authorname' required  onChange={handleChange} value={book.authorname} />

        <label htmlFor="imageurl">Image Url</label>
        <input type="text" name='imageurl' placeholder='Enter Imageurl'  required onChange={handleChange} value={book.imageurl} />


        <label htmlFor="category">Category</label>
        <input type="text" name='category' placeholder='Enter Category' required  onChange={handleChange} value={book.category} />


        <label htmlFor="bookdescription">Bookdescription</label>
        <textarea name="bookdescription" id="" cols="30" rows="6" placeholder='Enter Bookdescription' required onChange={handleChange} value={book.bookdescription}  />


        <label htmlFor="bookpdfurl">Bookpdfurl</label>
        <input type="text" name='bookpdfurl' placeholder='Enter bookpdfurl'  required onChange={handleChange} value={book.bookpdfurl} />


        <button type='submit'>Create Book</button>
       


      </form>




     </div>

         
    </>

  )
}

export default Createbook