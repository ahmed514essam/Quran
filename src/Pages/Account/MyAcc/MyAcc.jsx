import React, { useEffect, useState } from 'react'
import UserAccount from './UserAccount/UserAccount';
import ProfilePage from '../ProfilePage/ProfilePage';

export default function MyAcc() {
const [ display , setDisplay] = useState(false);
useEffect(() => {

const checkLocal = localStorage.getItem("Data");

if (checkLocal) {
 setDisplay(true)
}
} , [])

  return (
    <>
{display ? (


<UserAccount setDisplay={setDisplay}/>


) : (


<ProfilePage setDisplay={setDisplay}/>

)}


    </>
  )
}
