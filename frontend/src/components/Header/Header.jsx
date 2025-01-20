import React, { useRef, useState } from 'react';

import './Header.css';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards } from 'swiper/modules';


const Header = () => {
  return (
    <>
      <div className="header">
        <div className="head-left">
          <h1>Buy and Sell Your Books <span>for the Best Price</span> </h1>

          <p>
            Cultural Repository: Bookstores serve as custodians of cultural
            heritage by offering a vast array of literature spanning various
            genres, eras, and perspectives. They preserve and propagate
            knowledge, allowing readers to explore diverse ideas and histories.
            These gatherings foster a sense of belonging and intellectual engagement among local residents.
          </p>


          <input type="text" placeholder="Search Your Book Here"  />
          <button type="submit">Search</button>
        </div>

        <div className="head-right">


        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1295750108i/8164754.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1400436772i/17277854.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1515447921i/36480253.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1597519233i/54846718.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1574224366l/53142062.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1344216126i/8164566.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1682285132i/139363868.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1706595673i/206184382.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1714730580i/212428885.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1715655679i/213236744.jpg" alt="" /></SwiperSlide>
       
      
      </Swiper>


        </div>
      </div>
    </>
  );
};

export default Header;
