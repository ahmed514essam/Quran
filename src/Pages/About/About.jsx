import React from 'react'
import sty from "./About.module.css"
import { useTranslation } from 'react-i18next';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';
export default function About() {
  const [ t , i18n ] = useTranslation();
  return (
    <>
    <section className={sty.main}>
        <h1>{t('about')} </h1>
        <p> {t('headab')}</p>
        <img src="imges/oneabout.jfif" class="img-fluid" alt="..."></img>
        <p > {t('onet')}  </p>
        <img src="imges/twoabout.jfif" class="img-fluid" alt="..."></img>
   <p>{t('twot')}</p>
   <p> {t('threet')}</p>
   <p> {t('fourt')}</p>  
   <p> {t('fivet')}</p>  
    <p> {t('sext')}</p>
    <p> {t('sevent')}</p>   
   
    </section>
    <ScrollToTopButton />
    </>
  )
}
