import React from 'react'
import "./Sona.css"
export default function Sona() {
  return (
    <section className="sectionAbadatAll">
    <div className="divhead">
      <h2>  السنة النبوية</h2>
      <p>
      سنة رَسُول الله ﷺ وَحي أوحاه الله إِلَى نبيه مُحَمَّد ﷺ، وَهِي مَعَ كتاب الله الْعَزِيز أساس الدّين الإسلامي ومصدره، وهما مَعًا متلازمان تلازم شَهَادَة أَن لَا إِلَه إِلَّا الله وَشَهَادَة أَن مُحَمَّدًا رَسُول الله، وَمن لم يُؤمن بِالسنةِ لم يُؤمن بِالْقُرْآنِ. </p>   </div>

    <div className="divcontentPage">
      <div class="card ">
        <img
          src="/public/imges/elnaby.jpg"
          className="cardimges card-img-top"
        />
        <div className="card-body">
          <h3>النبي ﷺ</h3>
          <p className="card-text">
          التعرف على شخصية الرسولﷺ وسيرته ونبوته وحقوقه على أمته.
          </p>
        </div>
      </div>
      <div class="card ">
        <img
          src="/public/imges/soaaaa.jpg"
          className="cardimges card-img-top"
        />
        <div className="card-body">
          <h3> الحديث والسنة</h3>
          <p className="card-text">
          معرفة فضل السنة، و مصدريّتها للتشريع، ومعرفة أهم كتبها.</p>        </div>
      </div>
  
      
   
     
    </div>
  </section>
  )
}
