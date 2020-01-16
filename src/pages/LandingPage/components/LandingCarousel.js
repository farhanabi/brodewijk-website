import React from 'react'
import classes from "./LandingCarousel.css";

const Carousel = () => {
	return (
    <div className={classes.carousel}>
      <img src={require('../../../img/carousel-1.jpg')} className={classes.carouselImage} alt=""/>
    	<div className={classes.carouselText}>
	    	<h1 style={{padding:'20px 0 0 0',letterSpacing: '0.2em',fontWeight:600}}>LET US COME TO YOU & GET YOU A PREMIUM SUIT</h1>
      	<a href='https://calendly.com/brodewijk-bookappointment/pengukuran-jas?month=2019-12' target='_blank' rel='noopener noreferrer' style={{textDecoration:'none'}}><div className={classes.bookNow}>BOOK APPOINTMENT NOW</div></a>
      </div>
    </div>
	)
} 

export default Carousel