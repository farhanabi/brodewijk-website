import React from 'react';
// import { useEffect, useState, useRef } from 'react';
import classes from './ContactUs.css';
import Header from '../../Components/Header/Header';
// import Carousel from '../component/BookCarousel';
import Footer from '../../Components/Footer/Footer';

function BookAppointment() {
  return (
    <div className={classes.App}>
      <div className={classes.stickyHeader}><Header textColor='black' active='contact-us' blackLogo/></div>
      <div className={classes.firstGrids} id='firstGrid'>
        <div className={classes.firstGrid} style={{textAlign:'left'}}>
          <h3>Email:</h3><a href='mailto:contact@brodewijk.com' target='_blank' rel='noopener noreferrer'><p>contact@brodewijk.com</p></a>
          <h3>Instagram:</h3><a href='https://www.instagram.com/brodewijk.id' target='_blank' rel='noopener noreferrer'><p>@brodewijk.id</p></a>
          <h3>Call/Whatsapp:</h3>
          <p><a href='tel:+19179009571' target='_blank' rel='noopener noreferrer'>+1 (917) 900-9571 (<a className={classes.call} href='tel:+19179009571' target='_blank' rel='noopener noreferrer'>Call</a> only)</a> </p>
          <p><a href='tel:+628156051373' target='_blank' rel='noopener noreferrer'>+62 8156051373 (<a className={classes.call} href='tel:+628156051373' target='_blank' rel='noopener noreferrer'>Call</a> or <a className={classes.call} href='https://api.whatsapp.com/send?phone=628156051373&text=Hi%20Brodewijk!%20I%20am%20interested%20to%20learn%20more%20about%20you' target='_blank' rel='noopener noreferrer'>WhatsApp</a>)</a></p>
        </div>
        <div className={classes.firstGrid}>
          <img alt=''></img>
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