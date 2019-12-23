import React from 'react';
import classes from './FilterBar.css'
import Kain from './FilterBarSegment/Kain'
import Fitur from './FilterBarSegment/Fitur'

const FilterBar = ({pilihan,pilihanKain,setPilihan,setPilihanKain}) => {
	if (pilihan === 'kain') return <Kain pilihan={pilihan} pilihanKain={pilihanKain} setPilihan={setPilihan} setPilihanKain={setPilihanKain}/>
  else if (pilihan == 'fitur') return <Fitur pilihan={pilihan} pilihanKain={pilihanKain} setPilihan={setPilihan} setPilihanKain={setPilihanKain}/>  	
}

export default FilterBar;