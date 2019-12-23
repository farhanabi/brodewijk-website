import React from 'react'
import classes from './Footer.css'

const Footer = ({image}) => {
	return(
		<div className={classes.footer}>
			<img src={require('../img/Brodewijk-white.png')} className={classes.footerLogo} alt="Brodewijk Logo"/>
			<p style={{letterSpacing: '0.075em'}}>Copyright © 2019 Brodewijk Inc. All rights reserved.</p>
		</div>
	)
}

export default Footer