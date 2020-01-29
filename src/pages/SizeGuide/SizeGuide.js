import React, {useState} from 'react';
// import { useEffect, useState, useRef } from 'react';
import classes from './SizeGuide.css';
import Header from '../../Components/Header/Header';
import Carousel from './components/SizeGuideCarousel';
import Footer from '../../Components/Footer/Footer';

function SizeGuide() {
  return (
    <div className={classes.App}>
      <div className={classes.stickyHeader}><Header textColor='white' stickyHeader/></div>
      <Carousel/>
      <div className={classes.SizeGuideTexts}>
        <p>We have two ways of measurement: <b>Standard Size</b> and <b>Customized Size</b></p>
        <div className={classes.SizeGuideText}>
          <h2>Standard Size</h2>
          <p className={classes.SizeGuidePar}>
            The Standard Size will give you the size based on body measurements, not on the attire. It’s best you measure yourself or get measured to make sure you buy the correct size.
          </p>
          <h3>Suit</h3>
          <p className={classes.SizeGuidePar}>
          In simple way the estimation size for Regular Fit size would be:
            <ul>
              <li><p>Height: 160-170 cm & Weight: 50-60 kg : <b>Size S</b></p></li>
              <li><p>Height: 170-175 cm & Weight: 60-68 kg : <b>Size M</b></p></li>
              <li><p>Height: 175-179 cm & Weight: 69-75 kg : <b>Size L</b></p></li>
              <li><p>Height >179 cm & Weight >75 kg: <b>Size XL</b></p></li>
            </ul>
          </p>
          <h3 style={{textAlign:'center',marginTop:50}}>Regular Fit </h3>
          <div className={classes.tableCont}>
            <table className={classes.table}>
              <tbody>
              <tr>
                <th><p style={{fontWeight:600}}>Size</p></th>
                <th><p style={{fontWeight:600}}>Panjang Badan</p></th>
                <th><p style={{fontWeight:600}}>Panjang Pundak</p></th>
                <th><p style={{fontWeight:600}}>Panjang Tangan</p></th>
                <th><p style={{fontWeight:600}}>Lingkar Dada</p></th>
                <th><p style={{fontWeight:600}}>Pinggang</p></th>
                <th><p style={{fontWeight:600}}>Pinggul</p></th>
              </tr>
              <tr>
                <td><p style={{fontWeight:400}}>S</p></td>
                <td><p style={{fontWeight:400}}>72</p></td>
                <td><p style={{fontWeight:400}}>44</p></td>
                <td><p style={{fontWeight:400}}>58</p></td>
                <td><p style={{fontWeight:400}}>94</p></td>
                <td><p style={{fontWeight:400}}>89</p></td>
                <td><p style={{fontWeight:400}}>98</p></td>
              </tr>
              <tr>
                <td><p style={{fontWeight:400}}>M</p></td>
                <td><p style={{fontWeight:400}}>72</p></td>
                <td><p style={{fontWeight:400}}>45</p></td>
                <td><p style={{fontWeight:400}}>58</p></td>
                <td><p style={{fontWeight:400}}>97</p></td>
                <td><p style={{fontWeight:400}}>92</p></td>
                <td><p style={{fontWeight:400}}>102</p></td>
              </tr>
              <tr>
                <td><p style={{fontWeight:400}}>L</p></td>
                <td><p style={{fontWeight:400}}>74</p></td>
                <td><p style={{fontWeight:400}}>46</p></td>
                <td><p style={{fontWeight:400}}>60</p></td>
                <td><p style={{fontWeight:400}}>100</p></td>
                <td><p style={{fontWeight:400}}>95</p></td>
                <td><p style={{fontWeight:400}}>106</p></td>
              </tr>
              <tr>
                <td><p style={{fontWeight:400}}>XL</p></td>
                <td><p style={{fontWeight:400}}>76</p></td>
                <td><p style={{fontWeight:400}}>48</p></td>
                <td><p style={{fontWeight:400}}>61</p></td>
                <td><p style={{fontWeight:400}}>104</p></td>
                <td><p style={{fontWeight:400}}>100</p></td>
                <td><p style={{fontWeight:400}}>110</p></td>
              </tr>
              <tr>
                <td><p style={{fontWeight:400}}>XXL</p></td>
                <td><p style={{fontWeight:400}}>78</p></td>
                <td><p style={{fontWeight:400}}>50</p></td>
                <td><p style={{fontWeight:400}}>63</p></td>
                <td><p style={{fontWeight:400}}>109</p></td>
                <td><p style={{fontWeight:400}}>104</p></td>
                <td><p style={{fontWeight:400}}>114</p></td>
              </tr>
              </tbody>
            </table>
          </div>
          <h3 style={{textAlign:'center',marginTop:50}}>Slim Fit</h3>
          <div className={classes.tableCont}>
            <table className={classes.table}>
              <tbody>
              <tr>
                <th><p style={{fontWeight:600}}>Size</p></th>
                <th><p style={{fontWeight:600}}>Panjang Badan</p></th>
                <th><p style={{fontWeight:600}}>Panjang Pundak</p></th>
                <th><p style={{fontWeight:600}}>Panjang Tangan</p></th>
                <th><p style={{fontWeight:600}}>Lingkar Dada</p></th>
                <th><p style={{fontWeight:600}}>Pinggang</p></th>
                <th><p style={{fontWeight:600}}>Pinggul</p></th>
              </tr>
              <tr>
                <td><p style={{fontWeight:400}}>S</p></td>
                <td><p style={{fontWeight:400}}>72</p></td>
                <td><p style={{fontWeight:400}}>44</p></td>
                <td><p style={{fontWeight:400}}>58</p></td>
                <td><p style={{fontWeight:400}}>90</p></td>
                <td><p style={{fontWeight:400}}>85</p></td>
                <td><p style={{fontWeight:400}}>94</p></td>
              </tr>
              <tr>
                <td><p style={{fontWeight:400}}>M</p></td>
                <td><p style={{fontWeight:400}}>72</p></td>
                <td><p style={{fontWeight:400}}>45</p></td>
                <td><p style={{fontWeight:400}}>58</p></td>
                <td><p style={{fontWeight:400}}>93</p></td>
                <td><p style={{fontWeight:400}}>88</p></td>
                <td><p style={{fontWeight:400}}>98</p></td>
              </tr>
              <tr>
                <td><p style={{fontWeight:400}}>L</p></td>
                <td><p style={{fontWeight:400}}>74</p></td>
                <td><p style={{fontWeight:400}}>46</p></td>
                <td><p style={{fontWeight:400}}>60</p></td>
                <td><p style={{fontWeight:400}}>96</p></td>
                <td><p style={{fontWeight:400}}>91</p></td>
                <td><p style={{fontWeight:400}}>102</p></td>
              </tr>
              <tr>
                <td><p style={{fontWeight:400}}>XL</p></td>
                <td><p style={{fontWeight:400}}>76</p></td>
                <td><p style={{fontWeight:400}}>48</p></td>
                <td><p style={{fontWeight:400}}>61</p></td>
                <td><p style={{fontWeight:400}}>100</p></td>
                <td><p style={{fontWeight:400}}>96</p></td>
                <td><p style={{fontWeight:400}}>106</p></td>
              </tr>
              <tr>
                <td><p style={{fontWeight:400}}>XXL</p></td>
                <td><p style={{fontWeight:400}}>78</p></td>
                <td><p style={{fontWeight:400}}>50</p></td>
                <td><p style={{fontWeight:400}}>63</p></td>
                <td><p style={{fontWeight:400}}>105</p></td>
                <td><p style={{fontWeight:400}}>100</p></td>
                <td><p style={{fontWeight:400}}>110</p></td>
              </tr>
              </tbody>
            </table>
          </div>
          <h3 style={{marginTop:50}}>Pants</h3>
          <h3 style={{textAlign:'center',marginTop:25}}>Regular Fit </h3>
          <div className={classes.tableCont}>
            <table className={classes.table}>
              <tbody>
                <tr>
                  <th><p style={{fontWeight:600}}>Size</p></th>
                  <th><p style={{fontWeight:600}}>Pinggang</p></th>
                  <th><p style={{fontWeight:600}}>Pinggul</p></th>
                </tr>
                <tr>
                  <td><p style={{fontWeight:400}}>29</p></td>
                  <td><p style={{fontWeight:400}}>73</p></td>
                  <td><p style={{fontWeight:400}}>92</p></td>
                </tr>
                <tr>
                  <td><p style={{fontWeight:400}}>30</p></td>
                  <td><p style={{fontWeight:400}}>77</p></td>
                  <td><p style={{fontWeight:400}}>96</p></td>
                </tr>
                <tr>
                  <td><p style={{fontWeight:400}}>31</p></td>
                  <td><p style={{fontWeight:400}}>81</p></td>
                  <td><p style={{fontWeight:400}}>100</p></td>
                </tr>
                <tr>
                  <td><p style={{fontWeight:400}}>32</p></td>
                  <td><p style={{fontWeight:400}}>85</p></td>
                  <td><p style={{fontWeight:400}}>104</p></td>
                </tr>
                <tr>
                  <td><p style={{fontWeight:400}}>34</p></td>
                  <td><p style={{fontWeight:400}}>89</p></td>
                  <td><p style={{fontWeight:400}}>108</p></td>
                </tr>
                <tr>
                  <td><p style={{fontWeight:400}}>36</p></td>
                  <td><p style={{fontWeight:400}}>93</p></td>
                  <td><p style={{fontWeight:400}}>112</p></td>
                </tr>
                <tr>
                  <td><p style={{fontWeight:400}}>38</p></td>
                  <td><p style={{fontWeight:400}}>97</p></td>
                  <td><p style={{fontWeight:400}}>116</p></td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 style={{textAlign:'center',marginTop:50}}>Slim Fit</h3>
          <div className={classes.tableCont}>
            <table className={classes.table}>
              <tbody>
                <tr>
                  <th><p style={{fontWeight:600}}>Size</p></th>
                  <th><p style={{fontWeight:600}}>Pinggang</p></th>
                  <th><p style={{fontWeight:600}}>Pinggul</p></th>
                </tr>
                <tr>
                  <td><p style={{fontWeight:400}}>29</p></td>
                  <td><p style={{fontWeight:400}}>72</p></td>
                  <td><p style={{fontWeight:400}}>91</p></td>
                </tr>
                <tr>
                  <td><p style={{fontWeight:400}}>30</p></td>
                  <td><p style={{fontWeight:400}}>76</p></td>
                  <td><p style={{fontWeight:400}}>95</p></td>
                </tr>
                <tr>
                  <td><p style={{fontWeight:400}}>31</p></td>
                  <td><p style={{fontWeight:400}}>80</p></td>
                  <td><p style={{fontWeight:400}}>99</p></td>
                </tr>
                <tr>
                  <td><p style={{fontWeight:400}}>32</p></td>
                  <td><p style={{fontWeight:400}}>84</p></td>
                  <td><p style={{fontWeight:400}}>103</p></td>
                </tr>
                <tr>
                  <td><p style={{fontWeight:400}}>34</p></td>
                  <td><p style={{fontWeight:400}}>88</p></td>
                  <td><p style={{fontWeight:400}}>107</p></td>
                </tr>
                <tr>
                  <td><p style={{fontWeight:400}}>36</p></td>
                  <td><p style={{fontWeight:400}}>92</p></td>
                  <td><p style={{fontWeight:400}}>111</p></td>
                </tr>
                <tr>
                  <td><p style={{fontWeight:400}}>38</p></td>
                  <td><p style={{fontWeight:400}}>96</p></td>
                  <td><p style={{fontWeight:400}}>115</p></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={classes.SizeGuideText}>
          <h2 style={{marginTop:'50px'}}>Customized Size</h2>
          <p className={classes.SizeGuidePar}>
            The Customized Size allows you to have the most accurate size you can have for your suit. You can start measuring your body by following our step by step guide videos when you’re customizing your suit. You can also get measured by our team by booking the appointment first and we’ll come to you. 
          </p>
          <p style={{marginTop:'20px'}} className={classes.SizeGuidePar}>Get the printable Tape Measure:</p>
        </div>
        <span style={{marginTop:20}} className={classes.changeLang}>DOWNLOAD PRINTABLE TAPE MEASURE</span>
      </div>
      <Footer/>
    </div>
  );
}

export default SizeGuide;