import React, { useState } from 'react';
import './Register.css';

import {Link , useNavigate} from "react-router-dom";

import axios from "axios";
import Footer from '../Footer/Footer';

const Register = () => {


  const [user , setUser]=useState({
    name:"",
    email:"",
    password:""
  })


  const handleChange=(event)=>{

    const {name , value}=event.target;

    setUser({
      ...user ,
      [name]:value
    })

  }

  

  const navigate=useNavigate();

  const handleSubmit=async(event)=>{

    event.preventDefault();

    console.log(user);

    try{

      const response=await axios.post("http://localhost:5100/register" , user)
      console.log(response.data);
      setUser(response.data);

      if(response.data.msg){
        navigate("/login")
      }



    }catch(err){

      console.log(err);
    }

  }

  return (
   <>
   
   <div className="registerss">

  <div className="register">


    <div className="register-left">


    <img src="https://static.vecteezy.com/system/resources/thumbnails/008/199/073/small_2x/people-hand-entering-password-code-on-virtual-login-form-cyber-internet-security-photo.jpg" alt="register-img" />



 
  </div>


  <div className="register-part">

    <h2>Register Here</h2>

    <form  onSubmit={handleSubmit} >

      <label htmlFor="name">Name</label>
      <input type="text" name='name' placeholder='Enter Your Name' required  onChange={handleChange} value={user.name} />

      <label htmlFor="email">Email</label>
      <input type="email" name='email' placeholder='Enter Your Email' required onChange={handleChange} value={user.email} />

      <label htmlFor="password">Password</label>
      <input type="password" name='password' placeholder='Enter Your Password' required onChange={handleChange} value={user.password}  />


      <button type='submit'>Register</button>

      <hr className='line' />

      <p>Already Have An Account? <Link to="/login">Login</Link></p>



    </form>


    </div>

    </div>
    {/* footer part */}

    <Footer/>

  </div>
   
   </>
  )
}

export default Register