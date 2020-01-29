import React from 'react';
import classes from './LandingPage.css';
import Header from '../../Components/Header/Header';
import Carousel from './components/LandingCarousel';
import Footer from '../../Components/Footer/Footer';

const LandingPage = () => {
	// const [lang,setLang] = useState('EN')
  return (
    <div className={classes.App}>
      <div className={classes.stickyHeader}><Header textColor='white' active='landing' stickyHeader/></div>
      <Carousel/>
      <div className={classes.LandingTexts}>
        <div style={{width:'80%'}} className={classes.LandingText}>
          <h2>Why shouldn't I buy a suit in the Department Store?</h2>
          <p className={classes.LandingPar}>First, when you buy a suit in the Department Store, it is <b>made for average people.</b> Not for you! Should you own your made-to-fit suit because that will seem glorious on your body.</p>
					<p className={classes.LandingPar}>Second, buy a suit in the Department Store will <b>waste your time.</b> Imagine if you can do it just from your home, what a great way to shop, right?.</p>
					<p className={classes.LandingPar}>Third, buy a suit in the Department Store will only give you <b>a few choices of the model.</b> </p>
        </div>
        <div style={{display:'flex',padding:40,margin:'75px 0 20px 0',width:'100%',color:'white',background:'black',alignContent:'center',justifyContent:'center'}}>
          <div className={classes.LandingText}>
            <h2 style={{textAlign:'center',marginBottom:'40px'}}>Our Advantages</h2>
            <div className={classes.advantages} id='advantages'>
              <div style={{color:'rgba(100,100,100)'}} className={classes.advantage} >
                <img src={require('../../img/advantage-6-white.png')} className={classes.advantageImage} alt=""/>
                <h3 className={classes.advantageTitle}>FREE NATION-WIDE SHIPPING</h3>
                <p className={classes.advantagePar}>Without minimum purchase</p>
              </div>
              <div style={{color:'rgba(100,100,100)'}} className={classes.advantage} >
                <img src={require('../../img/advantage-5-white.png')} className={classes.advantageImage} alt=""/>
                <h3 className={classes.advantageTitle}>PREMIUM FABRICS</h3>
                <p className={classes.advantagePar}>We only offer the best fabrics to make it comfortable next to skin and keep you stylish</p>
              </div>
              <div style={{color:'rgba(100,100,100)'}} className={classes.advantage} >
                <img src={require('../../img/advantage-2-white.png')} className={classes.advantageImage} alt=""/>
                <h3 className={classes.advantageTitle}>PERFECT FIT</h3>
                <p className={classes.advantagePar}>We do online and direct measurement to make it perfect to your body</p>
              </div>
              <div style={{color:'rgba(100,100,100)'}} className={classes.advantage} >
                <img src={require('../../img/advantage-1-white.png')} className={classes.advantageImage} alt=""/>
                <h3 className={classes.advantageTitle}>1 YEAR GUARANTEE</h3>
                <p className={classes.advantagePar}>We accept product returns if there is damage</p>
              </div>
              <div style={{color:'rgba(100,100,100)'}} className={classes.advantage} >
                <img src={require('../../img/advantage-4-white.png')} className={classes.advantageImage} alt=""/>
                <h3 className={classes.advantageTitle}>EASY CUSTOMIZATION</h3>
                <p className={classes.advantagePar}>You can do customization on your suit as you like</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{width:'80%'}} className={classes.LandingText}>
          <h2 style={{textAlign:'center',marginBottom:'40px'}}>So, what are you waiting for?</h2>
          <p className={classes.LandingPar}  style={{textAlign:'center'}}>You just need to click the button below to consult with us via WhatsApp</p>
          {/*<a href='https://calendly.com/brodewijk-bookappointment/pengukuran-jas?month=2019-12' target='_blank' rel='noopener noreferrer' style={{textDecoration:'none'}}><div className={classes.bookNow}>BOOK APPOINTMENT NOW</div></a>
          <p className={classes.LandingPar}  style={{textAlign:'center'}}>or consult with us via WhatsApp</p>*/}
          <a href='https://api.whatsapp.com/send?phone=628156051373&text=Hi%20Brodewijk!%20I%20am%20interested%20to%20learn%20more%20about%20you' target='_blank' rel='noopener noreferrer' style={{textDecoration:'none'}}><div className={classes.bookNow}><img src={require('../../img/whatsapp-white.svg')} alt='' className={classes.whatsappWhite}></img><img src={require('../../img/whatsapp-black.svg')} alt='' className={classes.whatsappBlack}></img> CONSULT NOW</div></a>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default LandingPage;