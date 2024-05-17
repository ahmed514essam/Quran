import React, { useEffect, useState } from 'react';
import "./TalemElden.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export default function TalemElden() {
  const [ t , i18n ] = useTranslation();
  const [ tr , setTr] = useState(false);
  function check() {
    if (i18n === 'en') {
      setTr(true)
    }else{
      setTr(false)
    }
  }
  useEffect(() => {
    check()
  },[])

const navicate = useNavigate();

const goToabadat = () => {
  navicate("/taliameldi/abadat")
}
const goToquran = () => {
  navicate("/taliameldi/qurakarim")
}



const goTomonasbat = () => {
  navicate("/taliameldi/moasbat")
}

const goToakida = () => {
  navicate("/taliameldi/akida")
}






  return (
    <>
      <section className="sectiontalimdiall">
        <h1> {t('tit')}</h1>

        <div className="cotainere w-100 text-center row">
          <div onClick={goToabadat} className="figuree col-lg-4 col-md-6 col-sm-12">
            <img src="imges/salah.jpg" className="figure-img img-fluid rounded" alt="uh" />
            <figcaption className="figure-caption text-center">
              <span className="spanAddressAzkare"> {t('at')}</span>
              <FontAwesomeIcon className="iconarrowAzkare" icon={faRightLong} />
            </figcaption>
          </div>

          <div onClick={goTomonasbat} className="figuree col-lg-4 col-md-6 col-sm-12">
            <img src="imges/mnasbat.jpg" className="figure-img img-fluid rounded" alt="uh" />
            <figcaption className="figure-caption text-center">
              <span className="spanAddressAzkare">{t('mt')}</span>
              <FontAwesomeIcon className="iconarrowAzkare" icon={faRightLong} />
            </figcaption>
          </div>

          <div onClick={goToakida} className="figuree col-lg-4 col-md-6 col-sm-12">
            <img src="imges/akidaa.jpg" className="figure-img img-fluid rounded" alt="uh" />
            <figcaption className="figure-caption text-center">
              <span className="spanAddressAzkare">{t('ht')}</span>
              <FontAwesomeIcon className="iconarrowAzkare" icon={faRightLong} />
            </figcaption>
          </div>

          <div onClick={goToquran} className="figuree col-lg-4 col-md-6 col-sm-12">
            <img src="imges/qurann.jpg" className="figure-img img-fluid rounded" alt="uh" />
            <figcaption className="figure-caption text-center">
              <span className="spanAddressAzkare"> {t('qt')}</span>
              <FontAwesomeIcon className="iconarrowAzkare" icon={faRightLong} />
            </figcaption>
          </div>

    
        </div>
      </section>

      <section className="sectionwordsislam">
        <h2> {t('tt')}</h2>

        <div className="divAllPara">
<p> {t('td')}.</p>

<p>{t('one')}</p>
<p>{t('two')}</p>
<p>{t('three')}</p>
<p>{t('four')}</p>
<p>{t('eleven')}</p>
<p>{t('sex')}</p>
<p>{t('seven')}</p>
<p>{t('eight')}</p>
<p>{t('nine')}</p>
<p>{t('ten')}</p>
<p>{t('fourten')}</p>
<p>{t('fiveten')}</p>
<p>{t('twinty')}</p>
<p>{t('tone')}</p>
<p>{t('ttwo')}</p>
<p>{t('tthree')}</p>
<p>{t('nineten')}</p>
<p>{t('eightten')}</p>
<p>{t('seventen')}</p>
<p>{t('sexten')}</p>
        </div>
      </section>
    </>
  );
}
