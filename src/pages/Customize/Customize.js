import React, {useState} from 'react';
import classes from './Customize.css';
import Header from '../../Components/Header/Header';
// import Carousel from './component/Carousel';
import Footer from './components/Footer';
import FilterBar from './components/FilterBar'
import LivePreview from './components/LivePreview'

const Customize = () => {
  const [pilihan, setPilihan] = useState('kain')
  const [pilihanKain, setPilihanKain] = useState('Siberia')
  const [harga, setHarga] = useState(2000000)
  const [fiturJas, setFiturJas] = useState({
    canvas:'unconstructed',
    shoulder:'standard',
    lapelWidth:'narrow',
    lapelStyle:'notch',
    chestPocket:'classic',
    buttonsSegment:'single_breasted',
    buttons:'1',
    pockets:'double_welt',
    fit:'slim',
    vents:'one'
  })

  /*<div className={classes.LivePreview}>
    <img src={require(`../../img/livePreview/${pilihanKain}/interior+espalda_abajo+length_long.png`)} className={classes.PreviewImage} alt=''/>
    <img src={require(`../../img/livePreview/${pilihanKain}/interior+espalda_arriba.png`)} className={classes.PreviewImage} alt=''/>
    <img src={require(`../../img/livePreview/${pilihanKain}/interior+espalda_arriba+label.png`)} className={classes.PreviewImage} alt=''/>
    <img src={require(`../../img/livePreview/${pilihanKain}/neck_${fiturJas.buttonsSegment}+buttons_${fiturJas.buttons}+lapel_${fiturJas.lapelWidth}+style_lapel_${fiturJas.lapelStyle}.png`)} className={classes.PreviewImage} alt=''/>
    <img src={require(`../../img/livePreview/${pilihanKain}/bottom_single_breasted+length_long+hemline_closed.png`)} className={classes.PreviewImage} alt=''/>
    <img src={require(`../../img/livePreview/${pilihanKain}/interior+sleeves.png`)} className={classes.PreviewImage} alt=''/>
    <img src={require(`../../img/livePreview/${pilihanKain}/breast_pocket_${fiturJas.chestPocket}.png`)} className={classes.PreviewImage} alt=''/>
    <h3 style={{fontFamily:"Helvetica Neue",fontSize:20,marginBottom:0,fontWeight:500,letterSpacing:'0.05em'}}>{pilihanKain}</h3>
    <h4 style={{marginTop:5, fontWeight:400}}>Rp. {harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h4>
  </div>*/  

  return (
    <div className={classes.App}>
      <Header active='customize' textColor='rgba(90,90,90)' blackLogo/>
      <div className={classes.CustomizeContainer}>
        <div className={classes.FilterBar}>
          <FilterBar pilihan={pilihan} pilihanKain={pilihanKain} harga={harga} fiturJas={fiturJas} setPilihan={setPilihan} setPilihanKain={setPilihanKain} setHarga={setHarga} setFiturJas={setFiturJas}/>
        </div>
        <LivePreview pilihanKain={pilihanKain} harga={harga} fiturJas={fiturJas} />
      </div>
      <Footer/>
    </div>
  );
}

export default Customize;
