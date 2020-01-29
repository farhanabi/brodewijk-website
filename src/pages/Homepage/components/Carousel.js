import React, {useState,useEffect} from 'react'
import classes from "./Carousel.css";

const Carousel = () => {
	const [show,setShow] = useState(0);
	const [seconds, setSeconds] = useState(0);
	
	useEffect(() => {
    let interval = null;
    if (seconds < 5) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 0.1);
      }, 100);
    } else {
      setSeconds(0);
      (show === 0)?setShow(1):setShow(0);
    }
    return () => clearInterval(interval);
  }, [seconds,show]);

	// console.log(seconds);

	if (show === 0)
	{ return (
	    <div className={classes.carousel}>
	      <img src={require('../../../img/carousel-1.jpg')} className={classes.carouselImage} alt=""/>
	    	<div className={classes.carouselText}>
		    	<h3 style={{lineHeight:'1.5em',letterSpacing: '0.5em',fontWeight:400}}>WELCOME TO BRODEWIJK</h3>
		    	<h1 style={{fontFamily:'Prata',padding:'20px 0 0 0',letterSpacing: '0.2em',fontWeight:600}}>PREMIUM MADE TO MEASURE SUIT MAKER</h1>
	      	<span className={classes.circleShow}></span>
	      	<span onClick={()=>{setSeconds(0);setShow(1)}} className={classes.circle}></span>
	      </div>
	    </div>
	)} else {
		return (
			<div className={classes.carousel}>
	      <img src={require('../../../img/carousel-2.png')} className={classes.carouselImage} alt=""/>
	    	<div className={classes.carouselText}>
		    	<h3 style={{lineHeight:'1.5em',letterSpacing: '0.5em',fontWeight:400}}>GO GET IT WHILE IT LAST</h3>
		    	<h1 style={{fontFamily:'Prata',padding:'20px 0 0 0',letterSpacing: '0.2em',fontWeight:600}}>ENJOY OUR 30% DISCOUNT</h1>
	      	<span onClick={()=>{setSeconds(0);setShow(0)}} className={classes.circle}></span>
	      	<span className={classes.circleShow}></span>
	      </div>
	    </div>
	)}} 

export default Carousel