import React, { Children } from 'react'
import { Link } from 'react-router-dom'
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter, TiSocialYoutube } from 'react-icons/ti'

const Footer = () => {
  return (
    <footer className=' rounded-3xl '>
      <div className="container bg-lime-800/5 py-12 px-6 rounded-3xl rounded-b-">
        <h3 className=' text-4xl font-semibold'>Explore real estate oppurtunities with us?</h3>
        <p className=' mt-4 mb-8 text-gray-600'>Get in touch with us to know more about our services.</p>
        <hr className=' border-2 border-gray-300 ' />
        {/* container */}
        <div className=' mt-8'>
          <div className=' space-y-5 w-1/2'>
            <Link to={'/'}>
              <span className=' font-bold text-3xl'>Zinx<span className=' font-semibold text-2xl'>State</span></span>
            </Link>
            <p className=' text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab deserunt iusto quasi alias ullam accusantium doloribus eaque rem reiciendis facere.</p>
            <div className=' flex justify-between pl-6 h-14 bg-white w-full max-w-[360px] rounded-full ring-1 ring-slate-500/5'>
              <input type="email" placeholder='Enter your email'
                className=' bg-transparent border-none outline-none text-xl' />
              <button className=' px-5 text-white font-semibold rounded-full relative right-1 bg-lime-600'>Subscribe</button>
            </div>
          </div>

          <div className=' flex justify-around mt-4'>
            
            <ul className=' gap-y-4 flex flex-col text-gray-600' >
            <h3 className=' font-semibold text-xl text-black'>Learn more</h3>
              <li>About us</li>
              <li>Our services</li>
              <li>Our team</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>

            <ul className=' gap-y-4 flex flex-col text-gray-600'>
              <h3 className=' font-semibold text-xl text-black'>Contact us</h3>
              <li>info@zinxstate.com</li>
              <li>+91 1234567890</li>
              <li>1234, Main Street, New York</li>

            </ul>


            <ul className=' flex flex-col gap-y-4 text-gray-600'>
              <h3 className=' font-semibold text-xl text-black'>Follow us</h3>
              <li className=' flex items-center text-center gap-x-2'><TiSocialInstagram />instagram/zinxstate</li>
              <li className=' flex items-center text-center gap-x-2'><TiSocialFacebook />facebook/zinxstate</li>
              <li className=' flex items-center text-center gap-x-2'><TiSocialTwitter />twitter/zinxstate</li>
              <li className=' flex items-center text-center gap-x-2'><TiSocialYoutube />youtube/zinxstate</li>

            </ul>


          </div>
          


        </div>
        

      </div>
      <div className=' flex justify-around p-2  text-white font-bold bg-lime-700 rounded-b-full lg:rounded-none'>
            <h2>2024 ZinxState</h2>
            <h2>All rights reserved</h2>
          </div>
    </footer>
  )
}

export default Footer

const FooterColumn = ({ title, children }) => {
  return (
    <div>
      <h4>{title}</h4>
      {children}
    </div>
  )
}
