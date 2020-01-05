import React from 'react';
import classes from "./Header.css";
import { Link } from 'react-router-dom'
// import { BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom'

const header = ({textColor, active, blackLogo, stickyHeader}) => {
  // const styleSearchBar = {
  //   borderStyle: 'solid',
  //   borderWidth: 1,
  //   borderColor: textColor
  // }
  // console.log(window.innerHeight,window.innerWidth)


  const navStyle = {
    color: textColor,
    fontSize: '15px',
    textAlign:'center'
  }

  const navStyleActive = {
    color: textColor,
    fontSize: '15px',
    textAlign:'center',
    borderBottom: '2px solid rgba(155,155,155)'
  }
  

	return (
		<header className={(stickyHeader) ? classes.appHeaderSticky : classes.appHeader}>
        <Link to="/"><img src={ (blackLogo) ? require('../../img/Brodewijk-black.png') : require('../../img/Brodewijk-white.png')} className={classes.headerLogo} alt="Brodewijk Logo"/></Link>
        { window.innerWidth >= 560
          ?(<nav className={classes.nav}>
              <Link className={classes.navPoint} style={(active === 'customize') ? navStyleActive : navStyle} to="/customize/">CUSTOMIZE</Link>
              <Link className={classes.navPoint} style={(active === 'appointment') ? navStyleActive : navStyle} to="/appointment/">BOOK APPOINTMENT</Link>
              <Link className={classes.navPoint} style={(active === 'contact-us') ? navStyleActive : navStyle} to="/contact-us/">CONTACT US</Link>
              <Link className={classes.navPoint} style={(active === 'accounts') ? navStyleActive : navStyle} to="/accounts/">ACCOUNTS</Link>
            </nav>
          ):(
            <nav className={classes.nav}>
              <Link className={classes.navPoint} style={(active === 'appointment') ? navStyleActive : navStyle} to="/appointment/">BOOK APPOINTMENT</Link>
              <Link className={classes.navPoint} style={(active === 'contact-us') ? navStyleActive : navStyle} to="/contact-us/">CONTACT US</Link>
              <Link className={classes.navPoint} style={(active === 'login') ? navStyleActive : navStyle} to="/login/">ACCOUNTS</Link>
            </nav>
          )}
        <div className={classes.search}>
          <input placeholder='SEARCH' className={classes.searchBar} type="text"/>
        </div>

        
      </header>	
	)
}

export default header;