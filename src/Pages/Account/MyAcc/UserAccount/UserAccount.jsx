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

  return (
    <>
      {userData ? (
        <section className={style.sectionMain}>
          <div className={style.userDatas}>
            <div className={style.divavatar}>
              <Avatar />
            </div>
            <div className={style.contetInfo}>
              <h1> {userData.fname} مرحبا</h1>
              <span>كيف حالك  ياعزيزي</span>
              <p>
                من اجل انك انضممت الينا سأقدم لك مكبتي تتيح لك تحميل كتب
              </p>
              <h2>My Profile</h2>
              <p>
              <p>
              Name : {""}
                <span className="fst-italic">
                  {userData.fname} {userData.lname}
                </span>
               </p>
              </p>
              <p>Email : {userData.email}</p>
              <p >Age : {userData.age}</p>
              <p>password : {userData.pass}</p>
            </div>
            <div className="btnAcc d-flex m-2">
              <button
                onClick={btnremoval}
                className="bg-danger text-light p-2 fw-bold border-0 rounded"
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
           

            <div className={style.contetCard}>
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
        <div className="overlaye">
          <div className="alerte">
            <h3>Make sure to delete your account</h3>
            <div className="btnalerte">
              <button onClick={removeAcc}>Remove</button>
              <button onClick={cancelRemoveAcc}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
