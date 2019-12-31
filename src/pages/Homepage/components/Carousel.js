import React from 'react'
import classes from "./Carousel.css";

const Carousel = () => {
	return (
    <div className={classes.carousel}>
      <img src={require('../../../img/carousel-1.jpg')} className={classes.carouselImage} alt=""/>
    	<div className={classes.carouselText}>
	    	<h3 style={{lineHeight:'1.5em',letterSpacing: '0.5em',fontWeight:400}}>WELCOME TO BRODEWIJK</h3>
	    	<h1 style={{fontFamily:'Prata',padding:'20px 0 0 0',letterSpacing: '0.2em',fontWeight:600}}>PREMIUM MADE TO MEASURE SUIT MAKER</h1>
      </div>
    </div>
	)
} 

export default Carousel