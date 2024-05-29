import React from "react";
import "./Abadat.css";
import { useTranslation } from 'react-i18next';

export default function Abadat() {
  const [ t , i18n ] = useTranslation();
  return (
    <section className="sectionAbadatAll">
      <div className="divhead">
        <h2>{t('at')}</h2>
        <p>{t('text1')}</p>
      </div>

      <div className="divcontentPage">
        <div className="card">
          <img
            src="/imges/tahara.jpeg"
            className="cardimges card-img-top"
            alt="Tahara"
          />
          <div className="card-body">
            <h3>{t('thara')}</h3>
            <p className="card-text">{t('text2')}</p>
          </div>
        </div>
        <div className="card">
          <img
            src="/imges/saalaa.jpeg"
            className="cardimges card-img-top"
            alt="Sala"
          />
          <div className="card-body">
            <h3>{t('sala')}</h3>
            <p className="card-text">{t('text3')}</p>
          </div>
        </div>
        <div className="card">
          <img
            src="/imges/zakaa.jpeg"
            className="cardimges card-img-top"
            alt="Zaka"
          />
          <div className="card-body">
            <h3>{t('zakaa')}</h3>
            <p className="card-text">{t('text4')}</p>
          </div>
        </div>
        <div className="card">
          <img
            src="/imges/saom.jpeg"
            className="cardimges card-img-top"
            alt="Saom"
          />
          <div className="card-body">
            <h3>{t('saom')}</h3>
            <p className="card-text">{t('text5')}</p>
          </div>
        </div>
        <div className="card">
          <img
            src="/imges/ag.jpeg"
            className="cardimges card-img-top"
            alt="Ag"
          />
          <div className="card-body">
            <h3>{t('hg')}</h3>
            <p className="card-text">{t('text6')}</p>
          </div>
        </div>
        <div className="card">
          <img
            src="/imges/die.jpg"
            className="cardimges card-img-top"
            alt="Die"
          />
          <div className="card-body">
            <h3>{t('die')}</h3>
            <p className="card-text">{t('text7')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
