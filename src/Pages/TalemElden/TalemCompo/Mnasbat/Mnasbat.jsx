import React from 'react';
import "./Mnasbat.css";
import { useTranslation } from 'react-i18next';

export default function Mnasbat() {
  const [t, i18n] = useTranslation();
  return (
    <section className="sectionAbadatAll">
      <div className="divhead">
        <h2>{t('mt')}</h2>
        <p>{t('text8')}</p>
      </div>

      <div className="divcontentPage">
        <div className="card">
          <img
            src="/imges/winter.jpeg"
            className="cardimges card-img-top"
            alt="Winter"
          />
          <div className="card-body">
            <h3>{t('winterSay')}</h3>
            <p className="card-text">{t('text9')}</p>
          </div>
        </div>
        <div className="card">
          <img
            src="/imges/fun.jpg"
            className="cardimges card-img-top"
            alt="Fun"
          />
          <div className="card-body">
            <h3>{t('tours')}</h3>
            <p className="card-text">{t('text10')}</p>
          </div>
        </div>
        <div className="card">
          <img
            src="/imges/dese.jpg"
            className="cardimges card-img-top"
            alt="Desert"
          />
          <div className="card-body">
            <h3>{t('amrad')}</h3>
            <p className="card-text">{t('text11')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
