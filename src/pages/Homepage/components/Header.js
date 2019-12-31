import React from 'react';
import classes from "./Header.css";
import { Link } from 'react-router-dom'
// import { BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom'

const header = ({textColor}) => {
  // const styleSearchBar = {
  //   borderStyle: 'solid',
  //   borderWidth: 1,
  //   borderColor: textColor
  // }
  // console.log(window.innerHeight,window.innerWidth)
	return (
		<header className={classes.appHeader}>
        <Link to="/"><img src={require('../../../img/Brodewijk-white.png')} className={classes.headerLogo} alt="Brodewijk Logo"/></Link>
        { window.innerWidth >= 560
          ?(<nav className={classes.nav}>
              <Link className={classes.navPoint} style={{color: textColor, fontSize: '15px', textAlign:'center'}} to="/customize/">CUSTOMIZE</Link>
              <Link className={classes.navPoint} style={{color: textColor, fontSize: '15px', textAlign:'center'}} to="/appointment/">BOOK APPOINTMENT</Link>
              <Link className={classes.navPoint} style={{color: textColor, fontSize: '15px', textAlign:'center'}} to="/contact-us/">CONTACT US</Link>
            </nav>
          ):(
            <nav className={classes.nav}>
              <Link className={classes.navPoint} style={{color: textColor, fontSize: '15px', textAlign:'center'}} to="/appointment/">BOOK APPOINTMENT</Link>
              <Link className={classes.navPoint} style={{color: textColor, fontSize: '15px', textAlign:'center'}} to="/contact-us/">CONTACT US</Link>
            </nav>
          )}
        <div className={classes.search}>
          <input placeholder='SEARCH' className={classes.searchBar} type="text"/>
        </div>
      </header>	
	)
}

export default header;