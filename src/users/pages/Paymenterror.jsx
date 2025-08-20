import React from 'react'
import Header from '../components/Header'

function Paymenterror() {
  return (
    <div>
      <Header/>
       <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-lg">
        {/* Success GIF */}
        <img 
          src="https://epay.upnm.edu.my/assets/img/cards/fail_anim.gif" 
          alt="Payment Successful" 
          className="w-48 h-48 mb-6"
        />

        {/* Text */}
        <h1 className="text-2xl font-bold text-amber-600 mb-2">Oops...Something Went Wrong </h1>
        <p className="text-gray-700 mb-1">Try again after sometimes.</p>
        {/* <p className="text-gray-500 mb-6">Thanks for trusting us...</p> */}

        {/* Button */}
        <button  
          className="px-6 py-2 bg-amber-600 text-white rounded-full shadow-md hover:bg-amber-700 transition"
        >
          Back
        </button>
      </div>
    </div>
    </div>
  )
}

export default Paymenterror
