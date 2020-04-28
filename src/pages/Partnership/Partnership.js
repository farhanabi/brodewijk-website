import React, {useState} from 'react';
// import { useEffect, useState, useRef } from 'react';
import classes from './Partnership.css';
import Header from '../../Components/Header/Header';
import Carousel from './components/PartnershipCarousel';
import Footer from '../../Components/Footer/Footer';

function Partnership() {
  const [lang,setLang] = useState('EN')
  return (
    <div className={classes.App}>
      <div className={classes.stickyHeader}><Header textColor='white' stickyHeader/></div>
      <Carousel/>
      <div className={classes.secondGrid} id='secondGrid'>
        <h2 className={classes.quotation1}>"</h2>
        <h2 className={classes.quotes}><p>Every suit has a moment and we’ve just made everything simple for you.</p><p>Find the perfect suit to create the story behind it and share your happiness.</p></h2>
        <h2 className={classes.quotation2}>"</h2>
      </div>
      <hr/>

      <div className={classes.occassions}>
        <div style={{color:'rgba(100,100,100)'}} className={classes.occassion} >
          <img src={require('../../img/Partnership/Wedding.jpg')} className={classes.occassionImage} alt=""/>
          <h3 className={classes.occassionTitle}>WEDDING</h3>
        </div>
        <div style={{color:'rgba(100,100,100)'}} className={classes.occassion} >
          <img src={require('../../img/Partnership/Corporate Suit.jpg')} className={classes.occassionImage} alt=""/>
          <h3 className={classes.occassionTitle}>CORPORATE SUIT</h3>
        </div>
        <div style={{color:'rgba(100,100,100)'}} className={classes.occassion} >
          <img src={require('../../img/Partnership/TV Shows.png')} className={classes.occassionImage} alt=""/>
          <h3 className={classes.occassionTitle}>TV SHOWS</h3>
        </div>
        <div style={{color:'rgba(100,100,100)'}} className={classes.occassion} >
          <img src={require('../../img/Partnership/Organizations Suit.jpg')} className={classes.occassionImage} alt=""/>
          <h3 className={classes.occassionTitle}>ORGANIZATION SUIT</h3>
        </div>
      </div>

      <div className={classes.partnerTexts}>
        <span style={{marginTop:10}} className={classes.changeLang}> Download Inspiration Catalogue</span>
      </div>

      <div className={classes.partnerTexts}>
        <p className={classes.partnerPar}>Please contact us for further information</p>
        <p className={classes.partnerPar}><a href='mailto:contact@brodewijk.com' target='_blank' rel='noopener noreferrer'><b>Email</b>: contact@brodewijk.com</a></p>
        <p className={classes.partnerPar}><a href='https://api.whatsapp.com/send?phone=628156051373&text=Hi%20Brodewijk!%20I%20am%20interested%20to%20learn%20more%20about%20you' target='_blank' rel='noopener noreferrer'><b>WhatsApp</b>: +62 8156051373</a></p>
      </div>
      <Footer/>
    </div>
  );
}

export default Partnership;