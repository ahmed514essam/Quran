import React from 'react'
import style from "./Home.module.css"
import SearchInput from './SearchInput/SearchInput'
import QuranPage from './QurabPage/QuranPage'
import { useNavigate } from 'react-router-dom'

export default function Home() {

const navicate = useNavigate();

const win = () => {
navicate("/surha")
}

  return (
    <>
      <section className={style.sectioOne}>
      <div className={style.qeran}>
      <img   src="/public/imges/download__1_-removebg-preview.png"/>
      </div>
      <br/>

<div className={style.btnsmain}>

<button>القرأن الكريم</button>

<button>الأذكار</button>

<button>الراديو</button>

<button>تعليم </button>


</div>
<SearchInput/>
      </section>
<section className={style.sectioTwo}>
<h2>أقرأ بأسم ربك الذي خلق</h2>
      <QuranPage/>
      </section>
    </>
  )
}
