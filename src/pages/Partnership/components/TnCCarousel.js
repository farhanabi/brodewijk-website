import React from 'react'
import classes from "./TnCCarousel.css";

const Carousel = () => {
	return (
    <div className={classes.carousel}>
      <img src={require('../../../img/carousel-tnc-1.png')} className={classes.carouselImage} alt=""/>
    	<div className={classes.carouselText}>
	    	<h1 style={{padding:'20px 0 0 0',letterSpacing: '0.2em',fontWeight:600}}>TERMS AND CONDITIONS</h1>
      </div>
    </div>
	)
} 

export default Carousel