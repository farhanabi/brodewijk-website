import React, {useState} from 'react';
import classes from './Customize.css';
import Header from '../../Components/Header/Header';
// import Carousel from './component/Carousel';
import Footer from '../../Components/Footer/Footer';
import FilterBar from './components/FilterBar'
import LivePreview from './components/LivePreview'
import { Link } from 'react-router-dom'

const Customize = () => {
  const [modal,setModal] = useState('Shown')
  const [pilihan, setPilihan] = useState('kain')
  const [pilihanKain, setPilihanKain] = useState({jenis:'Siberia',warna:'Putih'})
  const [pilihanLining, setPilihanLining] = useState({jenis:'Standard',warna:'Putih'})
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
    vents:'one',
    vest:'none'
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
      <div className={classes.stickyHeader}><Header textColor='black' active='customize' blackLogo/></div>
      { (modal==='Shown')
      ? <div className={classes.modal}>
          { (window.innerWidth >= 950)
          ? <div className={classes.modalContent}>
              <span onClick={()=>setModal('Hidden')} className={classes.modalClose}>&times;</span>
              <p style={{letterSpacing:'0.05em'}}>This page is still under construction. If you are willing to order, please use Book Appointment page.</p>
              <div className={classes.LinkBoxCont}>
                <span className={classes.LinkBox} onClick={()=>setModal('Hidden')}>Continue to Customize Page</span>
                <Link className={classes.LinkBoxBlack} to="/appointment/">Proceed to Book Appointment Page Instead</Link>
              </div>
            </div>
          : <div className={classes.modalContent}>
              <p style={{display:'flex',letterSpacing:'0.05em'}}>Sorry, this page is not yet available for the mobile view. Please try to view this page on your wide-screen device.</p>
              <div className={classes.LinkBoxCont}>
                <Link className={classes.LinkBoxBlack} to="/">Go Back to Homepage</Link>
              </div>
            </div>
          }
        </div>
      : null}
      <div className={classes.CustomizeContainer}>
        <div className={classes.FilterBar}>
          <FilterBar pilihan={pilihan} pilihanKain={pilihanKain} pilihanLining={pilihanLining} harga={harga} fiturJas={fiturJas} setPilihan={setPilihan} setPilihanKain={setPilihanKain} setPilihanLining={setPilihanLining} setHarga={setHarga} setFiturJas={setFiturJas}/>
        </div>
        <LivePreview pilihanKain={pilihanKain} harga={harga} fiturJas={fiturJas} />
      </div>
      <Footer/>
    </div>
  );
}

export default Customize;
