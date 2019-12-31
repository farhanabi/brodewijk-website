import React from 'react';
import classes from "./HeaderCustomize.css";
import { Link } from 'react-router-dom'
// import { BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom'

const headerCustomize = () => {
  // const styleSearchBar = {
  //   borderStyle: 'solid',
  //   borderWidth: 1,
  //   borderColor: textColor
  // }
  const textColor = 'rgba(90,90,90)'
	return (
		<header className={classes.appHeader}>
        <Link to="/"><img src={require('../../../img/Brodewijk-black.png')} className={classes.headerLogo} alt="Brodewijk Logo"/></Link>
          { window.innerWidth >= 560
            ?(<nav className={classes.nav}>
                <Link className={classes.navPoint} style={{color: textColor, fontSize: '15px', textAlign:'center', borderBottom: '2px solid rgba(155,155,155)'}} to="/customize/">CUSTOMIZE</Link>
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

export default headerCustomize;