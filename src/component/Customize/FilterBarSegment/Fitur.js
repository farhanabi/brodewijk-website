import React from 'react';
import classes from './Fitur.css';

const Fitur = ({pilihan,pilihanKain,setPilihan,setPilihanKain}) => {
	return (
		<div>
			<h1 style={{letterSpacing:'0.05em',fontWeight:'500'}}>Features</h1>
      <div className={classes.FeaturesList}>
        <h3 style={{margin:'10px 0 5px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Canvas Type</h3>
      	<div className={classes.InnerFeaturesList}>
	        <div onClick={()=>(setPilihanKain('Siberia'))} className={classes.FeatureList}>
	          <img src={require(`../../../img/customization/canvas/construction_half_canvas.png`)} width='100%' className={classes.FeatureImage}/>
	          <label style={{marginTop:5}}>Half Canvas</label>
	        </div>
	        <div onClick={()=>(setPilihanKain('Siberia'))} className={classes.FeatureList}>
	          <img src={require(`../../../img/customization/canvas/construction_unconstructed.png`)} width='100%' className={classes.FeatureImage}/>
	          <label style={{marginTop:5}}>Unconstructed</label>
	        </div>
        </div>
        <h3 style={{margin:'25px 0 5px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Shoulder Type</h3>
      	<div className={classes.InnerFeaturesList}>
	        <div onClick={()=>(setPilihanKain('Siberia'))} className={classes.FeatureList}>
	          <img src={require(`../../../img/customization/shoulder/shoulders_standard.png`)} width='100%' className={classes.FeatureImage}/>
	          <label style={{marginTop:5}}>Standard</label>
	        </div>
	        <div onClick={()=>(setPilihanKain('Siberia'))} className={classes.FeatureList}>
	          <img src={require(`../../../img/customization/shoulder/shoulders_roped.png`)} width='100%' className={classes.FeatureImage}/>
	          <label style={{marginTop:5}}>Roped</label>
	        </div>
	        <div onClick={()=>(setPilihanKain('Siberia'))} className={classes.FeatureList}>
	          <img src={require(`../../../img/customization/shoulder/shoulders_soft.png`)} width='100%' className={classes.FeatureImage}/>
	          <label style={{marginTop:5}}>Soft</label>
	        </div>
        </div>
        <h3 style={{margin:'25px 0 5px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Lapels</h3>
      	<div className={classes.InnerFeaturesList}>
	        <div onClick={()=>(setPilihanKain('Siberia'))} className={classes.FeatureList}>
	          <img src={require(`../../../img/customization/lapels/notch.png`)} width='100%' className={classes.FeatureImage}/>
	          <label style={{marginTop:5}}>Notch</label>
	        </div>
	        <div onClick={()=>(setPilihanKain('Siberia'))} className={classes.FeatureList}>
	          <img src={require(`../../../img/customization/lapels/notch_slim.png`)} width='100%' className={classes.FeatureImage}/>
	          <label style={{marginTop:5}}>Notch Slim</label>
	        </div>
	        <div onClick={()=>(setPilihanKain('Siberia'))} className={classes.FeatureList}>
	          <img src={require(`../../../img/customization/lapels/notch_wide.png`)} width='100%' className={classes.FeatureImage}/>
	          <label style={{marginTop:5}}>Notch Wide</label>
	        </div>
	        <div onClick={()=>(setPilihanKain('Siberia'))} className={classes.FeatureList}>
	          <img src={require(`../../../img/customization/lapels/peak.png`)} width='100%' className={classes.FeatureImage}/>
	          <label style={{marginTop:5}}>Peak</label>
	        </div>
	        <div onClick={()=>(setPilihanKain('Siberia'))} className={classes.FeatureList}>
	          <img src={require(`../../../img/customization/lapels/peak_wide.png`)} width='100%' className={classes.FeatureImage}/>
	          <label style={{marginTop:5}}>Peak Wide</label>
	        </div>
        </div>
        <h3 style={{margin:'25px 0 5px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Chest Pocket</h3>
      	<div className={classes.InnerFeaturesList}>
	        <div onClick={()=>(setPilihanKain('Siberia'))} className={classes.FeatureList}>
	          <img src={require(`../../../img/customization/chestPocket/chest_pocket_welted.png`)} width='100%' className={classes.FeatureImage}/>
	          <label style={{marginTop:5}}>Welted</label>
	        </div>
	        <div onClick={()=>(setPilihanKain('Siberia'))} className={classes.FeatureList}>
	          <img src={require(`../../../img/customization/chestPocket/chest_pocket_round_patch.png`)} width='100%' className={classes.FeatureImage}/>
	          <label style={{marginTop:5}}>Round Patch</label>
	        </div>
        </div>
        <h3 style={{margin:'25px 0 5px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Buttons</h3>
      	<div className={classes.InnerFeaturesList}>
	        <div onClick={()=>(setPilihanKain('Siberia'))} className={classes.FeatureList}>
	          <img src={require(`../../../img/customization/buttons/two.png`)} width='100%' className={classes.FeatureImage}/>
	          <label style={{marginTop:5}}>Two</label>
	        </div>
	        <div onClick={()=>(setPilihanKain('Siberia'))} className={classes.FeatureList}>
	          <img src={require(`../../../img/customization/buttons/one.png`)} width='100%' className={classes.FeatureImage}/>
	          <label style={{marginTop:5}}>One</label>
	        </div>
	        <div onClick={()=>(setPilihanKain('Siberia'))} className={classes.FeatureList}>
	          <img src={require(`../../../img/customization/buttons/three.png`)} width='100%' className={classes.FeatureImage}/>
	          <label style={{marginTop:5}}>Three</label>
	        </div>
	        <div onClick={()=>(setPilihanKain('Siberia'))} className={classes.FeatureList}>
	          <img src={require(`../../../img/customization/buttons/3_button_rollover.png`)} width='100%' className={classes.FeatureImage}/>
	          <label style={{marginTop:5,textAlign:'center'}}>Three Buttons Roll-Over</label>
	        </div>
	        <div onClick={()=>(setPilihanKain('Siberia'))} className={classes.FeatureList}>
	          <img src={require(`../../../img/customization/buttons/dbl_breasted_4_buttons.png`)} width='100%' className={classes.FeatureImage}/>
	          <label style={{marginTop:5,textAlign:'center'}}>Four Buttons Double Breasted</label>
	        </div>
	        <div onClick={()=>(setPilihanKain('Siberia'))} className={classes.FeatureList}>
	          <img src={require(`../../../img/customization/buttons/dbl_breasted_6_buttons.png`)} width='100%' className={classes.FeatureImage}/>
	          <label style={{marginTop:5,textAlign:'center'}}>Six Buttons Double Breasted</label>
	        </div>
        </div>
        <h3 style={{margin:'25px 0 5px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Pockets</h3>
      	<div className={classes.InnerFeaturesList}>
	        <div onClick={()=>(setPilihanKain('Siberia'))} className={classes.FeatureList}>
	          <img src={require(`../../../img/customization/pockets/pocket_flaps.png`)} width='100%' className={classes.FeatureImage}/>
	          <label style={{marginTop:5,textAlign:'center'}}>Pocket Flaps</label>
	        </div>
	        <div onClick={()=>(setPilihanKain('Siberia'))} className={classes.FeatureList}>
	          <img src={require(`../../../img/customization/pockets/patch_pockets.png`)} width='100%' className={classes.FeatureImage}/>
	          <label style={{marginTop:5,textAlign:'center'}}>Patch Pockets</label>
	        </div>
	        <div onClick={()=>(setPilihanKain('Siberia'))} className={classes.FeatureList}>
	          <img src={require(`../../../img/customization/pockets/no_pocket_flaps.png`)} width='100%' className={classes.FeatureImage}/>
	          <label style={{marginTop:5,textAlign:'center'}}>No Pocket Flaps</label>
	        </div>
	        <div onClick={()=>(setPilihanKain('Siberia'))} className={classes.FeatureList}>
	          <img src={require(`../../../img/customization/pockets/pocket_flaps_slanted.png`)} width='100%' className={classes.FeatureImage}/>
	          <label style={{marginTop:5,textAlign:'center'}}>Pocket Flaps Slanted</label>
	        </div>
	        <div onClick={()=>(setPilihanKain('Siberia'))} className={classes.FeatureList}>
	          <img src={require(`../../../img/customization/pockets/no_pocket_flaps_slanted.png`)} width='100%' className={classes.FeatureImage}/>
	          <label style={{marginTop:5,textAlign:'center'}}>No Pocket Flaps Slanted</label>
	        </div>
        </div>
        <h3 style={{margin:'25px 0 5px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Vents</h3>
      	<div className={classes.InnerFeaturesList}>
	        <div onClick={()=>(setPilihanKain('Siberia'))} className={classes.FeatureList}>
	          <img src={require(`../../../img/customization/vents/vents_one.png`)} width='100%' className={classes.FeatureImage}/>
	          <label style={{marginTop:5,textAlign:'center'}}>One</label>
	        </div>
	        <div onClick={()=>(setPilihanKain('Siberia'))} className={classes.FeatureList}>
	          <img src={require(`../../../img/customization/vents/vents_two.png`)} width='100%' className={classes.FeatureImage}/>
	          <label style={{marginTop:5,textAlign:'center'}}>Two</label>
	        </div>
	        <div onClick={()=>(setPilihanKain('Siberia'))} className={classes.FeatureList}>
	          <img src={require(`../../../img/customization/vents/vents_none.png`)} width='100%' className={classes.FeatureImage}/>
	          <label style={{marginTop:5,textAlign:'center'}}>None</label>
	        </div>
        </div>
      </div>
	  	<div className={classes.changeFeatureContainer}>
		  	<span className={classes.changeFeatureLeft} onClick={()=>(setPilihan('kain'))}>Back to Fabric</span>
		    <span className={classes.changeFeatureRight} onClick={()=>(setPilihan('ukur'))}>Measure</span>
      </div>
    </div>
	)
}

export default Fitur;