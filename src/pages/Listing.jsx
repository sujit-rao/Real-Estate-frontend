import React from 'react'
import { Link } from 'react-router-dom'
import Searchbar from '../components/Searchbar'

import PROPERTY from '../constant/Residency.json'
import Item from '../components/Item'


const Listing = () => {
  return (
    <main className=' container my-24'>
      <div className=' container py-10 xl:py-24 bg-gray-900/5 rounded-lg'>
        <div className=' px-2'>
          <Searchbar />
          {/* Contianner */}
          <div className=' grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10'>
            {
              PROPERTY.map((property) => (

                <Item property={property} key={property.title} />

              ))
            }
          </div>
        </div>
      </div>
    </main>
  )
}

export default Listing
