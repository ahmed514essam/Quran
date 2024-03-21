import React from 'react'
import "./Mnasbat.css"
export default function Mnasbat() {
  return (
    <section className="sectionAbadatAll">
      <div className="divhead">
        <h2>  المناسبات</h2>
        <p>
        الإسلام دين شامل لكل ما فيه الخير للإنسان، وهو رسالة عامة للإنسان أينما كان، ووقتما كان، فكما هو شامل وعام، فهو صالح لكل مكان وزمان. يشمل هذا القسم موضوعات منتقاة يحتاجها المسلم في أحوال ومناسبات متنوعة        </p>
      </div>

      <div className="divcontentPage">
        <div class="card ">
          <img
            src="/public/imges/winter.jpeg"
            className="cardimges card-img-top"
          />
          <div className="card-body">
            <h3>أحكام فصل الشتاء</h3>
            <p className="card-text">
            الإسلام دين شامل ، وهو يصوغ الحياة كلها لتكون حياة متصلة بخالقها، سامية في غاياتها، حكيمة في مفرداتها، ولهذا فإن للمؤمن في كل وقت عبادة تقوده إلى ذلك، وموسم الشتاء هو موسم لا يخلو من أحكام شرعية مرتبطة بأبواب عدة، في الطهارة والصلاة واللباس والمطر وغيرها، وسنتناول بإذن الله في هذه الوحدة شيئا من أحكامها.

            </p>
          </div>
        </div>
        <div class="card ">
          <img
            src="/public/imges/fun.jpg"
            className="cardimges card-img-top"
          />
          <div className="card-body">
            <h3>أحكام الرحلات</h3>
            <p className="card-text">
            الإسلام دين الحياة ، فهو مرتبط بكافة أحوال الإنسان، في حله وترحاله، وسكونه وحركته، وجده ولهوه، والرحلات جزء من هذه الحياة الاجتماعية، وهي كذلك لا تخلو من أحكام لأشياء يريد الله تعالى منا أن نستحضرها ونفعلها، أو من أشياء يريد الله تعالى أن نجتنبها ونتركها وسنتناول بإذن الله في هذه الوحدة شيئا من أحكام الرحلات.            </p>
          </div>
        </div>
        <div class="card ">
          <img
            src="/public/imges/dese.jpg"
            className="cardimges card-img-top"
          />
          <div className="card-body">
            <h3>الأوبئة والأمراض</h3>
            <p className="card-text">

            الابتلاء بالأوبئة من أقدار الله التي تنزل بالناس مسلمهم وكافرهم، لكن حال المسلم مع البلاء ليس كحال غيره، فهو يتعامل معه بما أمره ربه تعالى من الصبر وبذل الأسباب المشروعة في دفعه قبل وقوعه والاستشفاء منه إذا نزل به.            </p>
          </div>
        </div>
        
     
       
      </div>
    </section>
  )
}
