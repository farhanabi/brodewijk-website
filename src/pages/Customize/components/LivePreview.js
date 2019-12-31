import React from 'react';
import classes from './LivePreview.css'

const LivePreview = ({pilihanKain,harga,fiturJas}) => {
  if (pilihanKain === 'Siberia') {
    return (
    <div className={classes.LivePreview}>
      <img src={require(`../../../img/livePreview/${pilihanKain}/interior+espalda_abajo+length_long.png`)} className={classes.PreviewImage} alt=''/>
      <img src={require(`../../../img/livePreview/${pilihanKain}/interior+espalda_arriba.png`)} className={classes.PreviewImage} alt=''/>
      <img src={require(`../../../img/livePreview/${pilihanKain}/interior+espalda_arriba+label.png`)} className={classes.PreviewImage} alt=''/>
      <img src={require(`../../../img/livePreview/${pilihanKain}/neck_${fiturJas.buttonsSegment}+buttons_${fiturJas.buttons}+lapel_${fiturJas.lapelWidth}+style_lapel_${fiturJas.lapelStyle}.png`)} className={classes.PreviewImage} alt=''/>
      <img src={require(`../../../img/livePreview/${pilihanKain}/bottom_${fiturJas.buttonsSegment}+length_long+hemline_closed.png`)} className={classes.PreviewImage} alt=''/>
      <img src={require(`../../../img/livePreview/${pilihanKain}/interior+sleeves.png`)} className={classes.PreviewImage} alt=''/>
      <img src={require(`../../../img/livePreview/${pilihanKain}/breast_pocket_${fiturJas.chestPocket}.png`)} className={classes.PreviewImage} alt=''/>
      <img src={require(`../../../img/livePreview/${pilihanKain}/hip_pockets_${fiturJas.pockets}+fit_slim.png`)} className={classes.PreviewImage} alt=''/>
      <h3 style={{fontFamily:"Helvetica Neue",fontSize:20,marginBottom:0,fontWeight:500,letterSpacing:'0.05em'}}>{pilihanKain}</h3>
      <h4 style={{marginTop:5, fontWeight:400}}>Rp. {harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h4>
    </div>
    )
  } else {
    return (
    <div className={classes.LivePreview}>
      <img src={require(`../../../img/livePreview/${pilihanKain}/interior+espalda_abajo+length_long.png`)} className={classes.PreviewImage} alt=''/>
      <img src={require(`../../../img/livePreview/${pilihanKain}/interior+espalda_arriba.png`)} className={classes.PreviewImage} alt=''/>
      <img src={require(`../../../img/livePreview/${pilihanKain}/interior+espalda_arriba+label.png`)} className={classes.PreviewImage} alt=''/>
      <img src={require(`../../../img/livePreview/${pilihanKain}/neck_${fiturJas.buttonsSegment}+buttons_${fiturJas.buttons}+lapel_${fiturJas.lapelWidth}+style_lapel_${fiturJas.lapelStyle}.png`)} className={classes.PreviewImage} alt=''/>
      <img src={require(`../../../img/livePreview/${pilihanKain}/bottom_${fiturJas.buttonsSegment}+length_long+hemline_closed.png`)} className={classes.PreviewImage} alt=''/>
      <img src={require(`../../../img/livePreview/${pilihanKain}/interior+sleeves.png`)} className={classes.PreviewImage} alt=''/>
      <h3 style={{fontFamily:"Helvetica Neue",fontSize:20,marginBottom:0,fontWeight:500,letterSpacing:'0.05em'}}>{pilihanKain}</h3>
      <h4 style={{marginTop:5, fontWeight:400}}>Rp. {harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h4>
    </div>
    )
  }
}

export default LivePreview;

