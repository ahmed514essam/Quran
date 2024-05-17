import React from "react";
import styles from "./Footer.module.css";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const [ t , i18n ] = useTranslation();
  const navigate = useNavigate();
  const phoneNumber = '01094461846'; 
  const message = 'Hello!';
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

const gotoabout = () => {
  navigate("/about")
}
const gotoprivacy = () => {
  navigate("/contactus")
}
const gotoacc = () => {
  navigate("/account")
}
const gotolibrary = () => {
  navigate("/library")
}
const gotocontact = () => {
  navigate("/contactus")
}



const radiogoo = () => {
  navigate("/radio")
}
const talimgoo = () => {
  navigate("/taliameldi")
}
const azkargoo = () => {
  navigate("/Azkary")
}
const gosectionqura = () => {
  navigate("/")
}


  return (
    <footer className={styles.footer}>
      <div className={styles.end}>
        <div className={styles.awldiv}>
          <div className={styles.firs}>
            <span className={styles.imgessss}>
              <img src="icons/icon-removebg-preview.png" />
            </span>
            <p>
              M<span className={styles.akra}>us</span>lim
            </p>
          </div>
          <p className={styles.awp}>
            Welcome to my Islamic community, I present to you here many features
            related to faith, it was created by Engineer Ahmed Essam El-Sayed,
            and I will be glad to contact me
          </p>
          <div className={styles.socialico}>
          <a target="_blank" href="https://www.facebook.com/ahmed.egyptian.9889">
            <span >
              <FontAwesomeIcon icon={faFacebookF} />
            </span>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/ahmed-essam-618055230/">
            <span>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </span>
            </a>
            <a target="_blank" href="https://twitter.com/?lang=en">
            <span>
              <FontAwesomeIcon icon={faTwitter} />
            </span>
            </a>
           <a >

           <span onClick={handleClick}>
              <FontAwesomeIcon icon={faWhatsapp} />
            </span>
           </a>
         
          </div>
        </div>

        <div className={styles.quicklinkone}>
          <h2>Quick links</h2>
          <ul typeof="arrow">
            <li onClick={gosectionqura}> {t('quran')}</li>
            <li onClick={azkargoo}> {t('azkar')}</li>
            <li onClick={radiogoo}> {t('radio')}</li>
            <li onClick={talimgoo}> {t('talim')}</li>
          </ul>
        </div>

        <div className={styles.quicklinkone}>
          <h2>Quick links</h2>
          <ul typeof="arrow">
            <li onClick={gotoabout}> About</li>
            <li onClick={gotoprivacy}>Privacy Policy</li>
            <li onClick={gotoacc}>Account</li>
            <li onClick={gotolibrary}> Library</li>
          </ul>
        </div>

        <div className={styles.divforlastinput}>
          <h2>Newsletter</h2>
          <p>You will be notified when something new will be appear</p>
          <span className={styles.spann}>
            {/* <input /> */}
            <button onClick={gotocontact}>Contact Me</button>
          </span>
        </div>
      </div>
      <hr />
      <span className={styles.spaP}>
      <p className={styles.pllast}>© Copyright 2024 | Muslim-by Ahmed Essam | All right reserved.</p>
      </span>
    </footer>
  );
}
