import React from 'react'
import classes from './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
	console.log(window.innerWidth)
	return(
		<div className={classes.footer}>
			<div className={classes.leftContent}>
				<img src={require('../../img/Brodewijk-white.png')} className={classes.footerLogo} alt="Brodewijk Logo"/>
				<p style={{marginTop: 10, fontWeight:300, letterSpacing:'0.025em'}}>Copyright © 2020 Brodewijk Inc. All rights reserved.</p>
			</div>
			<div className={classes.rightContent}>
				<div className={classes.innerRightContent}>
					<Link className={classes.clickableLink} to="/partnership/">Partnership</Link>
					<Link className={classes.clickableLink} to="/terms-and-conditions/">Terms and Conditions</Link>
					<Link className={classes.clickableLink} to="/how-to-order/">How to Order</Link>
				</div>
				<div className={classes.innerRightContent}>
					<Link className={classes.clickableLink} to="/product-information/">Product Information</Link>
					<Link className={classes.clickableLink} to="/size-guide/">Size Guide</Link>
					<Link className={classes.clickableLink} to="/contact-us/">Contact Us</Link>
				</div>
			</div>
		</div>
	)
}

export default Footer