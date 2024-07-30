import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Properties from '../components/Properties'
import Blogs from '../components/Blogs'
import bannerImg from '../assets/banner1.jpg'

const Home = () => {
  return (
    <main className=' px-10'>
      <Hero />
      <About/>
      <Properties />
      <Blogs />
      <div className=' container py-16 overflow-x-hidden'>
        <img src={bannerImg} alt="" className=' rounded-xl' />
      </div>
    </main>
  )
}

export default Home
