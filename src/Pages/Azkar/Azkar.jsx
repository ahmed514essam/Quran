import React from 'react'
import { useNavigate } from "react-router-dom";
import "./Azkar.css" ;
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRightLong } from '@fortawesome/free-solid-svg-icons';
export default function Azkar() {
  const [ t , i18n ] = useTranslation();
  const navigate = useNavigate();
const naviToazkarsabah = ()=>{
  navigate("/azkarelsabah")
}
const naviToazkarmasa = ()=>{
  navigate("/azkarelmasaa")
}
const naviToazkarsla = ()=>{
  navigate("/azkarsalaa")
}

  return (
    <section className="sectionContetAzkarAll">

<h1>{t('azkar')}</h1>

<div className="cotainer w-100 text-center  col-lg-3 col-md-2 col-sm-1">


<div onClick={naviToazkarsabah} className="figure">
  <img src="imges/morning.avif" className="figure-img img-fluid rounded " alt="uh" />
  <figcaption className="figure-caption text-center ">
  
  <span className="spanAddressAzkar">{t('sabah')}</span>
  <FontAwesomeIcon className="iconarrowAzkar" icon={faRightLong} />

  </figcaption>
</div>


<div onClick={naviToazkarmasa} className="figure">
  <img src="imges/night.avif" className="figure-img img-fluid rounded " alt="uh" />
  <figcaption className="figure-caption text-center ">
 
  <span className="spanAddressAzkar"> {t('masaa')}</span>
  <FontAwesomeIcon className="iconarrowAzkar" icon={faRightLong} />

  </figcaption>
</div>

<div onClick={naviToazkarsla} className="figure">
  <img src="imges/salah.jpg" className="figure-img img-fluid rounded " alt="uh" />
  <figcaption className="figure-caption text-center "> 
 
  <span className="spanAddressAzkar">  {t('salah')}</span>
  <FontAwesomeIcon className="iconarrowAzkar" icon={faRightLong} />
 

  </figcaption>
</div>
</div>

    </section>
  )
}
