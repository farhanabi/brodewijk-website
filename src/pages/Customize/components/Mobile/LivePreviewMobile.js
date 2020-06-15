import React from 'react';
import classes from './LivePreviewMobile.css'

const LivePreviewMobile = ({pilihanKain,harga,fiturJas}) => {
  return (
    <div className={classes.LivePreviewMobile}>
      <div className={classes.wrapperImage}>
        <img src={require(`img/livePreview/${pilihanKain.jenis}/interior+espalda_abajo+length_long.png`)} className={classes.PreviewImage} alt=''/>
        <img src={require(`img/livePreview/${pilihanKain.jenis}/interior+espalda_arriba.png`)} className={classes.PreviewImage} alt=''/>
        <img src={require(`img/livePreview/${pilihanKain.jenis}/interior+espalda_arriba+label.png`)} className={classes.PreviewImage} alt=''/>
        <img src={require(`img/livePreview/${pilihanKain.jenis}/neck_${fiturJas.buttonsSegment}+buttons_${fiturJas.buttons}+lapel_${fiturJas.lapelWidth}+style_lapel_${fiturJas.lapelStyle}.png`)} className={classes.PreviewImage} alt=''/>
        <img src={require(`img/livePreview/${pilihanKain.jenis}/bottom_${fiturJas.buttonsSegment}+length_long+hemline_closed.png`)} className={classes.PreviewImage} alt=''/>
        <img src={require(`img/livePreview/${pilihanKain.jenis}/interior+sleeves.png`)} className={classes.PreviewImage} alt=''/>
        {pilihanKain.jenis === 'Siberia' ? (
          <React.Fragment>
            <img src={require(`img/livePreview/${pilihanKain.jenis}/breast_pocket_${fiturJas.chestPocket}.png`)} className={classes.PreviewImage} alt=''/>
            <img src={require(`img/livePreview/${pilihanKain.jenis}/hip_pockets_${fiturJas.pockets}+fit_slim.png`)} className={classes.PreviewImage} alt=''/>
          </React.Fragment>
        ) : null}
      </div>
      <div className={classes.wrapperText}>
        <h3 style={{fontFamily:"Helvetica Neue",fontSize:20,marginBottom:0,fontWeight:500,letterSpacing:'0.05em'}}>{pilihanKain.jenis}</h3>
        { (fiturJas.pants === 'none') ? (
          <h4 style={{marginTop:5, marginBottom:5, fontWeight:400}}>without Pants</h4>
        ) : (
          <h4 style={{marginTop:5, marginBottom:5, fontWeight:400}}>with Pants</h4>
        )}
        <h4 style={{marginTop:5, fontWeight:400}}>Rp{harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h4>
      </div>
    </div>
  )
  
}

export default LivePreviewMobile;

