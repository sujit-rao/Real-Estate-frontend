import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <section className=' container pt-24'>
            <div className=' container px-3 bg-gray-700/5 bg-hero bg-center bg-cover bg-no-repeat h-[655px] w-full rounded-3xl'>
                <div className=' relative top-32 sm:top-52 '>
                    <span className=' font-semibold text-lg'>Welcome to ZinxState</span>
                    <h1 className=' font-bold capitalize text-5xl max-w-[40rem]'>Discover Exceptional Homes with ZinxState</h1>
                    <p className=' text-gray-500 text-sm my-10 max-w-[33rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore aut sint in voluptas inventore dolor quaerat numquam libero doloremque? Numquam recusandae optio totam nulla illo non ut fuga maxime.</p>
                    {/* button */}
                    <div className=' inline-flex items-center gap-4 p-2 bg-white rounded-xl'>
                        <div className=' text-center leading-tight pl-5'>
                            <h5 className=' uppercase font-bold'>15% off</h5>
                            <p className=' text-gray-500 '>On All Properties</p>
                        </div>
                        <Link to={'/listing'} className=' rounded-xl flexCenter px-3 py-2 bg-lime-400 text-white font-semibold'>Shop now</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
