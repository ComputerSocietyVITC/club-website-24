import React from 'react'
import ParallaxScroll from "../components/ui/parallel-scroll";
import Header from '../components/header';
import { slides } from '../data/slides';

const Gallery = () => {
  return (<>
    <Header type={0} />
    <div className='bg-slate-950 p-9 min-h-screen'>
      <h1 className='text-white text-9xl font-bold text-center pb-16'> 
      Gallery</h1>
      <ParallaxScroll images={slides.map(slide => slide.src)} />
    </div></>
  )
}

export default Gallery
