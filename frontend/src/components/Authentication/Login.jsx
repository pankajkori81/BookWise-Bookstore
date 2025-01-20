import React, { useState } from 'react';
import './Login.css';

import {Link , useNavigate} from "react-router-dom";
import axios from 'axios';
import Footer from '../Footer/Footer';

const Login = () => {


  const [user , setUser]=useState({
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
  
  axios.defaults.withCredentials=true;

  const handleSubmit=async(event)=>{

    event.preventDefault();

    console.log(user);

    try{

      const response=await axios.post("http://localhost:5100/login" , user)
      console.log(response.data);

      // token define here
      const tokens=response.data.token;
      localStorage.setItem("tokens" , tokens);
      setUser(response.data);

      if(response.data.msg){
        navigate("/")

        }

      }catch(err){
      console.log(err);
    }

    

  }

  return (
   <>

   <div className="logins">

   
  <div className="login">


    <div className="login-left">


    <img src="https://static.vecteezy.com/system/resources/thumbnails/008/199/073/small_2x/people-hand-entering-password-code-on-virtual-login-form-cyber-internet-security-photo.jpg" alt="login-img" />



 
  </div>


  <div className="login-part">

    <h2>Login Here</h2>

    <form  onSubmit={handleSubmit} >

      <label htmlFor="email">Email</label>
      <input type="email" name='email' placeholder='Enter Your Email' required onChange={handleChange} value={user.email} />

      <label htmlFor="password">Password</label>
      <input type="password" name='password' placeholder='Enter Your Password' required onChange={handleChange} value={user.password}  />


      <button type='submit'>Login</button>

      <hr className='line' />

      <p>Not Have An Account? <Link to="/register">Register</Link></p>



    </form>


    </div>

    </div>

    {/* footer part */}
    <Footer/>

  </div>
   
   </>
  )
}

export default Login