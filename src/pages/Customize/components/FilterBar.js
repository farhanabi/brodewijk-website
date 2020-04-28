import React from 'react';
// import classes from './FilterBar.css'
import Kain from './FilterBarSegment/Kain'
import Fitur from './FilterBarSegment/Fitur'
import Ukur from './FilterBarSegment/Ukur'
import Profil from './FilterBarSegment/Profil'

const FilterBar = ({pilihan,pilihanKain,pilihanLining,harga,kainPrice,fiturPrice,measurePrice,fiturJas,setPilihan,setPilihanKain,setPilihanLining,setHarga,setKainPrice,setFiturPrice,setMeasurePrice,setFiturJas}) => {
	if (pilihan === 'kain') return <Kain pilihan={pilihan} pilihanKain={pilihanKain} harga ={harga} kainPrice={kainPrice} setPilihan={setPilihan} setPilihanKain={setPilihanKain} setHarga={setHarga} setKainPrice={setKainPrice}/>
	else if (pilihan === 'fitur') return <Fitur pilihan={pilihan} pilihanKain={pilihanKain} harga ={harga} kainPrice={kainPrice} fiturPrice={fiturPrice} fiturJas={fiturJas} setPilihan={setPilihan} setPilihanKain={setPilihanKain} setHarga={setHarga} setFiturPrice={setFiturPrice} setFiturJas={setFiturJas} pilihanLining={pilihanLining} setPilihanLining={setPilihanLining}/>  	
	else if (pilihan === 'ukur') return <Ukur pilihan={pilihan} kainPrice={kainPrice} measurePrice={measurePrice} fiturJas={fiturJas} setPilihan={setPilihan} setMeasurePrice={setMeasurePrice} setFiturJas={setFiturJas}/>
	else if (pilihan === 'profil') return <Profil pilihan={pilihan} kainPrice={kainPrice} measurePrice={measurePrice} fiturJas={fiturJas} setPilihan={setPilihan} setMeasurePrice={setMeasurePrice} setFiturJas={setFiturJas}/>
}

export default FilterBar;