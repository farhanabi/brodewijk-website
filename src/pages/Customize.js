import React, {useState} from 'react';
import classes from './Customize.css';
import HeaderCustomize from '../component/HeaderCustomize';
import Carousel from '../component/Carousel';
import Footer from '../component/Footer';
import FilterBar from '../component/Customize/FilterBar'

function Customize() {
  const [pilihan, setPilihan] = useState('kain')
  const [pilihanKain, setPilihanKain] = useState('Oberon')
  const [harga, setHarga] = useState(1500000)
  const [fiturJas, setFiturJas] = useState({
    canvas:'half-canvas',
    shoulder:'standard',
    lapels:'notch',
    chestPocket:'welted',
    buttons:'two',
    pockets:'pocketFlaps',
    vents:'one',
  })
  // window.alert('Ismar homo asu')
  return (
    <div className={classes.App}>
      <HeaderCustomize/>
      <div className={classes.CustomizeContainer}>
        <div className={classes.FilterBar}>
          <FilterBar pilihan={pilihan} pilihanKain={pilihanKain} setPilihan={setPilihan} setPilihanKain={setPilihanKain}/>
        </div>
        <div className={classes.LivePreview}>
          <img src={require(`../img/livePreview/${pilihanKain}/interior+espalda_abajo+length_long.png`)} className={classes.PreviewImage}/>
          <img src={require(`../img/livePreview/${pilihanKain}/interior+espalda_arriba.png`)} className={classes.PreviewImage}/>
          <img src={require(`../img/livePreview/${pilihanKain}/interior+espalda_arriba+label.png`)} className={classes.PreviewImage}/>
          <img src={require(`../img/livePreview/${pilihanKain}/neck_single_breasted+buttons_1+lapel_narrow+style_lapel_notch.png`)} className={classes.PreviewImage}/>
          <img src={require(`../img/livePreview/${pilihanKain}/bottom_single_breasted+length_long+hemline_closed.png`)} className={classes.PreviewImage}/>
          <img src={require(`../img/livePreview/${pilihanKain}/interior+sleeves.png`)} className={classes.PreviewImage}/>
          <h3 style={{fontFamily:"Helvetica Neue",fontSize:20,marginBottom:0,fontWeight:500,letterSpacing:'0.05em'}}>{pilihanKain}</h3>
          <h4 style={{marginTop:5, fontWeight:400}}>Rp. {harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h4>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Customize;
