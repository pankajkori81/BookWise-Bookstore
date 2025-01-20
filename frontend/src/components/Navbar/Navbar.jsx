import React, { useState } from 'react';

import './Navbar.css';

import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const isUserLogedIn=!!localStorage.getItem("tokens");



  const [active , setActive]=useState();
   
  const naviagte=useNavigate()

  const homePage=()=>{

    naviagte("/");
  }


  const handleLogout=()=>{
   localStorage.removeItem("tokens");
    naviagte("/login")
  }

  return (
    
    <>
    
    <div className="navbar">

        <h1 onClick={homePage}>BookStore.</h1>

        <div className="nav-left">
          <li onClick={()=>setActive("home")} className={active==="home" ? "active" :""} ><Link to="/">Home</Link></li>
          <li onClick={()=>setActive("about")} className={active==="about" ? "active" :""} ><Link to="/about">About</Link></li>
          <li onClick={()=>setActive("shop")} className={active==="shop" ? "active" :""} ><Link to="/shop">Shop</Link></li>

          {

            isUserLogedIn ? (
              <>

              <li onClick={()=>setActive("createbook")} className={active==="createbook" ? "active" :""} ><Link to="/createbook">Addbook</Link></li>
              <li onClick={()=>setActive("allbook")} className={active==="allbook" ? "active" :""} ><Link to="/allbook">Allbook</Link></li>
              <li onClick={()=>setActive("booklist")} className={active==="booklist" ? "active" :""} ><Link to="/booklist">Booklist</Link></li>
              <li><Link className='logout-btn' onClick={handleLogout} >Logout</Link> </li>
    
              </>
            ) : (

              <>
             
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>

              </>
            )



          }
         
     

        </div>

        {/* <div className="nav-right">

        <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
        </div> */}



    </div>
    
    </>



  )
}

export default Navbar;