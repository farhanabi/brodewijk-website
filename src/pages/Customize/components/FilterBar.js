import React from 'react';
// import classes from './FilterBar.css'
import Kain from './FilterBarSegment/Kain'
import Fitur from './FilterBarSegment/Fitur'
import Ukur from './FilterBarSegment/Ukur'

const FilterBar = ({pilihan,pilihanKain,harga,fiturJas,setPilihan,setPilihanKain,setHarga,setFiturJas}) => {
	if (pilihan === 'kain') return <Kain pilihan={pilihan} pilihanKain={pilihanKain} setPilihan={setPilihan} setPilihanKain={setPilihanKain}/>
	else if (pilihan === 'fitur') return <Fitur pilihan={pilihan} pilihanKain={pilihanKain} harga ={harga} fiturJas={fiturJas} setPilihan={setPilihan} setPilihanKain={setPilihanKain} setHarga={setHarga} setFiturJas={setFiturJas}/>  	
	else if (pilihan === 'ukur') return <Ukur pilihan={pilihan} fiturJas={fiturJas} setPilihan={setPilihan} setFiturJas={setFiturJas}/>
}

export default FilterBar;