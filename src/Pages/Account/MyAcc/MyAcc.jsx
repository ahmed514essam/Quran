import React, { useState } from 'react'
import UserAccount from './UserAccount/UserAccount';
import ProfilePage from '../ProfilePage/ProfilePage';

export default function MyAcc() {
const [ display , setDisplay] = useState(false);


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
