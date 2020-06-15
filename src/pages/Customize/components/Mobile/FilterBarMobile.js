import React from 'react';
// import classes from './FilterBar.css'
import KainMobile from './FilterBarSegment/KainMobile'
import FiturMobile from './FilterBarSegment/FiturMobile'
import UkurMobile from './FilterBarSegment/UkurMobile'

const FilterBarMobile = ({pilihan,pilihanKain,pilihanLining,harga,kainPrice,fiturPrice,measurePrice,fiturJas,setPilihan,setPilihanKain,setPilihanLining,setHarga,setKainPrice,setFiturPrice,setMeasurePrice,setFiturJas}) => {
	if (pilihan === 'kain') return <KainMobile pilihan={pilihan} pilihanKain={pilihanKain} harga ={harga} kainPrice={kainPrice} setPilihan={setPilihan} setPilihanKain={setPilihanKain} setHarga={setHarga} setKainPrice={setKainPrice}/>
	else if (pilihan === 'fitur') return <FiturMobile pilihan={pilihan} pilihanKain={pilihanKain} harga ={harga} kainPrice={kainPrice} fiturPrice={fiturPrice} fiturJas={fiturJas} setPilihan={setPilihan} setPilihanKain={setPilihanKain} setHarga={setHarga} setFiturPrice={setFiturPrice} setFiturJas={setFiturJas} pilihanLining={pilihanLining} setPilihanLining={setPilihanLining}/>  	
	else if (pilihan === 'ukur') return <UkurMobile pilihan={pilihan} kainPrice={kainPrice} measurePrice={measurePrice} fiturJas={fiturJas} setPilihan={setPilihan} setMeasurePrice={setMeasurePrice} setFiturJas={setFiturJas}/>
}

export default FilterBarMobile;