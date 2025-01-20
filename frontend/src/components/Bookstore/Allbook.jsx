import React, { useEffect, useState } from 'react'

import './Allbook.css';
import axios from 'axios';

import {Link, useNavigate} from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import Footer from '../Footer/Footer';





const Allbook = () => {

  const [books , setBooks]=useState([]);



  const getData=async()=>{

    try{
      // Note: this is one method to fetch
      // const response=await fetch("http://localhost:5100/findbook")
      // const data= await response.json();


      // if(data.length > 0){
      //   setBooks(data);
      // }
      // console.log(data);

     
    //  this is simplest method to fetch data 
      const response=await axios.get("http://localhost:5100/findbook")
      console.log(response.data);
      setBooks(response.data);
      

    }catch(err){
      console.log(err);
    }
  }


  useEffect(()=>{

    getData();
  },[])



  // Delete Book Part 
  
  const deleteBook=async(userId)=>{

    try{
      const response=await axios.delete(`http://localhost:5100/deletebook/${userId}`);
      setBooks((prev)=>prev.filter((user)=> user._id !==userId))
      console.log(response);

    }catch(err){
      console.log(err);
    }


  }


  return (
   

    <>

    

    <div className='allbook' >

      <h1>Best Seller Books</h1>




    <div className="book-card">

 


      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

       


       {

        books.map(item => <SwiperSlide key={item._id}>



          <Link to="/">

            <div>
              <img src={item.imageurl} alt="" />
           
            </div>

            <div className='title'>
              <p>{item.booktitle}</p>
              <p>{item.authorname}</p>
              <p>${40}</p>
            </div>


            <Link>
             
             <button className='btn-1' type='submit' ><Link to={`/updatebook/${item._id}`}>Update</Link></button>
             <button className='btn-2' type='submit' ><Link to={`/deletebook/${item._id}`} onClick={()=>deleteBook(item._id)} >Delete </Link></button>

             </Link>

          </Link>



        </SwiperSlide>)
       } 


     
      </Swiper>




      </div>




    </div>


    </>

    
  )
}

export default Allbook;