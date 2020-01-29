import React from 'react'
import classes from "./LandingCarousel.css";

const Carousel = () => {
	return (
    <div className={classes.carousel}>
      <img src={require('../../../img/carousel-1.jpg')} className={classes.carouselImage} alt=""/>
    	<div className={classes.carouselText}>
	    	<h1 style={{padding:'20px 0 0 0',letterSpacing: '0.2em',fontWeight:600}}>CONFUSED ABOUT WHAT TYPE OF SUIT YOU NEED?</h1>
	    	<hr/>
        <a href='https://api.whatsapp.com/send?phone=628156051373&text=Hi%20Brodewijk!%20I%20am%20interested%20to%20learn%20more%20about%20you' target='_blank' rel='noopener noreferrer' style={{textDecoration:'none'}}><div className={classes.bookNow}><img src={require('../../../img/whatsapp-white.svg')} alt='' className={classes.whatsappWhite}></img><img src={require('../../../img/whatsapp-black.svg')} alt='' className={classes.whatsappBlack}></img> CONSULT NOW</div></a>
        <h3>GET Rp300.000 WORTH OF DISCOUNT</h3>
        <h3>FOR PURCHASES BEFORE JANUARY 31<sup style={{fontSize:10}}>ST</sup> 2020</h3>
      </div>
    </div>
	)
} 

export default Carousel