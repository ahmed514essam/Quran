import React from 'react'
import style from "./ErrorPage.module.css"
import { Link } from 'react-router-dom'
export default function ErrorPage() {
  return (
    <section className={style.sectionErrorPage}>
<div>

<h3>Ohh!  </h3>

<Link to="/">العوده</Link>

{/* <img src="/public/icons/fhgj.png" /> */}

</div>
</section>
  )
}
