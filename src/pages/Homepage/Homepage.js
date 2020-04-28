import React from 'react';
// import { useEffect, useState, useRef } from 'react';
import classes from './Homepage.css';
import Header from '../../Components/Header/Header';
import Carousel from './components/Carousel';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom'

function Homepage() {
  // const [isSticky, setSticky] = useState(false);
  // const ref = useRef(null);
  // const handleScroll = () => {
  //   setSticky(ref.current.getBoundingClientRect().top <= 0);
  //   console.log(isSticky)
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', () => handleScroll);
  //   };
  // }, []);

  return (
    <div className={classes.App}>
      <div className={classes.stickyHeader}><Header textColor='white' active='home' stickyHeader/></div>
      <Carousel/>
      <div className={classes.advantages} id='advantages'>
        <h1 style={{color:'rgba(20,20,20,1)',letterSpacing:'0.05em', margin:'0 0 15px 0'}}>Advantages</h1>
        <div className={classes.advantagesGrid}>
          <div style={{color:'rgba(100,100,100)'}} className={classes.advantage} >
            <img src={require('../../img/advantage-1.png')} className={classes.advantageImage} alt=""/>
            <h3 className={classes.advantageTitle}>FREE NATION-WIDE SHIPPING</h3>
            <p className={classes.advantagePar}>Without minimum purchase</p>
          </div>
          <div style={{color:'rgba(100,100,100)'}} className={classes.advantage} >
            <img src={require('../../img/advantage-2.png')} className={classes.advantageImage} alt=""/>
            <h3 className={classes.advantageTitle}>PREMIUM FABRICS</h3>
            <p className={classes.advantagePar}>We only offer the best fabrics to make it comfortable next to skin and keep you stylish</p>
          </div>
          <div style={{color:'rgba(100,100,100)'}} className={classes.advantage} >
            <img src={require('../../img/advantage-3.png')} className={classes.advantageImage} alt=""/>
            <h3 className={classes.advantageTitle}>EASY CUSTOMIZATION</h3>
            <p className={classes.advantagePar}>You can do customization on your suit as you like</p>
          </div>
          <div style={{color:'rgba(100,100,100)'}} className={classes.advantage} >
            <img src={require('../../img/advantage-4.png')} className={classes.advantageImage} alt=""/>
            <h3 className={classes.advantageTitle}>PERFECT FIT</h3>
            <p className={classes.advantagePar}>We do online and direct measurement to make it perfect to your body</p>
          </div>
          <div style={{color:'rgba(100,100,100)'}} className={classes.advantage} >
            <img src={require('../../img/advantage-5.png')} className={classes.advantageImage} alt=""/>
            <h3 className={classes.advantageTitle}>1 YEAR GUARANTEE</h3>
            <p className={classes.advantagePar}>We accept product returns if there is damage</p>
          </div>
        </div>
      </div>
      <div className={classes.secondGrid} id='secondGrid'>
        <img src={require('../../img/online-suit-maker.png')} className={classes.secondGridImage} alt=""></img>
        <div className={classes.innerSecondGrid}>
          <div className={classes.innerSecondGridText}>
            <h2 className={classes.innerSecondGridTitle}>Online Suit Maker</h2>
            <p className={classes.innerSecondGridPar}>Make your own made suit just one click away!</p>
            <Link to="/customize/" className={classes.innerSecondGridButton}>CUSTOMIZE NOW</Link>
          </div>
        </div>
      </div>
      <div className={classes.secondGrid} id='secondGrid'>
        <div className={classes.innerSecondGrid}>
          <div className={classes.innerSecondGridText}>
            <h2 className={classes.innerSecondGridTitle}>Let Us Come to You</h2>
            <p className={classes.innerSecondGridPar}>Make your own made-to-measure suit, for any events. Tailor made for you directly measured by our talented tailor. Book Appointment now!</p>
            <Link to="/appointment/" className={classes.innerSecondGridButton}>BOOK APPOINTMENT NOW</Link>
          </div>
        </div>
        <img src={require('../../img/let-us-come-to-you.png')} className={classes.secondGridImage} alt=""></img>
      </div>
      <div className={classes.secondGrid} id='secondGrid'>
        <img src={require('../../img/partnership.png')} className={classes.secondGridImage} alt=""></img>
        <div className={classes.innerSecondGrid}>
          <div className={classes.innerSecondGridText}>
            <h2 className={classes.innerSecondGridTitle}>Partnership</h2>
            <p className={classes.innerSecondGridPar}>Want to make suits for corporate, TV shows, wedding, or anything in bulk? We have got you covered! </p>
            <Link to="/partnership/" className={classes.innerSecondGridButton}>LEARN MORE</Link>
          </div>
        </div>
      </div>
      <div id='occasions'>
        <h1 style={{color:'rgba(20,20,20,1)',letterSpacing:'0.05em'}}>Occasions</h1>
        <div className={classes.ocassionsGrid}>
          <div className={classes.thirdGridImage}><img src={require('../../img/wedding.png')} width="100%" alt=""></img></div>
          <div className={classes.thirdGridImage}><img src={require('../../img/graduation.png')} width="100%" alt=""></img></div>
          <div className={classes.thirdGridImage}><img src={require('../../img/party.png')} width="100%" alt=""></img></div>
          <div className={classes.thirdGridImage}><img src={require('../../img/business.png')} width="100%" alt=""></img></div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Homepage;