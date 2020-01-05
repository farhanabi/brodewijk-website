import React from 'react';
// import { useEffect, useState, useRef } from 'react';
import classes from './BookAppointment.css';
import Header from '../../Components/Header/Header';
import Carousel from './components/BookCarousel';
import Footer from './components/Footer';

function BookAppointment() {
  return (
    <div className={classes.App}>
      <div className={classes.stickyHeader}><Header textColor='white' active='appointment' stickyHeader/></div>
      <Carousel/>
      <div className={classes.howItWorks} id='howItWorks'>
        <h1 style={{color:'rgba(70,70,70)',letterSpacing:'0.05em', margin:'0 0 15px 0'}}>How It Works</h1>
        <div className={classes.howItWorksGrid}>
          <div style={{color:'rgba(100,100,100)'}} className={classes.howItWork} >
            <img src={require('../../img/howItWork-1.png')} className={classes.howItWorkImage} alt=""/>
            <h3 className={classes.howItWorkTitle}>1. BOOK YOUR APPOINTMENT</h3>
            <p className={classes.howItWorkPar}>Book your appointment and our Tailor will come to you</p>
            <p className={classes.howItWorkPar}>*Only available in Bandung area for now</p>
          </div>
          <div style={{color:'rgba(100,100,100)'}} className={classes.howItWork} >
            <img src={require('../../img/howItWork-2.png')} className={classes.howItWorkImage} alt=""/>
            <h3 className={classes.howItWorkTitle}>2. SELECT YOUR STYLE</h3>
            <p className={classes.howItWorkPar}>Customize the suit style, button, lapels, pockets, anything best for you</p>
          </div>
          <div style={{color:'rgba(100,100,100)'}} className={classes.howItWork} >
            <img src={require('../../img/howItWork-3.png')} className={classes.howItWorkImage} alt=""/>
            <h3 className={classes.howItWorkTitle}>3. PICK YOUR FABRICS</h3>
            <p className={classes.howItWorkPar}>Our high quality fabrics make your suit more comfortable and stylish</p>
          </div>
          <div style={{color:'rgba(100,100,100)'}} className={classes.howItWork} >
            <img src={require('../../img/howItWork-4.png')} className={classes.howItWorkImage} alt=""/>
            <h3 className={classes.howItWorkTitle}>4. GET MEASURED</h3>
            <p className={classes.howItWorkPar}>Measured directly by our professional tailor, giving you the best fit suit you’ve ever made</p>
          </div>
          <div style={{color:'rgba(100,100,100)'}} className={classes.howItWork} >
            <img src={require('../../img/howItWork-5.png')} className={classes.howItWorkImage} alt=""/>
            <h3 className={classes.howItWorkTitle}>5. PAYMENT</h3>
            <p className={classes.howItWorkPar}>We accept payment by cash and bank transfer</p>
          </div>
          <div style={{color:'rgba(100,100,100)'}} className={classes.howItWork} >
            <img src={require('../../img/howItWork-6.png')} className={classes.howItWorkImage} alt=""/>
            <h3 className={classes.howItWorkTitle}>6. ORDER PLACED</h3>
            <p className={classes.howItWorkPar}>The suit making can take up to 15 workdays then we ship it to you right away! It can be even faster!</p>
          </div>
        </div>
      </div>
      <a href='https://calendly.com/brodewijk-bookappointment/pengukuran-jas?month=2019-12' target='_blank' rel='noopener noreferrer' style={{textDecoration:'none', color:'rgba(50,50,50,1)',margin:0,width:'100%'}}><span className={classes.bookNow}>BOOK APPOINTMENT NOW</span></a>
      <div className={classes.secondGrid} id='secondGrid'>
        <h2 className={classes.quotation1}>"</h2><h2 className={classes.quotes}>Effortless suit making, just a click away, do my own customization, everything is done perfectly</h2><h2 className={classes.quotation2}>"</h2>
      </div>
      <Footer/>
    </div>
  );
}

export default BookAppointment;