import React from 'react'
import style from "./Home.module.css"
import SearchInput from './SearchInput/SearchInput'
import QuranPage from './QurabPage/QuranPage'

export default function Home() {
  return (
    <>
      <section>
      <div className={style.qeran}>
      <img   src="/public/imges/download__1_-removebg-preview.png"/>
      </div>
      <br/>
<SearchInput/>
<div className={style.btnsmain}>

<button>h</button>

<button>h</button>

<button>
h
</button>
</div>
      </section>

      <QuranPage/>
    </>
  )
}
