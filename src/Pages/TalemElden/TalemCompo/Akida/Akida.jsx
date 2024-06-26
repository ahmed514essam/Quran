import React from "react";
import "./Akida.css";
import { useTranslation } from 'react-i18next';

export default function Akida() {
  const [t, i18n] = useTranslation();
  return (
    <section className="sectionAbadatAll">
      <div className="divhead">
        <h2>{t('ht')}</h2>
        <p>{t('text12')}</p>
      </div>

      <div className="divcontentPage">
        <div className="card">
          <img
            src="/imges/shadatin.jpg"
            className="cardimges card-img-top"
            alt="Shadatin"
          />
          <div className="card-body">
            <h3>{t('shadten')}</h3>
            <p className="card-text">{t('text13')}</p>
          </div>
        </div>
        <div className="card">
          <img
            src="/imges/ayman.jpg"
            className="cardimges card-img-top"
            alt="Ayman"
          />
          <div className="card-body">
            <h3>{t('ayman')}</h3>
            <p className="card-text">{t('text14')}</p>
          </div>
        </div>
        <div className="card">
          <img
            src="/imges/abada.jpg"
            className="cardimges card-img-top"
            alt="Abada"
          />
          <div className="card-body">
            <h3>{t('at')}</h3>
            <p className="card-text">{t('text15')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
