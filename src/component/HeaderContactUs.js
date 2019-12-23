import React from 'react';
import classes from "./HeaderContactUs.css";
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'

const headerCustomize = () => {
  // const styleSearchBar = {
  //   borderStyle: 'solid',
  //   borderWidth: 1,
  //   borderColor: textColor
  // }
  const textColor = 'rgba(90,90,90)'
	return (
		<header className={classes.appHeader}>
        <Link to="/">
          { // textColor=='black'
            /*?*/ <img src={require('./../img/Brodewijk-black.png')} className={classes.headerLogo} alt="Brodewijk Logo"/>
            //: <img src={require('./../img/Brodewijk-white.png')} className={classes.headerLogo} alt="Brodewijk Logo"/>
          }
        </Link>
        <nav className={classes.nav}>
          { window.innerWidth >= 560
            ?(<div className={classes.nav}>
                <Link className={classes.navPoint} style={{color: textColor, fontSize: '15px', textAlign:'center'}} to="/customize/">CUSTOMIZE</Link>
                <Link className={classes.navPoint} style={{color: textColor, fontSize: '15px', textAlign:'center'}} to="/appointment/">BOOK APPOINTMENT</Link>
                <Link className={classes.navPoint} style={{color: textColor, fontSize: '15px', textAlign:'center', borderBottom: '2px solid rgba(155,155,155)'}} to="/contact-us/">CONTACT US</Link>
              </div>
            ):(
              <div className={classes.nav}>
                <Link className={classes.navPoint} style={{color: textColor, fontSize: '15px', textAlign:'center'}} to="/appointment/">BOOK APPOINTMENT</Link>
                <Link className={classes.navPoint} style={{color: textColor, fontSize: '15px', textAlign:'center'}} to="/contact-us/">CONTACT US</Link>
              </div>
            )}
        </nav>
        <div className={classes.search}>
          <input placeholder='SEARCH' className={classes.searchBar} type="text"/>
        </div>
      </header>	
	)
}

export default headerCustomize;