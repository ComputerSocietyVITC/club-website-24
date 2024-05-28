import React from 'react'
import PhotoAlbum from "react-photo-album"
import { slides } from '../data/slides'

const Gallery = () => {
  return (
    <div className='bg-slate-950 p-9'>
      <h1 className='text-white text-9xl font-bold text-center pb-16'> <span className='text-emerald-500 font-extrabold'>&lt;/</span>Gallery<span className='text-emerald-500 font-extrabold'>&gt;</span></h1>
      <PhotoAlbum
        layout="masonry"
        photos={slides}
        columns={3}
      />
    </div>
  )
}

export default Gallery
