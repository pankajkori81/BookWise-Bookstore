import React from 'react';
import './Home.css';
import Header from '../component/Header/Header';
import Createbook from '../component/Bookstore/Createbook';
import Allbook from '../component/Bookstore/Allbook';
import FavBook from '../BookStorepart/FavBook';
import Promobook from '../BookStorepart/Promobook';
import Otherbook from '../BookStorepart/Otherbook';
import Ourcustomer from '../BookStorepart/OurCustomer';
import Footer from '../component/Footer/Footer';
import Navbar from '../component/Navbar/Navbar';

const Home = () => {
  return (
   
    <>
    <Header/>
    <Allbook/>
    <FavBook/>
    <Promobook/>
    <Otherbook/>
    <Ourcustomer/>
    <Footer/>

    
    </>
  )
}

export default Home;