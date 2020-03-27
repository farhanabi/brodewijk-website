import React, {useEffect, useState} from 'react';
// import { useEffect, useState, useRef } from 'react';
import classes from './Order.css';
import Header from '../../Components/Header/Header';
// import Carousel from '../component/BookCarousel';
import Footer from '../../Components/Footer/Footer';

import Authorization from "../../Shared/Authorization";
import APIBuilder from "../../Shared/APIBuilder";
import Constants from "../../Shared/Constants";
import History from "../../Shared/History";

function Order() {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [address, setAddress] = useState()
  const [provinsi, setProvinsi] = useState()
  const [kotaKabupaten, setKotaKabupaten] = useState()
  const [kecamatan, setKecamatan] = useState()
  const [postalCode, setPostalCode] = useState()
  const [contactNumber, setContactNumber] = useState()

  const [fabricID, setFabricID] = useState(0)
  const [liningID, setLiningID] = useState(0)
  const [fitType, setFitType] = useState(0)
  const [canvasType, setCanvasType] = useState(0)
  const [shoulderType, setShoulderType] = useState(0)
  const [lapelType, setLapelType] = useState(0)
  const [chestPocketType, setChestPocketType] = useState(0)
  const [buttonType, setButtonType] = useState(0)
  const [pocketType, setPocketType] = useState(0)
  const [ventType, setVentType] = useState(0)

  const [isUsingVest, setIsUsingVest] = useState(false)
  const [isUsingShirt, setIsUsingShirt] = useState(false)
  const [isUsingPants, setIsUsingPants] = useState(false)
  const [isUsingTie, setIsUsingTie] = useState(false)

  const [monogram, setMonogram] = useState()
  const [additional, setAdditional] = useState()

  const [isUsingPersonalMeasurement, setIsUsingPersonalMeasurement] = useState(false)

  
  
}

export default Order;
