import React from 'react'
import "./haed.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars ,faGear ,faUser ,faGlobe ,faHouse ,faMicrophone} from '@fortawesome/free-solid-svg-icons';
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
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
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
            <FontAwesomeIcon icon={faHouse} /> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="linkschouse nav-link" href="#"><FontAwesomeIcon icon={faUser} /> Account </Link>
          </li>
      
          <li className="nav-item">
            <Link className="linkschouse nav-link" href="#">
            <FontAwesomeIcon icon={faGlobe} /> Language
            </Link>
          </li>
          <li className="nav-item">
            <Link className="linkschouse nav-link" >
            <FontAwesomeIcon icon={faGear} /> Setting
            </Link>
          </li>
          <li className="nav-item">
            <Link className="linkschouse nav-link" href="#">
            <FontAwesomeIcon icon={faMicrophone} /> Radio
            </Link>
          </li>
        </ul>
     
      </div>
    </div>
  </nav>
  )
}
