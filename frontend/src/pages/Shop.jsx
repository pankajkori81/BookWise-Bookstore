import React, { useEffect, useState } from 'react';

import './Shop.css';
import axios from 'axios';

import { Link } from 'react-router-dom';
import Footer from '../component/Footer/Footer';

const Shop = () => {

   const [shopBook  , setShopBook]=useState([])


   const ShopData=async()=>{

    const response=await axios.get("http://localhost:5100/findbook" , shopBook)
    console.log(response.data);
    setShopBook(response.data);

   }

   useEffect(()=>{
    ShopData()
   },[])


  return (
    
    <>
    
     <div className="shop">
     <h1>Book Shop</h1>
      <hr className='line' />

      <div className="shop-book">

        

      

        {
          shopBook.map(item => {

           const { _id, booktitle , authorname , imageurl}=item;

            return(

              <div className='book-part' key={_id}>

                <img src={imageurl} alt="" />
                <h2>{booktitle}</h2>
                <p>{authorname}</p>
                
                <Link>

                <button type='submit'>Buy Now</button>

                </Link>

              </div>


            )
          })
        }


      </div>

      {/* footer part  */}

      <Footer/>
     </div>

 
    </>

  )
}

export default Shop;