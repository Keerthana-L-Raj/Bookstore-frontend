import React from 'react'
import bookloader from '../assets/loader.gif'
function Preloader() {
  return (
    <div>
      <div className="flex flex-row !bg-amber-200 h-100%"></div>
      <div className="basis-128"></div>
      <div className="basis-64 justify-center mt-60 p-5 ps-175">
        <img src={bookloader} alt="" />
      </div>
      <div className="basis-128"></div>
      
     
    </div>
  )
}

export default Preloader
