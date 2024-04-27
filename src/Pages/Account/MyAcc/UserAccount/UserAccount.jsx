import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "./Avatar/Avatar";
import style from "./UserAccount.module.css";
export default function UserAccount({ setDisplay }) {
  const [userData, setUserData] = useState(null);
  const [alertlog, setAlertlog] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserData = localStorage.getItem("Data");

    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const btnremoval = () => {
    setAlertlog(true);
  };

  const btnlogOut = () => {
    setDisplay(false);
  };

  const removeAcc = () => {
    localStorage.removeItem("Data");
    setAlertlog(false);
    setUserData(null);
    setDisplay(false);
  };

  const cancelRemoveAcc = () => {
    setAlertlog(false);
  };

const gotolibrary = ()=> {
  navigate("/library")
}

  return (
    <>
      {userData ? (
        <section className={style.sectionMain}>
          <div className={style.userDatas}>
            <div className={style.divavatar}>
              <Avatar />
            </div>
            <div className={style.contetInfo}>
              <h1><span className={style.spanhighlight}>{userData.fname}</span>  مرحبا</h1>
              <span>   كيف حالك  ياعزيزي | عزيزتي</span>
              <p>
                من اجل انك انضممت الينا سأقدم لك مكتبتي تتيح لك تحميل بعض الكتب
              </p>
              <h2 className={style.header2prof}>My Profile</h2>
              <p>
              <p>
              Name : {""}
              <span className={style.spanhighlight}>
                <span className="fst-italic">
                  {userData.fname} {userData.lname}
                </span>
                </span>
               </p>
              </p>
              <p>Email : <span className={style.spanhighlight}>{userData.email}</span></p>
              <p >Age : <span className={style.spanhighlight}>{userData.age}</span></p>
              <p>password : <span className={style.spanhighlight}>{userData.pass}</span></p>
            </div>
            <div className={style.btnall}>
              <button
                onClick={btnremoval}
                className={style.btnremov}
              >
                Remove Account
              </button>
              <button
                onClick={btnlogOut}
                className="bg-primary text-white p-2 fw-bolder border-0 rounded"
              >
                Log Out
              </button>
            </div>
          </div>

          <div className={style.contentDetails}>
           

            <div onClick={gotolibrary} className={style.contetCard}>
                <div className={style.conImges}>
                    <img src="/public/imges/library.avif" />
                </div>
                <p>مكتبي</p>
            </div>
          </div>
        </section>
      ) : (
        <div>
          <p>No Users</p>
        </div>
      )}

      {alertlog && (
        <div className={style.overlaye}>
          <div className={style.alerte}>
            <h3>Make sure to delete your account</h3>
            <div className={style.btnalerte}>
              <button className={style.re} onClick={removeAcc}>Remove</button>
              <button className={style.ba} onClick={cancelRemoveAcc}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
