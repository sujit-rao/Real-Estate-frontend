import React from 'react'
import aboutImg from '../assets/about.jpg'
import { RiDoubleQuotesL } from 'react-icons/ri'

function About() {
  return (
   <section className=' container py-16 xl:py-28 '>
    {/* container */}
    <div className=' flex flex-col lg:flex-row  xl:flex-grow gap-10'>
        {/*left  */}
        <div className=' flex-1 relative'>
            <img src={aboutImg} alt="" className=' rounded-3xl rounded-tr-[150px] w-[480px]' />
            <div className=' bg-white absolute bottom-16 left-16 max-w-xs p-4 rounded-lg flexCenter flex-col '>
                <span className=' relative bottom-8 p-3 shadow-md bg-white h-12 w-12 flex items-center rounded-full'><RiDoubleQuotesL className=' text-2xl' /></span>
                <p className=' text-center relative bottom-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, deleniti.</p>
            </div>
        </div>
        {/* right */}
        <div className=' flex-1 flex justify-center flex-col'>
            <span className=' text-3xl font-bold'>Unveiling Our Journey</span>
            <h2 className=' text-xl font-semibold mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p className=' my-8 text-base text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias iusto porro consequatur maiores numquam culpa nulla aperiam libero eos provident illum, accusamus eum facilis ad nobis soluta sapiente explicabo! Eaque fugiat, mollitia reiciendis, ipsam sequi inventore, ex minus accusantium ratione officia incidunt.</p>
          
            {/* Statistics */}
            <div>
            </div>

        </div>
    </div>

   
   </section>
  )
}

export default About
