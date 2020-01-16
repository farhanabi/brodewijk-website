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
        <div className={classes.LandingText}>
          <h2>Why shouldn't I buy a suit in the Department Store?</h2>
          <p className={classes.LandingPar}>First, when you buy a suit in the Department Store, it is <b>made for average people.</b> Not for you! Should you own your made-to-fit suit because that will seem glorious on your body.</p>
					<p className={classes.LandingPar}>Second, buy a suit in the Department Store will <b>waste your time.</b> Imagine if you can do it just from your home, what a great way to shop, right?.</p>
					<p className={classes.LandingPar}>Third, buy a suit in the Department Store will only give you <b>a few choices of the model.</b> </p>
        </div>
        <div style={{display:'flex',padding:40,margin:'75px 0 20px 0',width:'100%',color:'white',background:'black',alignContent:'center',justifyContent:'center'}}>
          <div className={classes.LandingText}>
            <h2>How to Measure</h2>
            <p className={classes.LandingPar} style={{width:'100%',padding:'0 auto'}}>
              Brodewijk only provides 3 ways to get the fit measurement:
              <ol>
                <li>Online Measurement: Through online measurement which the customer measure them self by looking at the guidance video and then upload the measurement result to the website.</li>
                <li>Template Size: Through our template size patterns that have been provided by Brodewijk.</li>
                <li>
                  Book Appointment:  Through our “Book Appointment”service which tailor from Brodewijk will come to the customer and directly measure the customer. This service is subject to the following conditions:
                  <ul>
                    <li>This service is currently only serving in Jabodetabek area (minimum order 3 pcs) and Bandung (without minimum order)</li>
                    <li>Customer can do reschedule of the booked appointment, but can’t cancel.</li>
                    <li>Reschedule can only be done maximum 7 days before the original schedule time.</li>
                  </ul>
                </li>
              </ol>
            </p>
          </div>
        </div>
        <div className={classes.LandingText}>
          <h2>Price and How to Order</h2>
          <p className={classes.LandingPar}>
            <ul>
              <li>Price displayed is a fixed price and can’t be changed unless there is a discount or promo price</li>
              <li>Customer is obliged to pay the full price of the product, customer can’t pay partially</li>
              <li>Payment can be done through the payment methods that is available on our payment gateway or can be done through bank transfer.</li>
            </ul>
          </p>
        </div>
        <div className={classes.LandingText}>
          <h2> Working Process and Shipment</h2>
          <p className={classes.LandingPar}>
            <ul>
              <li>The product ordered is guaranteed by the quality and finishing time</li>
              <li>The working process takes maximum of 15 working days, but can be faster. We are not responsible for any late delivery due to negligence or error of the courier expedition.</li>
              <li>If the customer wants to have the express work (2 days), additional fee will apply as much as Rp 50,000 per reduction in the number of days</li>
              <li>The working process time is excluded from the shipment time</li>
              <li>The shipment process will depend on the courier agent and shipping destination.</li>
            </ul>
          </p>
        </div>
        <div className={classes.LandingText}>
          <h2>Guarantee and Return</h2>
          <p className={classes.LandingPar}>
            <ul>
              <li>The ordered and paid product can’t be cancel or refunded with any reason</li>
              <li>If the ordered product is not appropriate, product defects, or any damages, please contact our Customer Service at SMS/WA +628156051373 or email at contact@brodewijk.com</li>
              <li>
                Customer can do product returns subject to the following conditions:
                <ul>
                  <li>Product received doesn’t match with the order made by the Customer through Brodewijk website</li>
                  <li>There are product defects in the product received by the Customer</li>
                </ul>
                Which both conditions:
                <ul>
                  <li>Covering fabrics type, colour, features, size</li>
                  <li>Product damages or defects are covering:</li>
                  <li>
                    Kerusakan termasuk namun tidak terbatas kepada:
                    <ul>
                      <li>Broken stitches/not neat</li>
                      <li>Broken buttons</li>
                      <li>Jammed zipper/removed/broken</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>We will change or fix the product with the same fabrics type, colours, features, and sizes with the previous order details.</li>
              <li>The product returns because of the product defects or product received doesn’t match with the order made by the Customer is only applied 1 year (12 month since the purchase date) and can only be done once per purchase per item</li>
              <li>The product return shipment fee from customer to Brodewijk is on customer but it’s on Brodewijk when Brodewijk send back the fixed product to the customer.</li>
              <li>Customer has to enclose the “Thanks Card” that can be found in the packaging which act as the guarantee card when sending back the product that wants to be fixed to Brodewijk.</li>
            </ul>
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default LandingPage;