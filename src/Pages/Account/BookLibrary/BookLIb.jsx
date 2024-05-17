import React, { useEffect, useState } from 'react';
import './Book.css'; // Import the CSS file
import { Link } from 'react-router-dom';

export default function BookLib() {
const [ trfa , setTrfa ] = useState(false);

  useEffect(() => {

const getLoka = localStorage.getItem("Data");
if(getLoka){
setTrfa(true)
}

  } , [])


  
  return (
    <>
    {trfa ? (

      <section className="contentAllT">
      <h1 className="pt-5 text-center">موسوعتي</h1>
      <div className="carde-group pt-5">
        <div className="carde">
          <img src="imges/tafseerQuranAzim.webp" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">تفسير القرأن العظيم</h5>
            <a target="_blank" href="https://www.noor-book.com/%D9%83%D8%AA%D8%A7%D8%A8-%D8%AA%D9%81%D8%B3%D9%8A%D8%B1-%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86-%D8%A7%D9%84%D8%B9%D8%B8%D9%8A%D9%85-%D8%AA%D9%81%D8%B3%D9%8A%D8%B1-%D8%A7%D8%A8%D9%86-%D9%83%D8%AB%D9%8A%D8%B1-%D8%B7-%D8%A7%D8%A8%D9%86-%D8%AD%D8%B2%D9%85-pdf" className="btnss">Download</a>
          </div>
        </div>

        <div className="carde">
          <img src="imges/faqh.webp" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">الفقه الاسلامي</h5>
            <a target="_blank" href="https://www.noor-book.com/%D9%83%D8%AA%D8%A7%D8%A8-%D8%A7%D9%84%D9%81%D9%82%D9%87-%D8%A7%D9%84%D8%A7%D8%B3%D9%84%D8%A7%D9%85%D9%8A-pdf-1614119747" className="btnss">Download</a>
          </div>
        </div>

        <div className="carde">
          <img src="imges/sahihMoslam.webp" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">صحيح مسلم</h5>
            <a target="_blank" href="https://www.noor-book.com/%D9%83%D8%AA%D8%A7%D8%A8-%D8%B5%D8%AD%D9%8A%D8%AD-%D9%85%D8%B3%D9%84%D9%85-pdf" className="btnss ">Download</a>
          </div>
        </div>

        <div className="carde">
          <img src="imges/la.webp" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">فاتتني صلاة</h5>
            <a target="_blank" href="https://www.noor-book.com/%D9%83%D8%AA%D8%A7%D8%A8-%D9%81%D8%A7%D8%AA%D8%AA%D9%86%D9%8A-%D8%B5%D9%84%D8%A7%D9%87-%D8%A7%D8%B3%D9%84%D8%A7%D9%85-%D8%AC%D9%85%D8%A7%D9%84-pdf" className="btnss ">Download</a>
          </div>
        </div>
      </div>
    </section>

    ) : (

      <section className="contentAllT">
      <h1 className="pt-5 text-center">موسوعتي</h1>
      <div className="contentfalse">
     <p className="pt-5 pb-5 fw-bold text-center text-light">انشأ حسابك الخاص لرؤية الكتب</p>
   
   <Link to="/account" className="likgo"> Go To Account</Link>
   </div>
    </section>
    )}
  
    </>
  );
}
