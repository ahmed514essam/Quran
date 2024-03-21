import React from "react";
import "./Abadat.css";
export default function Abadat() {
  return (
    <section className="sectionAbadatAll">
      <div className="divhead">
        <h2>العبادات</h2>
        <p>
          يهدف هذا الفرع إلى تأصيل العبادات وترسيخها، وربط العبادة وأحكامها
          بالكتاب الكريم والسنة النبوية المطهرة. ويتناول فقه العبادات أحكام
          العبادات المكلف بها الإنسان بالتوضيح والتفصيل كما وردت عن النبي محمد ﷺ
          وعن صحابته رضي الله عنهم أجمعين.
        </p>
      </div>

      <div className="divcontentPage">
        <div class="card ">
          <img
            src="/public/imges/tahara.jpeg"
            className="cardimges card-img-top"
          />
          <div className="card-body">
          <h3>الطهاره</h3>
            <p className="card-text">
            لصلاة هي ركن الإسلام الثاني بعد الشهادتين، ولما كانت الصلاة لا تصح بدون طهارة، كان من المناسب أن يبدأ الطالب بتعلم أحكام الطهارة لتصح صلاته
            </p>
          </div>
        </div>
        <div class="card ">
          <img
            src="/public/imges/saalaa.jpeg"
            className="cardimges card-img-top"
          />
          <div className="card-body">
          <h3>الصلاء</h3>
            <p className="card-text">
            الصلاة هي عماد الدين وهي أهم ما يجب البدء بتعلمه من العبادات، فهي ثاني أركان الدين الإسلامي بعد الشهادتين  ولا يتم إسلام المرء إلا بأدائها.
            </p>
          </div>
        </div>
        <div class="card ">
          <img
            src="/public/imges/zakaa.jpeg"
            className="cardimges card-img-top"
          />
          <div className="card-body">
          <h3>الذكاه</h3>
            <p className="card-text">
            الزكاة هي الركن الثالث من أركان الإسلام، فرضها الله لتزكي المعطي والآخذ وتطهرهما، ولئن كانت في ظاهرها نقصاً في كمية المال إلا أن من آثارها زيادة المال بركة، وزيادة المال كمية، وزيادة الإيمان في قلب صاحبها.
            </p>
          </div>
        </div>
        <div class="card ">
          <img
            src="/public/imges/saom.jpeg"
            className="cardimges card-img-top"
          />
          <div className="card-body">
          <h3>الصوم</h3>
            <p className="card-text">
            صوم رمضان هو الركن الرابع من أركان الإسلام، والصوم عبادة جليلة، فرضها الله على المسلمين كما فرضها على الأمم السابقة لتحصيل التقوى التي هي مفتاح كل خير.
            </p>
          </div>
        </div>
        <div class="card ">
          <img
            src="/public/imges/ag.jpeg"
            className="cardimges card-img-top"
          />
          <div className="card-body ">
          <h3>الحج</h3>
            <p className="card-text">
        
الحج هو الركن الخامس من أركان الإسلام، ويجب على المسلم البالغ القادر مرة واحدة في العمر.
            </p>
          </div>
        </div>
        <div class="card ">
          <img
            src="/public/imges/die.jpg"
            className="cardimges card-img-top"
          />
          <div className="card-body">
          <h3>الموت والجنازة</h3>
            <p className="card-text">
            الموت ليس نهاية الأمر ولكنه مرحلة جديدة للإنسان وبداية للحياة الكاملة في الآخرة وكما حرص الإسلام على رعاية الحقوق منذ الولادة فقد أكد على الأحكام التي تحفظ حقوق الميت وتراعي حال أهله وأقاربه.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
