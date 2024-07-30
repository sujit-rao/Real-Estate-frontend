import React from 'react'
import HeartBtn from './HeartBtn'
import { MdOutlineBathroom, MdOutlineBed, MdOutlineGarage, MdOutlineLocalParking } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Item({ property }) {
  return (
    <div className=' rounded-2xl p-3 bg-white'>
      <div className=' pb-2 relative'>
        <img src={property.image} alt={property.title} className=' rounded-xl ' />
        {/* like btn */}
        <div className=' absolute top-4 right-6'>
          <HeartBtn />
        </div>
      </div>
      <h5 className=' font-bold my-1 text-lime-600'>{property.city}</h5>
      <p className=' font-medium line-clamp-1'>{property.title}</p>
      {/* info */}
      <div className=' flex gap-x-2 py-2'>
        <div className=' flexCenter  gap-x-2 border-slate-900/50 pr-4 font-semibold'><MdOutlineBed /> {property.facilities.bedrooms}</div>
        |
        <div className=' flexCenter  gap-x-2 border-slate-900/50 pr-4 font-semibold'><MdOutlineBathroom /> {property.facilities.bathrooms}</div>
        |
        <div className=' flexCenter  gap-x-2 border-slate-900/50 pr-4 font-semibold'><MdOutlineGarage /> {property.facilities.parkings}</div>
      </div>
      <p className=' line-clamp-2 pt-2 mb-4'>{property.description}</p>
      <div className=' flex justify-between mt-3'>
        <div className=' font-bold'>${property.price}.00</div>
        <Link to={'/'}>
          <button className=' bg-lime-600 text-white font-semibold rounded-xl py-1.5 px-1.5 -mt-2 '>View Details</button></Link>
      </div>
    </div>
  )
}

export default Item
