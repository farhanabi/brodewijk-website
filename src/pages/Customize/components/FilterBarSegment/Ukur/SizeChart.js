import React from 'react';

const SizeChart = ({fit,size}) => {
	let ukuran = {
		bahu: 0,
		dada: 0,
		leher: 0,
		ketiak: 0,
		perut: 0,
		pinggul: 0,
		pergelangan: 0,
		panjangTangan: 0,
		panjangBadan: 0
	}

	if (fit === 'regular' && size === 'S') {
		ukuran = {
		bahu: 44,
		dada: 102,
		leher: 46,
		ketiak: 50,
		perut: 98,
		pinggul: 96,
		pergelangan: 24,
		panjangTangan: 62,
		panjangBadan: 70
		}
	}
	else if (fit === 'regular' && size === 'M') {
		ukuran = {
		bahu: 47,
		dada: 108,
		leher: 46,
		ketiak: 50,
		perut: 104,
		pinggul: 102,
		pergelangan: 24,
		panjangTangan: 62,
		panjangBadan: 70
		}
	}
	else if (fit === 'regular' && size === 'L') {
		ukuran = {
		bahu: 50,
		dada: 114,
		leher: 50,
		ketiak: 54,
		perut: 110,
		pinggul: 108,
		pergelangan: 26,
		panjangTangan: 62,
		panjangBadan: 72
		}
	}
	else if (fit === 'regular' && size === 'XL') {
		ukuran = {
		bahu: 53,
		dada: 120,
		leher: 50,
		ketiak: 54,
		perut: 116,
		pinggul: 114,
		pergelangan: 26,
		panjangTangan: 62,
		panjangBadan: 72
		}
	}
	else if (fit === 'regular' && size === 'XXL') {
		ukuran = {
		bahu: 56,
		dada: 126,
		leher: 54,
		ketiak: 58,
		perut: 122,
		pinggul: 120,
		pergelangan: 28,
		panjangTangan: 64,
		panjangBadan: 74
		}
	}

	if (ukuran.bahu !== 0 || ukuran.dada !== 0 || ukuran.leher !== 0 || ukuran.ketiak !== 0 || ukuran.perut !== 0 || ukuran.pinggul !== 0 || ukuran.pergelangan !== 0 || ukuran.panjangTangan !== 0 || ukuran.panjangBadan !== 0) {
	return (
		<div>
			<p>Lebar Bahu: {ukuran.bahu} cm</p>
			<p>Lingkar Dada: {ukuran.dada} cm</p>
			<p>Lingkar Leher: {ukuran.leher} cm</p>
			<p>Lingkar Ketiak: {ukuran.ketiak} cm</p>
			<p>Lingkar Perut: {ukuran.perut} cm</p>
			<p>Lingkar Pinggul: {ukuran.pinggul} cm</p>
			<p>Pergelangan Tangan: {ukuran.pergelangan} cm</p>
			<p>Panjang Tangan: {ukuran.panjangTangan} cm</p>
			<p>Panjang Badan: {ukuran.panjangBadan} cm</p>
		</div>
	)}
	else {return(null)}
}

export default SizeChart;