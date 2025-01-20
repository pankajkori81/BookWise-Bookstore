import React, { useEffect, useState } from 'react';
import './Deletebook.css';

import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Deletebook = () => {

  const [book , setBook]=useState({
    booktitle:"",
    authorname:"",
    imageurl:"",
    category:"",
    bookdescription:"",
    bookpdfurl:""
  })

  const navigate=useNavigate();

  const backbtn=()=>{

    navigate("/allbook")

  }


  const {id}=useParams();
  const getData=async()=>{

    try{

      const response=await axios.get(`http://localhost:5100/singlebook/${id}`)
      console.log(response.data);

    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{

    getData();
  },[])

  return (
    
    <>
    
    <div className="deletebook">
      <h2>Book Deleted Successfully</h2> 
      <button type='submit' onClick={backbtn}>Back</button>
    </div>
    
    </>
    


  )
}

export default Deletebook;