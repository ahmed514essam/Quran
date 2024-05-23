import React from "react";
import "./Abadat.css";
import { useTranslation } from 'react-i18next';
export default function Abadat() {
  const [ t , i18n ] = useTranslation();
  return (
    <section className="sectionAbadatAll">
      <div className="divhead">
        <h2>{t('at')}</h2>
        <p>
        {t('text1')}
        </p>
      </div>

      <div className="divcontentPage">
        <div class="card ">
          <img
            src="/public/imges/tahara.jpeg"
            className="cardimges card-img-top"
          />
          <div className="card-body">
          <h3>{t('thara')}</h3>
            <p className="card-text">
            {t('text2')}            </p>
          </div>
        </div>
        <div class="card ">
          <img
            src="/public/imges/saalaa.jpeg"
            className="cardimges card-img-top"
          />
          <div className="card-body">
          <h3>{t('sala')}</h3>
            <p className="card-text">
            {t('text3')}            </p>
          </div>
        </div>
        <div class="card ">
          <img
            src="/public/imges/zakaa.jpeg"
            className="cardimges card-img-top"
          />
          <div className="card-body">
          <h3>{t('zakaa')}</h3>
            <p className="card-text">
            {t('text4')}            </p>
          </div>
        </div>
        <div class="card ">
          <img
            src="/public/imges/saom.jpeg"
            className="cardimges card-img-top"
          />
          <div className="card-body">
          <h3>{t('saom')}</h3>
            <p className="card-text">
            {t('text5')}            </p>
          </div>
        </div>
        <div class="card ">
          <img
            src="/public/imges/ag.jpeg"
            className="cardimges card-img-top"
          />
          <div className="card-body ">
          <h3>{t('hg')}</h3>
            <p className="card-text">
        
            {t('text6')}            </p>
          </div>
        </div>
        <div class="card ">
          <img
            src="/public/imges/die.jpg"
            className="cardimges card-img-top"
          />
          <div className="card-body">
          <h3> {t('die')}</h3>
            <p className="card-text">
            {t('text7')}            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
