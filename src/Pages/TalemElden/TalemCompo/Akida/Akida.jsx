import React from "react";
import "./Akida.css";
export default function Akida() {
  return (
    <section className="sectionAbadatAll">
      <div className="divhead">
        <h2>العقيدة</h2>
        <p>
        الإسلام عقيدة وشريعة، والعقيدة هي الأساس الذي يقوم عليه الدين، وعقيدة الإسلام عقيدة واضحة سهلة، توافق العقول الصحيحة والفِطَر السليمة. 
        </p>
      </div>

      <div className="divcontentPage">
        <div class="card ">
          <img
            src="/public/imges/shadatin.jpg"
            className="cardimges card-img-top"
          />
          <div className="card-body">
            <h3>الشهادتين</h3>
            <p className="card-text">
            جعل الإسلام لكلمة التوحيد لا إله إلا الله أعظم المكانة وأجلها؛ فهي أول واجب على المسلم فمن أراد الدخول في الإسلام فعليه أن يعتقدها ويتلفظ بها. ومن قالها موقناً بها يبتغي بذلك وجه الله كانت سبباً في نجاته من النار كما قال النبي صلى الله عليه وسلم: "فإن الله حرم على النار من قال لا إله إلا الله يبتغي بذلك وجه الله" (البخاري 415).
            </p>
          </div>
        </div>
        <div class="card ">
          <img
            src="/public/imges/ayman.jpg"
            className="cardimges card-img-top"
          />
          <div className="card-body">
            <h3>الايمان</h3>
            <p className="card-text">
            اتفقت جميع رسالات الأنبياء لأقوامهم على عبادة الله وحده لا شريك له والكفر بما يعبد من دون الله وهذا هو حقيقة معنى كلمة التوحيد، وهي الكلمة التي يدخل بها المرء في دين الله.
            </p>
          </div>
        </div>
        <div class="card ">
          <img
            src="/public/imges/abada.jpg"
            className="cardimges card-img-top"
          />
          <div className="card-body">
            <h3>العبادة</h3>
            <p className="card-text">
            العبادة هي: الطاعة المطلَقة مع المحبة والتعظيم والخضوع، وهي حقّ الله على عباده، يختصّ بها وحده دون سواه ، وتشمل كل ما يحبّه الله ويرضاه من الأقوال والأعمال التي أمر بها وندب الناس إليها، سواء أكانت من الأعمال الظاهرة كالصلاة والزكاة والحج، أم من الأعمال الباطنة مثل ذكر الله بالقلب والخوف منه، والتوكل عليه، والاستعانة به، وغير ذلك.
            </p>
          </div>
        </div>
        
     
       
      </div>
    </section>
  );
}
