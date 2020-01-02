import React from 'react';
// import { useEffect, useState, useRef } from 'react';
import classes from './ContactUs.css';
import Header from './components/HeaderContactUs';
// import Carousel from '../component/BookCarousel';
import Footer from './components/Footer';

function BookAppointment() {
  return (
    <div className={classes.App}>
      <div className={classes.stickyHeader}><Header textColor='white'/></div>
      <div className={classes.firstGrids} id='firstGrid'>
        <div className={classes.firstGrid} style={{textAlign:'left'}}>
          <h3>Email:</h3><a href='mailto:contact@brodewijk.com' target='_blank' rel='noopener noreferrer'>{/*<img src={require('../../img/foreign.png')} style={{maxWidth:10}} title='Email Link' alt=''></img>*/}<p>{/*<img src={require('../../img/email.png')} style={{maxWidth:13}} title='Email' alt='Email'></img>*/}contact@brodewijk.com</p></a>
          <h3>Instagram:</h3><a href='https://www.instagram.com/brodewijk.id' target='_blank' rel='noopener noreferrer'><p>{/*<img src={require('../../img/instagram.png')} style={{maxWidth:13}} title='Instagram' alt='Instagram'></img> <img src={require('../../img/foreign.png')} style={{maxWidth:10}} title='Instagram Link' alt=''></img>*/} @brodewijk.id </p></a>
          <h3>Call/Whatsapp:</h3>
          <p>{/*<img src={require('../../img/united-states-of-america.png')} style={{maxWidth:13}} title='United States of America' alt='United States of America'></img>*/}<a href='tel:+19179009571' target='_blank' rel='noopener noreferrer'>{/*<img src={require('../../img/telephone.png')} style={{maxWidth:13}} title='Phone' alt='Phone'></img>*/}+1 (917) 900-9571 (<a className={classes.call} href='tel:+19179009571' target='_blank' rel='noopener noreferrer'>Call</a> only)</a> </p>
          <p>{/*<img src={require('../../img/united-states-of-america.png')} style={{maxWidth:13}} title='United States of America' alt='United States of America'></img>*/}<a href='tel:+628156051373' target='_blank' rel='noopener noreferrer'>{/*<img src={require('../../img/telephone.png')} style={{maxWidth:13}} title='Phone' alt='Phone'></img>*/}+62 8156051373 (<a className={classes.call} href='tel:+628156051373' target='_blank' rel='noopener noreferrer'>Call</a> or <a className={classes.call} href='https://api.whatsapp.com/send?phone=628156051373&text=Hi%20Brodewijk!%20I%20am%20interested%20to%20learn%20more%20about%20you' target='_blank' rel='noopener noreferrer'>WhatsApp</a>)</a></p>
          {/*<p><img src={require('../../img/indonesia.png')} style={{maxWidth:13}} title='Indonesia' alt='Indonesia'></img> +62 8156051373 <a href='https://api.whatsapp.com/send?phone=628156051373&text=Hi%20Brodewijk!%20I%20am%20interested%20to%20learn%20more%20about%20you' target='_blank' rel='noopener noreferrer'><img src={require('../../img/whatsapp.png')} style={{maxWidth:13}} title='WhatsApp' alt='whatsapp'></img></a><a href='tel:+628156051373' target='_blank' rel='noopener noreferrer'><img src={require('../../img/telephone.png')} style={{maxWidth:13,margin:'0 5px'}} title='Phone' alt='Phone'></img></a> </p>*/}
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