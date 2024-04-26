import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.end}>
        <div className={styles.awldiv}>
          <div className={styles.firs}>
            <span className={styles.imgessss}>
              <img src="/public/icons/icon-removebg-preview.png" />
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
            <span>
              <FontAwesomeIcon icon={faFacebookF} />
            </span>
            <span>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </span>
            <span>
              <FontAwesomeIcon icon={faTwitter} />
            </span>
            <span>
              <FontAwesomeIcon icon={faWhatsapp} />
            </span>
          </div>
        </div>

        <div className={styles.quicklinkone}>
          <h2>Quick links</h2>
          <ul typeof="arrow">
            <li>القرأن الكريم</li>
            <li>الأذكار</li>
            <li>الراديو</li>
            <li>تعليم الاسلام</li>
          </ul>
        </div>

        <div className={styles.quicklinkone}>
          <h2>Quick links</h2>
          <ul typeof="arrow">
            <li> About</li>
            <li>Privacy Policy</li>
            <li>Account</li>
            <li> Library</li>
          </ul>
        </div>

        <div className={styles.divforlastinput}>
          <h2>Newsletter</h2>
          <p>You will be notified when something new will be appear</p>
          <span className={styles.spann}>
            {/* <input /> */}
            <button>Contact Me</button>
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
