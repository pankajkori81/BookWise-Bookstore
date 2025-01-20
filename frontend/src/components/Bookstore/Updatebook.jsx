import React, { useEffect, useState } from 'react';
import './Updatebook.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Updatebook = () => {

  const [book , setBook]=useState({

    booktitle:"",
    authorname:"",
    imageurl:"",
    category:"",
    bookdescription:"",
    bookpdfurl:""

  })



  const handleChange=(event)=>{

    const {name , value}=event.target;

    setBook({
      ...book,
      [name]:value

    })
  }

  const {id}=useParams();

  const navigate=useNavigate();
  const handleSubmit=async(event)=>{

    event.preventDefault();

    console.log(book);


    try{

      const response=await axios.put(`http://localhost:5100/updatebook/${id}` , book)
      console.log(response.data);
      // setBook(response.data);
      
      if(response.data.msg){
        navigate("/allbook");
      }
    }catch(err){
      console.log(err);
    }



  }


  const fetchData=async()=>{

    try{
      const response=await axios.get(`http://localhost:5100/singlebook/${id}`);
      console.log(response.data);
      setBook(response.data);

    }catch(err){
      console.log(err);
    }

  }


  useEffect(()=>{
    fetchData();
  },[])


  return (
    
    <>
    
    <div className="updatebook">

      <h1>Update Book Here</h1>


      <form onSubmit={handleSubmit}>

        <label htmlFor="booktitle">Booktitle</label>
        <input type="text" name='booktitle' placeholder='Enter Book Name' required onChange={handleChange} value={book.booktitle} />


        <label htmlFor="authorname">Authorname</label>
        <input type="text" name='authorname' placeholder='Enter Author Name' required onChange={handleChange} value={book.authorname} />


        <label htmlFor="imageurl">Imageurl</label>
        <input type="text" name='imageurl' placeholder='Enter Book Link' required onChange={handleChange} value={book.imageurl} />


        <label htmlFor="category">Category</label>
        <input type="text" name='category' placeholder='Enter Book Category' required onChange={handleChange} value={book.category} />


        <label htmlFor="bookdescription">Bookdescription</label>
        <textarea name="bookdescription" placeholder='Enter Book Description' id="" cols="30" rows="6" required onChange={handleChange} value={book.bookdescription} />

        <label htmlFor="bookpdfurl">Bookpdfurl</label>
        <input type="text" name='bookpdfurl' placeholder='Enter Bookpdfurl' required onChange={handleChange} value={book.bookpdfurl} />



        <button type='submit'>Update Book</button>



      </form>



    </div>

    </>
    
  )
}

export default Updatebook;