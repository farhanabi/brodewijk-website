import React from 'react'
import classes from "./Header.css"
import { Link } from 'react-router-dom'

import ReactPixel from 'react-facebook-pixel';

import Authorization from '../../Shared/Authorization'

const options = {
  autoConfig: true, // set pixel's autoConfig
  debug: false, // enable logs
};

ReactPixel.init('2838665522877188', options);

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

  const authNav = () => {
    if (!Authorization.validateToken()) {
      return (
        <div className={classes.dropdownContent}>
          <Link style={navStyle} to="/login/">LOGIN</Link>
          <Link style={navStyle} to="/register/">REGISTER</Link>
        </div>
      )
    } else {
      return (
        <div className={classes.dropdownContent}>
          <Link style={navStyle} to="/logout/">LOGOUT</Link>
        </div>
      )
    }
  }

	return (
		<header className={(stickyHeader) ? classes.appHeaderSticky : classes.appHeader}>
      <Link to="/" onClick={() => (ReactPixel.track('ViewContent',{content_name:'Homepage'}), ReactPixel.pageView())}><img src={ (blackLogo) ? require('../../img/Brodewijk-black.png') : require('../../img/Brodewijk-white.png')} className={classes.headerLogo} alt="Brodewijk Logo"/></Link>
      { ((window.innerWidth >= 560) && (active!=='landing'))
      ?(
        <nav className={classes.nav}>
          <Link className={classes.navPoint} style={(active === 'customize') ? navStyleActive : navStyle} to="/customize/" onClick={() => ReactPixel.track('ViewContent',{content_name:'Customize'})}>CUSTOMIZE</Link>
          <Link className={classes.navPoint} style={(active === 'appointment') ? navStyleActive : navStyle} to="/appointment/" onClick={() => ReactPixel.track('ViewContent',{content_name:'BookAppointment'})}>BOOK APPOINTMENT</Link>
          <Link className={classes.navPoint} style={(active === 'contact-us') ? navStyleActive : navStyle} to="/contact-us/" onClick={() => ReactPixel.track('ViewContent',{content_name:'ContactUs'})}>CONTACT US</Link>
          <div className={classes.search}>
            <input placeholder='SEARCH' className={(blackLogo) ? classes.searchBarBlackPlaceholder : classes.searchBar} type="text" />
          </div>
          <div className={classes.dropdown}>
            <Link className={classes.dropdownButton} style={(active === 'accounts') ? navStyleActive : navStyle} to="/accounts/"><img src={ (blackLogo) ? require('../../img/user-icon-black.png') : require('../../img/user-icon-white.png')} style={{maxWidth:20,margin:0}} alt=''/></Link>
            {authNav()}
          </div>{/**/} 
        </nav>
      ):(active==='landing')
      ?(
        <nav className={classes.nav}>
          {/*<Link className={classes.navPoint} style={navStyle} to="/appointment/">BOOK APPOINTMENT</Link>
          <Link className={classes.navPoint} style={(active === 'contact-us') ? navStyleActive : navStyle} to="/contact-us/">CONTACT US</Link>
          <div className={classes.search}>
            <input placeholder='SEARCH' className={(blackLogo) ? classes.searchBarBlackPlaceholder : classes.searchBar} type="text" />
          </div><div className={classes.dropdown}>
            <Link className={classes.dropdownButton} style={(active === 'accounts') ? navStyleActive : navStyle} to="/accounts/"><img src={ (blackLogo) ? require('../../img/user-icon-black.png') : require('../../img/user-icon-white.png')} style={{maxWidth:20,margin:0}} alt=''/></Link>
            {authNav()}
          </div>*/}
        </nav>
      ):(
        <nav className={classes.nav}>
          <Link className={classes.navPoint} style={(active === 'appointment') ? navStyleActive : navStyle} to="/appointment/">BOOK APPOINTMENT</Link>
          {/*<Link className={classes.navPoint} style={(active === 'contact-us') ? navStyleActive : navStyle} to="/contact-us/">CONTACT US</Link>*/}
          <div className={classes.search}>
            <input placeholder='SEARCH' className={(blackLogo) ? classes.searchBarBlackPlaceholder : classes.searchBar} type="text" />
          </div>
          <div className={classes.dropdown}>
            <Link className={classes.dropdownButton} style={(active === 'accounts') ? navStyleActive : navStyle} to="/accounts/"><img src={ (blackLogo) ? require('../../img/user-icon-black.png') : require('../../img/user-icon-white.png')} style={{maxWidth:20,margin:0}} alt=''/></Link>
            {authNav()}
          </div>{/**/} 
        </nav>
      )}
       
    </header>	
	)
}

export default header