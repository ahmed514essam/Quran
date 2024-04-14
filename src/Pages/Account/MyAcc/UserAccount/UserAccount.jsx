import React, { useEffect, useState } from 'react'
import form from "./UserAccount.module.css" 
export default function UserAccount() {
    const [ del , setDel ] = useState();

    useEffect(() => {
        const getCoEmail = localStorage.getItem("Data");

        if (getCoEmail) {
            setDel(JSON.parse(getCoEmail));
        }
    }, []);


  return (
    <section>

<div className={form.imge}>
<img />
</div>


<div className={form.data}>

<h2>Name : {del.fname
} "" {del.lname}</h2>
<p>Age : {del.age}</p>


</div>

    </section>
  )
}
