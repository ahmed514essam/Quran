import React from 'react'
import style from "./Home.module.css"
import SearchInput from './SearchInput/SearchInput'

export default function Home() {
  return (
    <>
      <section>
      <div className={style.qeran}>
      <img   src="/public/imges/download__1_-removebg-preview.png"/>
      </div>
      <br/>
<SearchInput/>
      </section>
    </>
  )
}
