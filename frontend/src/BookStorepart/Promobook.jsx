import React from 'react';
import './Promobook.css';

import promoBook from '../assets/awardbooks.png';

const Promobook = () => {

    const date=new Date();
    const currentDate=date.getFullYear();
    

  return (
  
    <div className="promobook">

        <div className="promopart">

        <div className="promo-left">

           <h1>{currentDate}  National Book Award <span>for Fiction Shortlist </span> </h1>

           <button type='submit'>Explore</button>


        </div>

        <div className="promo-right">

            <img src={promoBook} alt="" />

        </div>

        </div>

      
    </div>

  )
}

export default Promobook;