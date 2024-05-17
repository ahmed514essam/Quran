import React from "react";
import "./haed.css";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars ,
  faRadio,
  faPersonPraying,
  faEarthAmericas,
  faMosque,
  faBookQuran,
  faEnvelope,
  faUser,
  faGlobe,
  faHouse,
  faMagnifyingGlass,
  faGear,
  faMessage ,
} from "@fortawesome/free-solid-svg-icons";
import InputTy from "./InputTy/InputTy";

export default function Header() {
  const [ t , i18n ] = useTranslation();
  const navigate = useNavigate();

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
    navigate("/azkargoo")
  }
  const gosectionqura = () => {
    navigate("/")
  }
  return (
    <>
      <nav className="mainbav navbar navbar-expand-lg navbar navbar-expand-lg navbar-light  ">
        <div className="container-fluid">
          <div className="adaf">
            <Link
              className="dangereioust text-decoration-none fw-bold"
              href="#"
            >
              M<span className="collorSpanHead">us</span>lim
            </Link>

            <li className="nav-item dropdown ">
              <Link
                className="lisstye nav-link toggle "
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >

{/* ============================================================== */}

                <FontAwesomeIcon className="ters" icon={faGear} />
              
                <FontAwesomeIcon className="lists" icon={faBars} />
              </Link>
              <ul className="dropdown-menu">
              <span className="listmain">
                <li>
                  <Link className="dropdown-item" to="/account">
                  {t('account')}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Azkary">
                    {t('azkar')}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="radio">
                  {t('radio')}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="about">
                  {t('about')} 
                  </Link>
                </li>
                <li>
                
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                  {t('home')}
                  </Link>
                </li>
</span>
<span className="listsup">

           
                <li>
                  <Link className="dropdown-item" to="/account">
                  <FontAwesomeIcon className="coloricone" icon={faUser} />
                  <span className="space">         {t('account')} </span>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/about">
                  <FontAwesomeIcon className="coloriconee" icon={faMessage} />
                    <span className="space"> {t('about')}</span>
                  </Link>
                </li>
                {/* <li className="text-light nav-item dropdown ">
              <Link
                className="linkschouse  lisstye text-light nav-link toggle "
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >

<FontAwesomeIcon className="coloricones" icon={faGlobe} />
<span className="space">  اللغة </span>
              </Link>
              <ul className="dropdown-menu">
              
                <li>
                  <Link className="dropdown-item" >
                    Arabic
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" >
                    English
                  </Link>
                </li>
             </ul>
             </li> */}
              
                <li>
                  <Link className="dropdown-item" to="/contactus">
                  <FontAwesomeIcon className="coloriconee" icon={faMessage} />
                    <span className="space"> {t('tosal')}  </span>
                  </Link>
                </li>
                <li>
                  <br/>
                </li>
            
                <li>
                  <Link className="dropdown-item" to="/">
                  <FontAwesomeIcon className="coloricon" icon={faHouse} />
                  <span className="space">       {t('home')} </span>
                  </Link>
                </li>
</span>

              </ul>
            </li>
          </div>



          <li className=" usuallye text-light nav-item dropdown ps-3">
              <Link
                className="linkschouse  lisstye text-light nav-link toggle "
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >

<FontAwesomeIcon icon={faEarthAmericas} />
              </Link>
              <ul className="dropdown-menu">
              
                <li>
                  <Link onClick={() => {
                    i18n.changeLanguage('ar')
                  }} className="dropdown-item" >
                    Arabic
                  </Link>
                </li>
                <li>
                  <Link onClick={() => {
                    i18n.changeLanguage('en')
                  }} className="dropdown-item" >
                    English
                  </Link>
                </li>
             </ul>
             </li>

          <button
          className="navbar-toggler collapsed ms-auto" 
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
    

          <span className="toggler-icon top-bar"></span>
        <span className="toggler-icon middle-bar"></span>
        <span className="toggler-icon bottom-bar"></span>
        </button>
         



<div className="  collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav mx-auto mb-2 mb-lg-0">
<span className="sectiosup">
              <li className="nav-item">
                <Link
                  className="linkschouse nav-link "
                  aria-current="page"
                 to="/"
                >
                  <FontAwesomeIcon icon={faHouse} />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="linkschouse nav-link " to="/account">
                  <FontAwesomeIcon icon={faUser} />{" "}
                </Link>
              </li>

            
              <li className="text-light nav-item dropdown ">
              <Link
                className="linkschouse  lisstye text-light nav-link toggle "
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >

                <FontAwesomeIcon icon={faGlobe} />
              </Link>
              <ul className="dropdown-menu">
              
                <li>
                  <Link onClick={() => {
                    i18n.changeLanguage('ar')
                  }} className="dropdown-item" >
                    Arabic
                  </Link>
                </li>
                <li>
                  <Link onClick={() => {
                    i18n.changeLanguage('en')
                  }} className="dropdown-item" >
                    English
                  </Link>
                </li>
             </ul>
             </li>
              

              <li className="nav-item">
                <Link className="linkschouse nav-link" t
              to="/contactus">
                  <FontAwesomeIcon icon={faEnvelope} />
                </Link>
              </li>
</span>

              
<span className="mainheads pt-2">

<li className="hgfthffhh nav-item">
                <Link className="linkschouse nav-link" to="/">
                <div className="imgListr">
                <FontAwesomeIcon className="fontawsemIconListToggleSmallone" icon={faHouse} />
                </div>
                <span className="nameOfList">     {t('home')}</span>
                
                </Link>
              </li>

              <li className="hgfthffhh nav-item">
                <Link className="linkschouse nav-link" to="/account">
                <div className="imgListr">
                <FontAwesomeIcon className="fontawsemIconListToggleSmallacc" icon={faUser} />
                </div>
                <span className="nameOfList">    {t('account')}</span>
                 
                </Link>
              </li>

              <li className="hgfthffhh nav-item">
                <Link className="linkschouse nav-link" to="/">
                <div className="imgListr">
                <FontAwesomeIcon className="fontawsemIconListToggleSmallqu" icon={faBookQuran} />
                </div>
                <span className="nameOfList">    {t('quran')} </span>
                
                </Link>
              </li>

              <li className="hgfthffhh nav-item">
                <Link className="linkschouse nav-link" to="/Azkary">
                <div className="imgListr">
                <FontAwesomeIcon className="fontawsemIconListToggleSmallzz" icon={faPersonPraying} />
                </div>
                <span className="nameOfList">    {t('azkar')}</span>
               
                </Link>
              </li>

              <li className="hgfthffhh nav-item">
                <Link className="linkschouse nav-link" to="/radio">
                <div className="imgListr">
                <FontAwesomeIcon className="fontawsemIconListToggleSmallra" icon={faRadio} />
                </div>
                <span className="nameOfList">    {t('radio')}</span>
                 
                </Link>
              </li>

              <li className="hgfthffhh nav-item">
                <Link className="linkschouse nav-link" to="/taliameldi">
                <div className="imgListr">
                
                <FontAwesomeIcon className="fontawsemIconListToggleSmallta" icon={faMosque} />
                </div>
                <span className="nameOfList">     {t('talim')}</span>
            
                </Link>
              </li>
</span>
            </ul>

      <InputTy />
          </div>

{/* ================================================================================== */}



        </div>
      </nav>







    </>
  );
}
