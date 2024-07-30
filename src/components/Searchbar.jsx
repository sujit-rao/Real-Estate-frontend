import React from 'react'
import { FaSearchLocation } from 'react-icons/fa'

const Searchbar = () => {
  return (
    <div className=' flex justify-between pl-6 h-14 sm:w-full max-w-[720px] bg-white  rounded-full ring-1 ring-slate-500/5 items-center '>
      <input type="text" placeholder='Enter residency name/city/country' className=' bg-white border-none outline-none w-full pr-6' />
      <FaSearchLocation className=' relative right-4 text-xl hover:text-lime-600 ' />
    </div>
  )
}

export default Searchbar
