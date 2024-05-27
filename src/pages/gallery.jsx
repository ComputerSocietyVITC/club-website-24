import React from 'react'
import Header from '../components/header'
import './Gallery.css'
import Footer from '../components/footer'

const gallery = () => {
  return (
    <>
        <Header />
        <div className='bg-slate-950 p-9'>
          <h1 className='text-white text-9xl font-bold text-center pb-16'> <span className='text-emerald-500 font-extrabold'>&lt;/</span>Gallery<span className='text-emerald-500 font-extrabold'>&gt;</span></h1>
          <img src='./dummy.jpg'/>
        </div>
        <Footer />
    </>
  )
}

export default gallery
