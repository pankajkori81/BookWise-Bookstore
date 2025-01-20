import React from "react";

import "./FavBook.css";

import FavbookImg from "../assets/multiple-book.webp";

const FavBook = () => {
  return (
    <>
      <div className="favbook">

        <div className="fav-left">
          <img src={FavbookImg} alt="" />
        </div>

        <div className="fav-right">
          <h1>Find Your Favorite <span> Book Here</span></h1>

          <p>
            A modern day (BBC) Merlin AU set at the University of St Andrews,
            featuring teetotal kickboxers, secret wizards, magnificent
            bodyguards of various genders, irate fairies, imprisoned dragons,
            crumbling gothic architecture, arrogant princes, adorable
            engineering students, stolen gold, magical doorways, attempted
            assassination, drunken students, shaving foam fights, embarrassing
            mornings after, The Hammer Dance, duty, responsibility, friendship
            and true love...
          </p>

          <div className="download-book">

            <div className="items">
                <h2>800+</h2>
                <p>Book Listing</p>
            </div>

            <div className="items">
                <h2>550+</h2>
                <p>Register User</p>
            </div>


            <div className="items">
                <h2>1200+</h2>
                <p>PDF Downloads</p>
            </div>



          </div>
          <button type="submit">Explore</button>
        </div>
      </div>
    </>
  );
};

export default FavBook;
