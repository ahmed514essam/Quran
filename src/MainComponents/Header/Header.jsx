import React from 'react'
import "./haed.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars ,faEnvelope ,faUser ,faGlobe ,faHouse ,faMicrophone} from '@fortawesome/free-solid-svg-icons';
export default function Header() {
  return (
    <nav className="mainbav navbar navbar-expand-lg  ">
    <div className="container-fluid">
    <div className="adaf">
      <Link  className="dangereioust text-decoration-none fw-bold" href="#">Quran</Link>
   


      <li className="nav-item dropdown">
            <Link className="lisstye nav-link toggle "  role="button" data-bs-toggle="dropdown"  aria-expanded="false">
            <FontAwesomeIcon icon={faBars} />
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" href="#">حسابي</Link></li>
              <li><Link className="dropdown-item" href="#">أذكاري</Link></li>
              <li><Link className="dropdown-item" href="#">الاستماع</Link></li>
              <li><Link className="dropdown-item" href="#">أحاديث نبوية</Link></li>
              <li><hr className="dropdown-divider"/></li>
              <li><Link className="dropdown-item" href="#">الصفحة الرئيسية</Link></li>
            </ul>
          </li>
</div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="linkschouse nav-link " aria-current="page" href="#">
            <FontAwesomeIcon icon={faHouse} /> 
            </Link>
          </li>
          <li className="nav-item">
            <Link className="linkschouse nav-link" href="#"><FontAwesomeIcon icon={faUser} /> </Link>
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
        </ul>
     
      </div>
    </div>
  </nav>
  )
}
