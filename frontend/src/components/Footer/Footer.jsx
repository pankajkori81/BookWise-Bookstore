import React from 'react'

import './Footer.css';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {


    const date=new Date();
    const currentyear=date.getFullYear();
    
    const navigate=useNavigate()

    const homePage=()=>{
      navigate("/")
    }


  return (
   <>
    
    <div className="footer">


        <div className='foot-part'>
        <h1 onClick={homePage} >Book Store.</h1>
            

           <ul className='media'>
            <Link to="https://facebook.com" >facebook</Link>
            <Link to="https://youtube.com" >youtube</Link>
            <Link to="https://twitter.com" >twitter</Link>
            <Link to="https://github.com" >github</Link>

           </ul>

        </div>


        <div className='list-item'>

            <div className='list'>
              <h3>Company</h3>
             <p>  About Us</p>
             <p> Careers Apply Now!</p>
                   
            </div>

          

            <div className='list'>
              <h3>Partner</h3>
              <p>Distributions</p>
              <p>Partner Log In</p>
              <p>Marketing Solutions</p>           
            </div>

            <div className='list'>
              <h3>Support</h3>
              <p>Contact Us</p>
              <p>Help center</p>
              <p>India +91 34233 43555</p>   
              <p>US & UK 22 4545 6554</p>        
            </div>

            <div className='list'>
              <h3>Other Service</h3>
              <p>Connect with us</p>
              <p>Proper guidence</p>
    
                    
            </div>
        </div>


        <div className="condition">
           
           <div className="terms">

            <p>Copyright @{currentyear}Koriwebs. All Rights Reserved</p>


           </div>



           <div className="policy">

            <p>Privacy & Policy</p>
            <p>Legal Notice</p>
            <p>Cookies</p>
            <p>Terms & Conditions</p>
           
           </div>
 


        </div>




    </div>

   </>
  )
}

export default Footer;