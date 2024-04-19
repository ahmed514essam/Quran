import React from 'react';
import './Book.css'; // Import the CSS file

export default function BookLib() {
  return (
    <section className="contentAllT">
      <h1 className="pt-5 text-center">موسوعتي</h1>
      <div className="carde-group pt-5">
        <div className="carde">
          <img src="/public/imges/tafseerQuranAzim.webp" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">تفسير القرأن العظيم</h5>
            <a href="#" className="btnss">Download</a>
          </div>
        </div>

        <div className="carde">
          <img src="/public/imges/faqh.webp" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">الفقه الاسلامي</h5>
            <a href="#" className="btnss">Download</a>
          </div>
        </div>

        <div className="carde">
          <img src="/public/imges/sahihMoslam.webp" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">صحيح مسلم</h5>
            <a href="#" className="btnss ">Download</a>
          </div>
        </div>

        <div className="carde">
          <img src="/public/imges/la.webp" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">فاتتني صلاة</h5>
            <a href="#" className="btnss ">Download</a>
          </div>
        </div>
      </div>
    </section>
  );
}
