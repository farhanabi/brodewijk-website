import React, {useEffect} from 'react'
import classes from "./LandingCarousel.css";

import ReactPixel from 'react-facebook-pixel';

const options = {
  autoConfig: true, // set pixel's autoConfig
  debug: false, // enable logs
};

ReactPixel.init('1844940835638001', options);

const Carousel = () => {
  const monthNames = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

  var tomorrow = new Date();
  tomorrow.setDate(new Date().getDate()+1);

	return (
    <div className={classes.carousel}>
      <img src={require('../../../img/carousel-1.jpg')} className={classes.carouselImage} alt=""/>
    	<div className={classes.carouselText}>
	    	<h1 style={{padding:'20px 0 0 0',letterSpacing: '0.2em',fontWeight:600}}>IT'S HOW YOU MAKE A SUIT</h1>
        <h3 style={{marginBottom:0,lineHeight:'0.5em'}}>START FROM</h3><h2 style={{marginTop:10}}>Rp1.350.000</h2>
	    	<hr/>
        <a href='https://api.whatsapp.com/send?phone=628156051373&text=Hi%20Brodewijk!%20I%20am%20interested%20to%20learn%20more%20about%20you' target='_blank' rel='noopener noreferrer' style={{textDecoration:'none'}} onClick={() => ReactPixel.track('Contact')}><div className={classes.bookNow}><img src={require('../../../img/whatsapp-white.svg')} alt='' className={classes.whatsappWhite}></img><img src={require('../../../img/whatsapp-black.svg')} alt='' className={classes.whatsappBlack}></img> CONSULT NOW</div></a>
        <h3>GET Rp200.000 WORTH OF DISCOUNT</h3>
        <h3>FOR PURCHASES UNTIL {monthNames[tomorrow.getMonth()]} {tomorrow.getDate()}<sup style={{fontSize:10}}>{(tomorrow.getDate()==1||tomorrow.getDate()==21||tomorrow.getDate()==31)?`ST`:(tomorrow.getDate()==2||tomorrow.getDate()==22)?`ND`:`TH`}</sup> {tomorrow.getFullYear()}</h3>
      </div>
    </div>
	)
} 

export default Carousel