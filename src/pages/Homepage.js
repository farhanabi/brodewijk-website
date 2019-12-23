import React, { useEffect, useState, useRef } from 'react';
import classes from './Homepage.css';
import Header from '../component/Header';
import Carousel from '../component/Carousel';
import Footer from '../component/Footer';

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
      <div className={classes.stickyHeader}><Header textColor='white'/></div>
      <Carousel/>
      <div className={classes.advantages} id='advantages'>
        <h1 style={{color:'rgba(70,70,70)',letterSpacing:'0.05em', margin:'0 0 15px 0'}}>Advantages</h1>
        <div className={classes.advantagesGrid}>
          <div style={{color:'rgba(100,100,100)'}} className={classes.advantage} >
            <img src={require('../img/advantage-1.png')} className={classes.advantageImage} alt=""/>
            <h3 className={classes.advantageTitle}>FREE NATION-WIDE SHIPPING</h3>
            <p className={classes.advantagePar}>Without minimum purchase</p>
          </div>
          <div style={{color:'rgba(100,100,100)'}} className={classes.advantage} >
            <img src={require('../img/advantage-2.png')} className={classes.advantageImage} alt=""/>
            <h3 className={classes.advantageTitle}>PREMIUM FABRICS</h3>
            <p className={classes.advantagePar}>We only offered the best fabrics to make it comfortable next to skin and keep you stylish</p>
          </div>
          <div style={{color:'rgba(100,100,100)'}} className={classes.advantage} >
            <img src={require('../img/advantage-3.png')} className={classes.advantageImage} alt=""/>
            <h3 className={classes.advantageTitle}>EASY CUSTOMIZATION</h3>
            <p className={classes.advantagePar}>You can do customization on your suit as you like</p>
          </div>
          <div style={{color:'rgba(100,100,100)'}} className={classes.advantage} >
            <img src={require('../img/advantage-4.png')} className={classes.advantageImage} alt=""/>
            <h3 className={classes.advantageTitle}>PERFECT FIT</h3>
            <p className={classes.advantagePar}>We do online and direct measurement to make it perfect to your body</p>
          </div>
          <div style={{color:'rgba(100,100,100)'}} className={classes.advantage} >
            <img src={require('../img/advantage-5.png')} className={classes.advantageImage} alt=""/>
            <h3 className={classes.advantageTitle}>1 YEAR GUARANTEE</h3>
            <p className={classes.advantagePar}>We accept product returns if there is damage</p>
          </div>
        </div>
      </div>
      { window.innerWidth >= 560
        ?(
          <div className={classes.secondGrid} id='secondGrid'>
            <img src={require('../img/let-us-come-to-you.png')} className={classes.secondGridImage} alt=""></img>
            <img src={require('../img/online-suit-maker.png')} className={classes.secondGridImage} alt=""></img>
          </div>
        ):(
          <div className={classes.secondGrid} id='secondGrid'>
            <img src={require('../img/let-us-come-to-you.png')} className={classes.secondGridImage} alt=""></img>
          </div>
        )}
      <div id='occasions'>
        <h1 style={{color:'rgba(70,70,70)',letterSpacing:'0.05em'}}>Occasions</h1>
        <div className={classes.ocassionsGrid}>
          <div className={classes.thirdGridImage}><a><img src={require('../img/wedding.png')} width="100%" alt=""></img></a></div>
          <div className={classes.thirdGridImage}><a><img src={require('../img/graduation.png')} width="100%" alt=""></img></a></div>
          <div className={classes.thirdGridImage}><a><img src={require('../img/party.png')} width="100%" alt=""></img></a></div>
          <div className={classes.thirdGridImage}><a><img src={require('../img/business.png')} width="100%" alt=""></img></a></div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Homepage;