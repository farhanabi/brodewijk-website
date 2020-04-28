import React, {useState} from 'react';
import classes from './Ukur.css';
import SizeChart from './Ukur/SizeChart'

import Authorization from '../../../../Shared/Authorization'

const Profil = ({pilihan,kainPrice,measurePrice,fiturJas,setPilihan,setMeasurePrice,setFiturJas}) => {
  const [measMethod, setMeasMethod] = useState('Customize Size')
  const [standardSize, setStandardSize] = useState('M')
  
  const [usePrefProfile, setUsePrefProfile] = useState(false)

  /*fitur.lapelStyle='notch';fitur.lapelWidth='medium';setFiturJas(fitur)
	<div onClick={()=>(setPilihanKain('Siberia'))} className={classes.MeasurementList}>
	  <img src={require(`../../../../img/customization/canvas/construction_half_canvas.png`)} width='100%' className={classes.MeasurementImage} alt=''/>
	  <label style={{marginTop:5}}>Half Canvas</label>
	</div>*/ 
	return (
		<div>
			<h1 style={{letterSpacing:'0.05em',fontWeight:'500'}}>Profile</h1>
      <div className={classes.MeasurementsList}>
        <div className={classes.changeMeasMethodCont}>
          <p style={{margin:'0', width:'100%'}}>Please give in some details to finalize your order!</p>
        </div>

        
        <div>
          {(Authorization.validateToken())
            ? <div className={classes.checkboxGrid} style={{textAlign:'left'}}>
                <input className={classes.input} type='checkbox' checked={usePrefProfile}  onChange={e => setUsePrefProfile(e.target.checked)}/><h3>Use Preference Profile</h3>
              </div>
            : null }
          <div className={classes.InnerMeasurementsList} style={{display:usePrefProfile&&'none'}}><p className={classes.MeasurementLabel}>First Name: </p><input type='text' className={classes.MeasurementInput}/></div>
          <div className={classes.InnerMeasurementsList} style={{display:usePrefProfile&&'none'}}><p className={classes.MeasurementLabel}>Last Name: </p><input type='text' className={classes.MeasurementInput}/></div>
          <div className={classes.InnerMeasurementsList} style={{display:usePrefProfile&&'none'}}><p className={classes.MeasurementLabel}>Office Name: </p><input type='text' className={classes.MeasurementInput}/></div>
          <div className={classes.InnerMeasurementsList} style={{display:usePrefProfile&&'none'}}><p className={classes.MeasurementLabel}>Address: </p><input type='text' className={classes.MeasurementInput}/></div>
          <div className={classes.InnerMeasurementsList} style={{display:usePrefProfile&&'none'}}><p className={classes.MeasurementLabel}>Complex/Cluster: </p><input type='text' className={classes.MeasurementInput}/></div>
          <div className={classes.InnerMeasurementsList} style={{display:usePrefProfile&&'none'}}><p className={classes.MeasurementLabel}>Sub-district: </p><input type='text' className={classes.MeasurementInput}/></div>
          <div className={classes.InnerMeasurementsList} style={{display:usePrefProfile&&'none'}}><p className={classes.MeasurementLabel}>City/District: </p><input type='text' className={classes.MeasurementInput}/></div>
          <div className={classes.InnerMeasurementsList} style={{display:usePrefProfile&&'none'}}><p className={classes.MeasurementLabel}>Province: </p><input type='text' className={classes.MeasurementInput}/></div>
          <div className={classes.InnerMeasurementsList} style={{display:usePrefProfile&&'none'}}><p className={classes.MeasurementLabel}>Postal Code: </p><input type='text' className={classes.MeasurementInput}/></div>
          <div className={classes.InnerMeasurementsList} style={{display:usePrefProfile&&'none'}}><p className={classes.MeasurementLabel}>Contact Number: </p><input type='text' className={classes.MeasurementInput}/></div>
        </div>
      </div>
	  	<div className={classes.changeFeatureContainer}>
		  	<span className={classes.changeFeatureLeft} onClick={()=>setPilihan('ukur')}>Back to Measurement</span>
		    <span className={classes.changeFeatureRight} onClick={()=>(window.alert('This feature is not yet available. Please wait until our release day to order'))}>Order</span>
      </div>
    </div>
	)
}

export default Profil;