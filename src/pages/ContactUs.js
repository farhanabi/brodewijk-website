import React, { useEffect, useState, useRef } from 'react';
import classes from './ContactUs.css';
import Header from '../component/HeaderContactUs';
// import Carousel from '../component/BookCarousel';
import Footer from '../component/Footer';

function BookAppointment() {
  return (
    <div className={classes.App}>
      <div className={classes.stickyHeader}><Header textColor='white'/></div>
      <div className={classes.firstGrids} id='firstGrid'>
        <div className={classes.firstGrid} style={{textAlign:'left'}}>
          <h3>Email:</h3><p>contact@brodewijk.com</p>
          <h3>Instagram:</h3><p>@brodewijk.id</p>
          <h3>Call/Whatsapp:</h3>
          <p>+62 81322600855 (Farhan)</p>
          <p>+62 8156051373 (Luthfi)</p>
        </div>
        <div className={classes.firstGrid}>
          <img></img>
        </div>
        <div className={classes.firstGrid}>
          <h1>Let's Talk!</h1>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default BookAppointment;