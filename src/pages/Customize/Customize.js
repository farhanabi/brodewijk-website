import React, {useState, useEffect} from 'react';
import classes from './Customize.css';
import Header from '../../Components/Header/Header';
// import Carousel from './component/Carousel';
import Footer from '../../Components/Footer/Footer';
import FilterBar from './components/FilterBar'
import LivePreview from './components/LivePreview'
import FilterBarMobile from './components/Mobile/FilterBarMobile'
import LivePreviewMobile from './components/Mobile/LivePreviewMobile'
import { Link } from 'react-router-dom'

const Customize = () => {
  const [modal,setModal] = useState('Shown')
  const [pilihan, setPilihan] = useState('kain')
  const [pilihanKain, setPilihanKain] = useState({jenis:'Jet Black/Black',warna:'Black'})
  const [pilihanLining, setPilihanLining] = useState({jenis:'Standard',warna:'White'})
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
    vents:'one',
    pants:'with',
    shirt:'none',
    vest:'none',
    tie:'none',
    monogram:'',
    additionalRequest: ''
  })

  const [harga, setHarga] = useState(0)
  const [kainPrice, setKainPrice] = useState(975000)
  
  const [fiturPrice, setFiturPrice] = useState(375000)
    const [liningPrice,setLiningPrice] = useState(0)
    const [canvasPrice,setCanvasPrice] = useState(0)
    const [pantsPrice,setPantsPrice] = useState(375000)
    const [shirtPrice,setShirtPrice] = useState(0)
    const [vestPrice,setVestPrice] = useState(0)
    const [tiePrice,setTiePrice] = useState(0)
    const [monogPrice,setMonogPrice] = useState(0)

  const [measurePrice, setMeasurePrice] = useState(0)

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
  useEffect (()=>{
    (pilihanLining.jenis === 'Standard') ? setLiningPrice(0) : setLiningPrice(200000);
    (fiturJas.canvas === 'unconstructed') ? setCanvasPrice(0) : setCanvasPrice(250000);
    (fiturJas.pants === 'with') ? ((kainPrice === 975000) ? setPantsPrice(375000) : ((kainPrice === 1520000) ? setPantsPrice(425000) : setPantsPrice(775000))) : setPantsPrice(0);
    (fiturJas.shirt === 'none') ? setShirtPrice(0) : setShirtPrice(350000);
    (fiturJas.vest === 'with') ? ((kainPrice === 975000) ? setVestPrice(439000) : ((kainPrice === 1520000) ? setVestPrice(471000) : setVestPrice(695000))) : setVestPrice(0);
    (fiturJas.tie === 'none') ? setTiePrice(0) : setTiePrice(25000);
    (fiturJas.monogram === '') ? setMonogPrice(0) : setMonogPrice(100000);
    setFiturPrice(liningPrice+canvasPrice+pantsPrice+shirtPrice+vestPrice+monogPrice+tiePrice);
    setHarga(kainPrice+fiturPrice+measurePrice);
  })  
  
  return (
    <div className={classes.App}>
      
      { (modal==='Shown') ? (
        <div className={classes.modal}>
          <div className={classes.modalContent}>
            <span onClick={()=>setModal('Hidden')} className={classes.modalClose}>&times;</span>
            <p style={{letterSpacing:'0.05em'}}>This page is still under construction. If you are willing to order, please use Book Appointment page.</p>
            <div className={classes.LinkBoxCont}>
              <button className={classes.LinkBox} onClick={()=>setModal('Hidden')}>Continue to Customize Page</button>
              <Link to="/appointment/">
                <button className={classes.LinkBoxBlack}>Proceed to Book Appointment Page Instead</button>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
      
      {(window.innerWidth >= 950) ? (
        <React.Fragment>
          <div className={classes.stickyHeader}><Header textColor='black' active='customize' blackLogo/></div>
          <div className={classes.CustomizeContainer}>
            <div className={classes.FilterBar}>
              <FilterBar pilihan={pilihan} pilihanKain={pilihanKain} pilihanLining={pilihanLining} harga={harga} kainPrice={kainPrice} fiturPrice={fiturPrice} measurePrice={measurePrice} fiturJas={fiturJas} setPilihan={setPilihan} setPilihanKain={setPilihanKain} setPilihanLining={setPilihanLining} setHarga={setHarga} setKainPrice={setKainPrice} setFiturPrice={setFiturPrice} setMeasurePrice={setMeasurePrice} setFiturJas={setFiturJas}/>
            </div>
            <LivePreview pilihanKain={pilihanKain} harga={harga} fiturJas={fiturJas} />
          </div>
          <Footer/>
        </React.Fragment>
      ) : (
        <div className={classes.CustomizeWrapperMobile}>
          <LivePreviewMobile pilihanKain={pilihanKain} harga={harga} fiturJas={fiturJas} />
          <div className={classes.FilterBarMobile}>
            <FilterBarMobile pilihan={pilihan} pilihanKain={pilihanKain} pilihanLining={pilihanLining} harga={harga} kainPrice={kainPrice} fiturPrice={fiturPrice} measurePrice={measurePrice} fiturJas={fiturJas} setPilihan={setPilihan} setPilihanKain={setPilihanKain} setPilihanLining={setPilihanLining} setHarga={setHarga} setKainPrice={setKainPrice} setFiturPrice={setFiturPrice} setMeasurePrice={setMeasurePrice} setFiturJas={setFiturJas}/>
          </div>
        </div>
      )}
      
    </div>
  );
}

export default Customize;
