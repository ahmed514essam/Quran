import React from "react";
import "./haed.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars ,
  
  
  faEnvelope,
  faUser,
  faGlobe,
  faHouse,
  faMagnifyingGlass,
  faGear,
  faMessage ,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <>
      <nav className="mainbav navbar navbar-expand-lg navbar navbar-expand-lg navbar-light  ">
        <div className="container-fluid">
          <div className="adaf">
            <Link
              className="dangereioust text-decoration-none fw-bold"
              href="#"
            >
              Quran
            </Link>

            <li className="nav-item dropdown ">
              <Link
                className="lisstye nav-link toggle "
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FontAwesomeIcon className="ters" icon={faGear} />
              
                <FontAwesomeIcon className="lists" icon={faBars} />
              </Link>
              <ul className="dropdown-menu">
              <span className="listmain">
                <li>
                  <Link className="dropdown-item" href="#">
                    حسابي
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    أذكاري
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    الاستماع
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    أحاديث نبوية
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    الصفحة الرئيسية
                  </Link>
                </li>
</span>
<span className="listsup">

           
                <li>
                  <Link className="dropdown-item" href="#">
                  <FontAwesomeIcon className="coloricone" icon={faUser} />
                  <span className="space">     حسابي </span>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                  <FontAwesomeIcon className="coloricones" icon={faGlobe} />
                  <span className="space">  اللغة </span>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                  <FontAwesomeIcon className="coloriconee" icon={faMessage} />
                    <span className="space"> تواصل معنا </span>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
            
                <li>
                  <Link className="dropdown-item" href="#">
                  <FontAwesomeIcon className="coloricon" icon={faHouse} />
                  <span className="space">  الصفحة الرئيسية </span>
                  </Link>
                </li>
</span>

              </ul>
            </li>
          </div>
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
                  href="#"
                >
                  <FontAwesomeIcon icon={faHouse} />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="linkschouse nav-link" href="#">
                  <FontAwesomeIcon icon={faUser} />{" "}
                </Link>
              </li>

              <li className="nav-item">
                <Link className="linkschouse nav-link" href="#">
                  <FontAwesomeIcon icon={faGlobe} />
                </Link>
              </li>

              <li className="nav-item">
                <Link className="linkschouse nav-link" href="#">
                  <FontAwesomeIcon icon={faEnvelope} />
                </Link>
              </li>
</span>

              
<span className="mainheads pt-3">

<li className="nav-item">
                <Link className="linkschouse nav-link" href="#">
                <div className="imgList">
                  <img src="/public/list imges/home-removebg-preview.png"/>
                </div>
                <span className="nameOfList">الصفحة الرئيسية</span>
                
                </Link>
              </li>

              <li className="nav-item">
                <Link className="linkschouse nav-link" href="#">
                <div className="imgList">
                  <img src="/public/list imges/account-removebg-preview.png"/>
                </div>
                <span className="nameOfList">حسابي</span>
                 
                </Link>
              </li>

              <li className="nav-item">
                <Link className="linkschouse nav-link" href="#">
                <div className="imgList">
                  <img src="/public/list imges/quran-removebg-preview.png"/>
                </div>
                <span className="nameOfList">القرأن الكريم</span>
                
                </Link>
              </li>

              <li className="nav-item">
                <Link className="linkschouse nav-link" href="#">
                <div className="imgList">
                  <img src="/public/list imges/azkary-removebg-preview.png"/>
                </div>
                <span className="nameOfList">الأذكار</span>
               
                </Link>
              </li>

              <li className="nav-item">
                <Link className="linkschouse nav-link" href="#">
                <div className="imgList">
                  <img src="/public/list imges/radio-removebg-preview.png"/>
                </div>
                <span className="nameOfList">الراديو</span>
                 
                </Link>
              </li>

              <li className="nav-item">
                <Link className="linkschouse nav-link" href="#">
                <div className="imgList">
                  <img src="/public/list imges/islam-removebg-preview.png"/>
                </div>
                <span className="nameOfList">تعاليم الاسلام</span>
            
                </Link>
              </li>
</span>
            </ul>

            <form className=" forminput d-flex " role="search">
            <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
              <input
                className="form-control me-2"
                type="search"
                placeholder="  ماذا تريد ان تقرأ"
                aria-label="Search"
              />
            </form>
          </div>

{/* ================================================================================== */}



        </div>
      </nav>
    </>
  );
}
