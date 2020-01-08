import React, {useEffect, useState} from 'react';
// import { useEffect, useState, useRef } from 'react';
import classes from './Accounts.css';
import Header from '../../Components/Header/Header';
// import Carousel from '../component/BookCarousel';
import Footer from './components/Footer';

import Authorization from "../../Shared/Authorization";
import APIBuilder from "../../Shared/APIBuilder";
import Constants from "../../Shared/Constants";
import History from "../../Shared/History";

function Accounts() {
  const [email, setEmail] = useState()
  const [useStandardSize, setUseStandardSize] = useState(false)
  const [standardSize, setStandardSize] = useState(false)
  const [profileVisibility, setProfileVisibility] = useState()
  const [sizeVisibility, setSizeVisibility] = useState()
  const [orderVisibility, setOrderVisibility] = useState()
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [officeName, setOfficeName] = useState()
  const [address, setAddress] = useState()
  const [additionalAddressInfo, setAdditionalAddressInfo] = useState()
  const [provinsi, setProvinsi] = useState()
  const [kotaKabupaten, setKotaKabupaten] = useState()
  const [kecamatan, setKecamatan] = useState()
  const [postalCode, setPostalCode] = useState()
  const [contactNumber, setContactNumber] = useState()

  const [tinggiBadan, setTinggiBadan] = useState(0)
  const [beratBadan, setBeratBadan] = useState(0)

  const [panjangJas, setPanjangJas] = useState(0)
  const [lebarBahu, setLebarBahu] = useState(0)
  const [panjangTangan, setPanjangTangan] = useState(0)
  const [lingkarDada, setLingkarDada] = useState(0)
  const [lingkarPerut, setLingkarPerut] = useState(0)
  const [lingkarPinggul, setLingkarPinggul] = useState(0)
  const [lingkarKetiak, setLingkarKetiak] = useState(0)
  const [lingkarLenganAtas, setLingkarLenganAtas] = useState(0)
  const [lingkarPergelanganTangan, setLingkarPergelanganTangan] = useState(0)
  const [lebarDadaDepan, setLebarDadaDepan] = useState(0)
  const [lebarDadaBelakang, setLebarDadaBelakang] = useState(0)

  const [panjangCelana, setPanjangCelana] = useState(0)
  const [lingkarPinggang, setLingkarPinggang] = useState(0)
  const [panjangSelangkangan, setPanjangSelangkangan] = useState(0)
  const [lingkarPaha, setLingkarPaha] = useState(0)
  const [lingkarLutut, setLingkarLutut] = useState(0)

  useEffect(() => {
    if (!Authorization.validateToken()) History.push('/login')
    if(Authorization.getEmail()) setEmail(Authorization.getEmail())

    const getProfile = async () => {
      const response = await APIBuilder('profile/')
      if (response.code === 200) {
        setFirstName(response.payload.data.firstName)
        setLastName(response.payload.data.lastName)
        setOfficeName(response.payload.data.officeName)
        setAddress(response.payload.data.address)
        setAdditionalAddressInfo(response.payload.data.additionalAddressInfo)
        setProvinsi(response.payload.data.provinsi)
        setKotaKabupaten(response.payload.data.kotaKabupaten)
        setKecamatan(response.payload.data.kecamatan)
        setPostalCode(response.payload.data.postalCode)
        setContactNumber(response.payload.data.contactNumber)
      }
    }

    const getPreference = async() => {
      const response = await APIBuilder('profile/preference/')
      if (response.code === 200) {
        if (response.payload.data.standardSize !== 0) {
          setUseStandardSize(true)
          setStandardSize(response.payload.data.standardSize)
        } else {
          setTinggiBadan(response.payload.data.tinggiBadan)
          setBeratBadan(response.payload.data.beratBadan)

          setPanjangJas(response.payload.data.panjangJas)
          setLebarBahu(response.payload.data.lebarBahu)
          setPanjangTangan(response.payload.data.panjangTangan)
          setLingkarDada(response.payload.data.lingkarDada)
          setLingkarPerut(response.payload.data.lingkarPerut)
          setLingkarPinggul(response.payload.data.lingkarPinggul)
          setLingkarKetiak(response.payload.data.lingkarKetiak)
          setLingkarLenganAtas(response.payload.data.lingkarLenganAtas)
          setLingkarPergelanganTangan(response.payload.data.lingkarPergelanganTangan)
          setLebarDadaDepan(response.payload.data.lebarDadaDepan)
          setLebarDadaBelakang(response.payload.data.lebarDadaBelakang)

          setPanjangCelana(response.payload.data.panjangCelana)
          setLingkarPinggang(response.payload.data.lingkarPinggang)
          setPanjangSelangkangan(response.payload.data.panjangSelangkangan)
          setLingkarPaha(response.payload.data.lingkarPaha)
          setLingkarLutut(response.payload.data.lingkarLutut)
        }
      }
    }

    getProfile()
    getPreference()
  }, [])

  const toggleProfile = () => {
    setProfileVisibility(!profileVisibility)
  }
  const toggleSize = () => {
    setSizeVisibility(!sizeVisibility)
  }
  const toggleOrder = () => {
    setOrderVisibility(!orderVisibility)
  }

  const handleProfileSubmit = async (e) => {
    e.preventDefault()
    let payload = {
      firstName,
      lastName,
      officeName,
      address,
      additionalAddressInfo,
      provinsi,
      kotaKabupaten,
      kecamatan,
      postalCode,
      contactNumber
    }

    let complete = true;

    Object.keys(payload).forEach(function(key,index) {
      if ((key !== 'officeName') && (!payload[key])) {
        complete = false
      }

      if ((key === 'officeName') && (!payload[key])) payload[key] = ''
    })

    if (!complete) return alert('Please complete the profile form')
    
    const response = await APIBuilder('profile/', payload, 'POST')
    if (response.code === 200) {
      return alert('Success saving profile!')
    } else {
      return alert('Failed saving profile!')
    }
  }

  const handleSizeSubmit = async (e) => {
    e.preventDefault()
    let payload = {
      standardSize,
      tinggiBadan,
      beratBadan,
      panjangJas,
      lebarBahu,
      panjangTangan,
      lingkarDada,
      lingkarPerut,
      lingkarPinggul,
      lingkarKetiak,
      lingkarLenganAtas,
      lingkarPergelanganTangan,
      lebarDadaDepan,
      lebarDadaBelakang,
      panjangCelana,
      lingkarPinggang,
      panjangSelangkangan,
      lingkarPaha,
      lingkarLutut
    }

    if (!useStandardSize) payload.standardSize = 0
    if ((useStandardSize) && (payload.standardSize === 0)) return alert('Please select the size or fill the measure')
    Object.keys(payload).forEach(function(key,index) {
      if (!payload[key]) {
        payload[key] = 0
      }
    })
    
    const response = await APIBuilder('profile/preference/', payload, 'POST')
    if (response.code === 200) {
      return alert('Success saving preference!')
    } else {
      return alert('Failed saving preference!')
    }
  }

  return (
    <div className={classes.App}>
      <div className={classes.stickyHeader}><Header textColor='rgb(90,90,90)' active='accounts' blackLogo/></div>
      <div className={classes.Main}>
        <br />
        <button onClick={toggleOrder} className={classes.accordionToggle}>
          <h1>Order</h1>
          <h1>{(!orderVisibility) ? '+' : '-'}</h1>
        </button>
        <button onClick={toggleProfile} className={classes.accordionToggle}>
          <h1>Profile</h1>
          <h1>{(!profileVisibility) ? '+' : '-'}</h1>
        </button>
        <form className={classes.firstGrids} style={{display: (!profileVisibility) ? 'none' : ''}} onSubmit={handleProfileSubmit}>
          <div className={classes.firstGrid}>
            &nbsp;
          </div>
          <div className={classes.column}>
            <div className={classes.firstGrid} style={{textAlign:'left'}}>
              <h3>Email:</h3><p>{email}</p>
            </div>
            <div className={classes.firstGrid} style={{textAlign:'left'}}>
              <h3>First Name:</h3><input className={classes.input} type='text' value={firstName || ''} onChange={e => setFirstName(e.target.value)} />
            </div>
            <div className={classes.firstGrid} style={{textAlign:'left'}}>
              <h3>Last Name:</h3><input className={classes.input} type='text' value={lastName || ''} onChange={e => setLastName(e.target.value)} />
            </div>
            <div className={classes.firstGrid} style={{textAlign:'left'}}>
              <h3>Office Name (Optional) :</h3><input className={classes.input} type='text' value={officeName || ''} onChange={e => setOfficeName(e.target.value)} />
            </div>
            <div className={classes.firstGrid} style={{textAlign:'left'}}>
              <h3>Address:</h3><input className={classes.input} type='text' value={address || ''} onChange={e => setAddress(e.target.value)} />
            </div>
            <br />
            <input type="submit" value="Save Profile" className={classes.saveProfile} />
          </div>
          <div className={classes.column}>
            <div className={classes.firstGrid} style={{textAlign:'left'}}>
              <h3>Complex / Cluster:</h3><input className={classes.input} type='text' value={additionalAddressInfo || ''} onChange={e => setAdditionalAddressInfo(e.target.value)} />
            </div>
            <div className={classes.firstGrid} style={{textAlign:'left'}}>
              <h3>Province:</h3><input className={classes.input} type='text' value={provinsi || ''} onChange={e => setProvinsi(e.target.value)} />
            </div>
            <div className={classes.firstGrid} style={{textAlign:'left'}}>
              <h3>City / District:</h3><input className={classes.input} type='text' value={kotaKabupaten || ''} onChange={e => setKotaKabupaten(e.target.value)} />
            </div>
            <div className={classes.firstGrid} style={{textAlign:'left'}}>
              <h3>Sub-distric:</h3><input className={classes.input} type='text' value={kecamatan || ''} onChange={e => setKecamatan(e.target.value)} />
            </div>
            <div className={classes.firstGrid} style={{textAlign:'left'}}>
              <h3>Postal Code:</h3><input className={classes.input} type='number' value={postalCode || ''} onChange={e => { if (e.target.value.length <=5) setPostalCode(e.target.value)}} />
            </div>
            <div className={classes.firstGrid} style={{textAlign:'left'}}>
              <h3>Contact Number:</h3><input className={classes.input} type='number' value={contactNumber || ''} onChange={e => { if (e.target.value.length <= 16) setContactNumber(e.target.value)}} />
            </div>
          </div>
          <div className={classes.column}>
          </div>
        </form>
        <button onClick={toggleSize} className={classes.accordionToggle}>
          <h1>Size Preferences</h1>
          <h1>{(!sizeVisibility) ? '+' : '-'}</h1>
        </button>
        <form className={classes.firstGrids} style={{display: (!sizeVisibility) ? 'none' : ''}} onSubmit={handleSizeSubmit}>
          <div className={classes.firstGrid}>
            &nbsp;
          </div>
          <div className={classes.column}>
            <div className={classes.firstGrid} style={{textAlign:'left'}}>
              <h3>Panjang Jas:</h3><input className={classes.input} type='number' disabled={useStandardSize} value={panjangJas || 0} onChange={e => { if (e.target.value.length <= 3) setPanjangJas(e.target.value)}} />
            </div>
            <div className={classes.firstGrid} style={{textAlign:'left'}}>
              <h3>Lebar Bahu:</h3><input className={classes.input} type='number' disabled={useStandardSize} value={lebarBahu || 0} onChange={e => { if (e.target.value.length <= 3) setLebarBahu(e.target.value)}} />
            </div>
            <div className={classes.firstGrid} style={{textAlign:'left'}}>
              <h3>Panjang Tangan:</h3><input className={classes.input} type='number' disabled={useStandardSize} value={panjangTangan || 0} onChange={e => { if (e.target.value.length <= 3) setPanjangTangan(e.target.value)}} />
            </div>
            <div className={classes.firstGrid} style={{textAlign:'left'}}>
              <h3>Lingkar Dada:</h3><input className={classes.input} type='number' disabled={useStandardSize} value={lingkarDada || 0} onChange={e => { if (e.target.value.length <= 3) setLingkarDada(e.target.value)}} />
            </div>
            <div className={classes.firstGrid} style={{textAlign:'left'}}>
              <h3>Lingkar Perut:</h3><input className={classes.input} type='number' disabled={useStandardSize} value={lingkarPerut || 0} onChange={e => { if (e.target.value.length <= 3) setLingkarPerut(e.target.value)}} />
            </div>
            <div className={classes.firstGrid} style={{textAlign:'left'}}>
              <h3>Lingkar Pinggul:</h3><input className={classes.input} type='number' disabled={useStandardSize} value={lingkarPinggul || 0} onChange={e => { if (e.target.value.length <= 3) setLingkarPinggul(e.target.value)}} />
            </div>
            <div className={classes.firstGrid} style={{textAlign:'left'}}>
              <h3>Lingkar Ketiak:</h3><input className={classes.input} type='number' disabled={useStandardSize} value={lingkarKetiak || 0} onChange={e => { if (e.target.value.length <= 3) setLingkarKetiak(e.target.value)}} />
            </div>
            <div className={classes.firstGrid} style={{textAlign:'left'}}>
              <h3>Lingkar Lengan Atas:</h3><input className={classes.input} type='number' disabled={useStandardSize} value={lingkarLenganAtas || 0} onChange={e => { if (e.target.value.length <= 3) setLingkarLenganAtas(e.target.value)}} />
            </div>
            <div className={classes.firstGrid} style={{textAlign:'left'}}>
              <h3>Lingkar Pergelangan Tangan:</h3><input className={classes.input} type='number' disabled={useStandardSize} value={lingkarPergelanganTangan || 0} onChange={e => { if (e.target.value.length <= 3) setLingkarPergelanganTangan(e.target.value)}} />
            </div>
            <div className={classes.firstGrid} style={{textAlign:'left'}}>
              <h3>Lebar Dada Depan:</h3><input className={classes.input} type='number' disabled={useStandardSize} value={lebarDadaDepan || 0} onChange={e => { if (e.target.value.length <= 3) setLebarDadaDepan(e.target.value)}} />
            </div>
            <div className={classes.firstGrid} style={{textAlign:'left'}}>
              <h3>Lebar Dada Belakang:</h3><input className={classes.input} type='number' disabled={useStandardSize} value={lebarDadaBelakang || 0} onChange={e => { if (e.target.value.length <= 3) setLebarDadaBelakang(e.target.value)}} />
            </div>
            
          </div>
          <div className={classes.column}>
            <div className={classes.firstGrid} style={{textAlign:'left'}}>
              <select onChange={e => setStandardSize(e.target.value)} disabled={!useStandardSize} value={standardSize}>
                <option value={0}>Choose Standard Size</option>
                <option value={Constants.STANDARD_SIZE_S}>S</option>
                <option value={Constants.STANDARD_SIZE_M}>M</option>
                <option value={Constants.STANDARD_SIZE_L}>L</option>
                <option value={Constants.STANDARD_SIZE_XL}>XL</option>
                <option value={Constants.STANDARD_SIZE_XXL}>XXL</option>
              </select>
            </div>
            <div className={classes.checkboxGrid} style={{textAlign:'left'}}>
              <input className={classes.input} type='checkbox' checked={useStandardSize}  onChange={e => setUseStandardSize(e.target.checked)}/><h3>Use Standard Size</h3>
            </div>
            <div className={classes.firstGrid} style={{textAlign:'left'}}>
              <h3>Tinggi Badan:</h3><input className={classes.input} type='number' disabled={useStandardSize} value={tinggiBadan || 0} onChange={e => { if (e.target.value.length <= 3) setTinggiBadan(e.target.value)}} />
            </div>
            <div className={classes.firstGrid} style={{textAlign:'left'}}>
              <h3>Berat Badan:</h3><input className={classes.input} type='number' disabled={useStandardSize} value={beratBadan || 0} onChange={e => { if (e.target.value.length <= 3) setBeratBadan(e.target.value)}} />
            </div>
            <div className={classes.firstGrid} style={{textAlign:'left'}}>
              <h3>Panjang Celana:</h3><input className={classes.input} type='number' disabled={useStandardSize} value={panjangCelana || 0} onChange={e => { if (e.target.value.length <= 3) setPanjangCelana(e.target.value)}} />
            </div>
            <div className={classes.firstGrid} style={{textAlign:'left'}}>
              <h3>Lingkar Pinggang:</h3><input className={classes.input} type='number' disabled={useStandardSize} value={lingkarPinggang || 0} onChange={e => { if (e.target.value.length <= 3) setLingkarPinggang(e.target.value)}} />
            </div>
            <div className={classes.firstGrid} style={{textAlign:'left'}}>
              <h3>Panjang Selangkangan:</h3><input className={classes.input} type='number' disabled={useStandardSize} value={panjangSelangkangan || 0} onChange={e => { if (e.target.value.length <= 3) setPanjangSelangkangan(e.target.value)}} />
            </div>
            <div className={classes.firstGrid} style={{textAlign:'left'}}>
              <h3>Lingkar Paha:</h3><input className={classes.input} type='number' disabled={useStandardSize} value={lingkarPaha || 0} onChange={e => { if (e.target.value.length <= 3) setLingkarPaha(e.target.value)}} />
            </div>
            <div className={classes.firstGrid} style={{textAlign:'left'}}>
              <h3>Lingkar Lutut:</h3><input className={classes.input} type='number' disabled={useStandardSize} value={lingkarLutut || 0} onChange={e => { if (e.target.value.length <= 3) setLingkarLutut(e.target.value)}} />
            </div>

            <br />
            <input type="submit" value="Save Size" className={classes.saveProfile} />
          </div>
          <div className={classes.column}>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Accounts;
