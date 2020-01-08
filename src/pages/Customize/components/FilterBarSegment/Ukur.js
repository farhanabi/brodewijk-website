import React, {useState} from 'react';
import classes from './Ukur.css';

const Fitur = ({pilihan,setPilihan}) => {
  const [measMethod, setMeasMethod] = useState('Customize Size')
  const [standardSize, setStandardSize] = useState('M')
	/*fitur.lapelStyle='notch';fitur.lapelWidth='medium';setFiturJas(fitur)
	<div onClick={()=>(setPilihanKain('Siberia'))} className={classes.MeasurementList}>
	  <img src={require(`../../../../img/customization/canvas/construction_half_canvas.png`)} width='100%' className={classes.MeasurementImage} alt=''/>
	  <label style={{marginTop:5}}>Half Canvas</label>
	</div>*/ 
	return (
		<div>
			<h1 style={{letterSpacing:'0.05em',fontWeight:'500'}}>Measurement</h1>
      <div className={classes.MeasurementsList}>
        <div className={classes.changeMeasMethodCont}>
          <p style={{margin:'0', width:'100%'}}>Measurement Method: {measMethod}</p>
          { (measMethod === 'Customize Size') 
            ? <span className={classes.changeMeasMethod} onClick={()=>setMeasMethod('Standard Size')}>Change to Standard Size</span>
            : <span className={classes.changeMeasMethod} onClick={()=>setMeasMethod('Customize Size')}>Change to Customize Size</span> }
        </div>

        { (measMethod === 'Customize Size')
          ? <div>
              <h3 style={{margin:'20px 0 5px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Body Measurement</h3>
              <div className={classes.InnerMeasurementsList}><p className={classes.MeasurementLabel}>Tinggi Badan: </p><input type='number' className={classes.MeasurementInput} step='0.5'/><p className={classes.LabelUnit}> cm</p></div>
              <div className={classes.InnerMeasurementsList}><p className={classes.MeasurementLabel}>Berat Badan: </p><input type='number' className={classes.MeasurementInput} step='0.5'/><p className={classes.LabelUnit}> cm</p></div>
              <h3 style={{margin:'40px 0 5px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Upper Measurement</h3>
              <div className={classes.InnerMeasurementsList}><p className={classes.MeasurementLabel}>Panjang Jas: </p><input type='number' className={classes.MeasurementInput} step='0.5'/><p className={classes.LabelUnit}> cm</p></div>
              <div className={classes.InnerMeasurementsList}><p className={classes.MeasurementLabel}>Lebar Bahu: </p><input type='number' className={classes.MeasurementInput} step='0.5'/><p className={classes.LabelUnit}> cm</p></div>
              <div className={classes.InnerMeasurementsList}><p className={classes.MeasurementLabel}>Panjang Tangan: </p><input type='number' className={classes.MeasurementInput} step='0.5'/><p className={classes.LabelUnit}> cm</p></div>
              <div className={classes.InnerMeasurementsList}><p className={classes.MeasurementLabel}>Lingkar Dada: </p><input type='number' className={classes.MeasurementInput} step='0.5'/><p className={classes.LabelUnit}> cm</p></div>
              <div className={classes.InnerMeasurementsList}><p className={classes.MeasurementLabel}>Lingkar Perut: </p><input type='number' className={classes.MeasurementInput} step='0.5'/><p className={classes.LabelUnit}> cm</p></div>
              <div className={classes.InnerMeasurementsList}><p className={classes.MeasurementLabel}>Lingkar Pinggul: </p><input type='number' className={classes.MeasurementInput} step='0.5'/><p className={classes.LabelUnit}> cm</p></div>
              <div className={classes.InnerMeasurementsList}><p className={classes.MeasurementLabel}>Lingkar Ketiak: </p><input type='number' className={classes.MeasurementInput} step='0.5'/><p className={classes.LabelUnit}> cm</p></div>
              <div className={classes.InnerMeasurementsList}><p className={classes.MeasurementLabel}>Lingkar Lengan Atas: </p><input type='number' className={classes.MeasurementInput} step='0.5'/><p className={classes.LabelUnit}> cm</p></div>
              <div className={classes.InnerMeasurementsList}><p className={classes.MeasurementLabel}>Lingkar Pergelangan Tangan: </p><input type='number' className={classes.MeasurementInput} step='0.5'/><p className={classes.LabelUnit}> cm</p></div>
              <div className={classes.InnerMeasurementsList}><p className={classes.MeasurementLabel}>Lebar Dada Depan: </p><input type='number' className={classes.MeasurementInput} step='0.5'/><p className={classes.LabelUnit}> cm</p></div>
              <div className={classes.InnerMeasurementsList}><p className={classes.MeasurementLabel}>Lebar Dada Belakang: </p><input type='number' className={classes.MeasurementInput} step='0.5'/><p className={classes.LabelUnit}> cm</p></div>
            	<h3 style={{margin:'40px 0 5px 10px',fontFamily:'prata',letterSpacing:'0.03em',fontWeight:'500'}}>Bottom Measurement</h3>
              <div className={classes.InnerMeasurementsList}><p className={classes.MeasurementLabel}>Panjang Celana: </p><input type='number' className={classes.MeasurementInput} step='0.5'/><p className={classes.LabelUnit}> cm</p></div>
              <div className={classes.InnerMeasurementsList}><p className={classes.MeasurementLabel}>Lingkar Pinggang: </p><input type='number' className={classes.MeasurementInput} step='0.5'/><p className={classes.LabelUnit}> cm</p></div>
              <div className={classes.InnerMeasurementsList}><p className={classes.MeasurementLabel}>Panjang Selangkangan: </p><input type='number' className={classes.MeasurementInput} step='0.5'/><p className={classes.LabelUnit}> cm</p></div>
              <div className={classes.InnerMeasurementsList}><p className={classes.MeasurementLabel}>Lingkar Paha: </p><input type='number' className={classes.MeasurementInput} step='0.5'/><p className={classes.LabelUnit}> cm</p></div>
              <div className={classes.InnerMeasurementsList}><p className={classes.MeasurementLabel}>Lingkar Lutut: </p><input type='number' className={classes.MeasurementInput} step='0.5'/><p className={classes.LabelUnit}> cm</p></div>
              <div className={classes.InnerMeasurementsList}><p className={classes.MeasurementLabel}>Lingkar Pergelangan Kaki: </p><input type='number' className={classes.MeasurementInput} step='0.5'/><p className={classes.LabelUnit}> cm</p></div>
              <div className={classes.InnerMeasurementsList}><p className={classes.MeasurementLabel}>Lingkar Pinggul Celana: </p><input type='number' className={classes.MeasurementInput} step='0.5'/><p className={classes.LabelUnit}> cm</p></div>
            </div>
          : <div className={classes.SizeBoxCont}>
              { (standardSize === 'S')
                ? <span className={classes.SizeBoxSelected}>S</span>
                : <span className={classes.SizeBox} onClick={()=>setStandardSize('S')}>S</span> }
              { (standardSize === 'M')
                ? <span className={classes.SizeBoxSelected}>M</span>
                : <span className={classes.SizeBox} onClick={()=>setStandardSize('M')}>M</span> }
              { (standardSize === 'L')
                ? <span className={classes.SizeBoxSelected}>L</span>
                : <span className={classes.SizeBox} onClick={()=>setStandardSize('L')}>L</span> }
              { (standardSize === 'XL')
                ? <span className={classes.SizeBoxSelected}>XL</span>
                : <span className={classes.SizeBox} onClick={()=>setStandardSize('XL')}>XL</span> }
              { (standardSize === 'XXL')
                ? <span className={classes.SizeBoxSelected}>XXL</span>
                : <span className={classes.SizeBox} onClick={()=>setStandardSize('XXL')}>XXL</span> }
            </div>
        }
      </div>
	  	<div className={classes.changeFeatureContainer}>
		  	<span className={classes.changeFeatureLeft} onClick={()=>setPilihan('fitur')}>Back to Features</span>
		    <span className={classes.changeFeatureRight} onClick={()=>(window.alert('This feature is not yet available. Please wait until our release day to order'))}>Order</span>
      </div>
    </div>
	)
}

export default Fitur;