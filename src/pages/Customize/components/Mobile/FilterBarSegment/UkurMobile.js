import React, {useState} from 'react';
import classes from './UkurMobile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const measureOptions = [
	{
    "name": "Customize Size",
  }, 
  {
    "name": "Standard Size"
  }
]
const Fitur = ({pilihan,kainPrice,measurePrice,fiturJas,setPilihan,setMeasurePrice,setFiturJas}) => {
  const [measureMethod, setMeasureMethod] = useState('')
  const [standardSize, setStandardSize] = useState('M')
  const [isMeasure, setIsMeasure] = useState(false)

  const changeMeasure = (value) => {
    setMeasureMethod(value)
    setIsMeasure(!isMeasure)
  }

	return (
		<div style={{ width: '100%' }}>
      <p style={{ fontSize: '16px', margin: '5px', display: 'inline-block' }}>
        Measure {measureMethod.length > 0 ? `/ ${measureMethod}` : ``}
      </p>
      {isMeasure ? (
				<button className={classes.ButtonIcon} onClick={() => setIsMeasure(!isMeasure)}>
					<FontAwesomeIcon icon={faAngleLeft} />
				</button>
			) : null}
      <div className={classes.MeasureList}>
        {measureOptions.length > 0 && !isMeasure ? (
          measureOptions.map((v, k) => (
            <div className={classes.MeasureItem} key={k} onClick={() => changeMeasure(v.name)}>
              <h5>{v.name}</h5>
            </div>
          ))
        ) : (
          <div className={classes.MeasureWrapper}>
            {measureMethod === 'Customize Size' ? (
              <div>
                <h5>Body Measurement</h5>
                <div className={classes.InnerMeasurementsList}>
                  <p className={classes.MeasurementLabel}>Tinggi Badan: </p>
                  <input type='number' className={classes.MeasurementInput} step='0.5'/>
                  <p className={classes.LabelUnit}> cm</p>
                </div>
                <div className={classes.InnerMeasurementsList}>
                  <p className={classes.MeasurementLabel}>Berat Badan: </p>
                  <input type='number' className={classes.MeasurementInput} step='0.5'/>
                  <p className={classes.LabelUnit}> cm</p>
                </div>
                <h5>Upper Measurement</h5>
                <div className={classes.InnerMeasurementsList}>
                  <p className={classes.MeasurementLabel}>Panjang Jas: </p>
                  <input type='number' className={classes.MeasurementInput} step='0.5'/>
                  <p className={classes.LabelUnit}> cm</p>
                </div>
                <div className={classes.InnerMeasurementsList}>
                  <p className={classes.MeasurementLabel}>Lebar Bahu: </p>
                  <input type='number' className={classes.MeasurementInput} step='0.5'/>
                  <p className={classes.LabelUnit}> cm</p>
                </div>
                <div className={classes.InnerMeasurementsList}>
                  <p className={classes.MeasurementLabel}>Panjang Tangan: </p>
                  <input type='number' className={classes.MeasurementInput} step='0.5'/>
                  <p className={classes.LabelUnit}> cm</p>
                </div>
                <div className={classes.InnerMeasurementsList}>
                  <p className={classes.MeasurementLabel}>Lingkar Dada: </p>
                  <input type='number' className={classes.MeasurementInput} step='0.5'/>
                  <p className={classes.LabelUnit}> cm</p>
                </div>
                <div className={classes.InnerMeasurementsList}>
                  <p className={classes.MeasurementLabel}>Lingkar Perut: </p>
                  <input type='number' className={classes.MeasurementInput} step='0.5'/>
                  <p className={classes.LabelUnit}> cm</p>
                </div>
                <div className={classes.InnerMeasurementsList}>
                  <p className={classes.MeasurementLabel}>Lingkar Pinggul: </p>
                  <input type='number' className={classes.MeasurementInput} step='0.5'/>
                  <p className={classes.LabelUnit}> cm</p>
                </div>
                <div className={classes.InnerMeasurementsList}>
                  <p className={classes.MeasurementLabel}>Lingkar Ketiak: </p>
                  <input type='number' className={classes.MeasurementInput} step='0.5'/>
                  <p className={classes.LabelUnit}> cm</p>
                </div>
                <div className={classes.InnerMeasurementsList}>
                  <p className={classes.MeasurementLabel}>Lingkar Lengan Atas: </p>
                  <input type='number' className={classes.MeasurementInput} step='0.5'/>
                  <p className={classes.LabelUnit}> cm</p>
                </div>
                <div className={classes.InnerMeasurementsList}>
                  <p className={classes.MeasurementLabel}>Lingkar Pergelangan Tangan: </p>
                  <input type='number' className={classes.MeasurementInput} step='0.5'/>
                  <p className={classes.LabelUnit}> cm</p>
                </div>
                <div className={classes.InnerMeasurementsList}>
                  <p className={classes.MeasurementLabel}>Lebar Dada Depan: </p>
                  <input type='number' className={classes.MeasurementInput} step='0.5'/>
                  <p className={classes.LabelUnit}> cm</p>
                </div>
                <div className={classes.InnerMeasurementsList}>
                  <p className={classes.MeasurementLabel}>Lebar Dada Belakang: </p>
                  <input type='number' className={classes.MeasurementInput} step='0.5'/>
                  <p className={classes.LabelUnit}> cm</p>
                </div>
                <h5>Bottom Measurement</h5>
                <div className={classes.InnerMeasurementsList}>
                  <p className={classes.MeasurementLabel}>Panjang Celana: </p>
                  <input type='number' className={classes.MeasurementInput} step='0.5'/>
                  <p className={classes.LabelUnit}> cm</p>
                </div>
                <div className={classes.InnerMeasurementsList}>
                  <p className={classes.MeasurementLabel}>Lingkar Pinggang: </p>
                  <input type='number' className={classes.MeasurementInput} step='0.5'/>
                  <p className={classes.LabelUnit}> cm</p>
                </div>
                <div className={classes.InnerMeasurementsList}>
                  <p className={classes.MeasurementLabel}>Panjang Selangkangan: </p>
                  <input type='number' className={classes.MeasurementInput} step='0.5'/>
                  <p className={classes.LabelUnit}> cm</p>
                </div>
                <div className={classes.InnerMeasurementsList}>
                  <p className={classes.MeasurementLabel}>Lingkar Paha: </p>
                  <input type='number' className={classes.MeasurementInput} step='0.5'/>
                  <p className={classes.LabelUnit}> cm</p>
                </div>
                <div className={classes.InnerMeasurementsList}>
                  <p className={classes.MeasurementLabel}>Lingkar Lutut: </p>
                  <input type='number' className={classes.MeasurementInput} step='0.5'/>
                  <p className={classes.LabelUnit}> cm</p>
                </div>
              </div>
            ) : (
              <div style={{ padding: '40px 5px'}}>
                <div className={classes.SizeBoxCont}>
                { (standardSize === 'S')
                  ? <span className={classes.SizeBoxSelected}>S</span>
                  : <span className={classes.SizeBox} onClick={()=>{setStandardSize('S');setMeasurePrice(0)}}>S</span> }
                { (standardSize === 'M')
                  ? <span className={classes.SizeBoxSelected}>M</span>
                  : <span className={classes.SizeBox} onClick={()=>{setStandardSize('M');setMeasurePrice(0)}}>M</span> }
                { (standardSize === 'L')
                  ? <span className={classes.SizeBoxSelected}>L</span>
                  : <span className={classes.SizeBox} onClick={()=>{setStandardSize('L');setMeasurePrice(0)}}>L</span> }
                { (standardSize === 'XL')
                  ? <span className={classes.SizeBoxSelected}>XL</span>
                  : <span className={classes.SizeBox} onClick={()=>{setStandardSize('XL');(kainPrice === 950000)?setMeasurePrice(100000):((kainPrice === 1420000)?setMeasurePrice(150000):setMeasurePrice(450000))}}>XL</span> }
                { (standardSize === 'XXL')
                  ? <span className={classes.SizeBoxSelected}>XXL</span>
                  : <span className={classes.SizeBox} onClick={()=>{setStandardSize('XXL');(kainPrice === 950000)?setMeasurePrice(100000):((kainPrice === 1420000)?setMeasurePrice(150000):setMeasurePrice(450000))}}>XXL</span> }
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <div className={classes.WrapperButton}>
				<button className={classes.ButtonAction} onClick={()=>(window.alert('This feature is not yet available. Please wait until our release day to order'))}>Order</button>
        <button className={classes.ButtonAction} style={{ background: 'rgba(70,70,70,1)', color: '#fff'}} onClick={()=>{setPilihan('fitur')}}>Back to Feature</button>
			</div>
    </div>
	)
}

export default Fitur;