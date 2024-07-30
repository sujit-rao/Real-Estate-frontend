import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { MdClose, MdMenu } from 'react-icons/md'
import userIcon from '../assets/user.svg'

const Header = () => {


    const [active, setActive] = useState(false)
    const[menu, setMenu] = useState(false)

    const ToggleMenu = () => {
        setMenu(!menu);
    }
    useEffect(()=> {
        const handleScroll = () => {
            if(window.scrollY > 0) {
                if(menu){
                    setMenu(false)
                }
        }
        setActive(window.scrollY > 40);
    }
    window.addEventListener("scroll", handleScroll);
    return() => {
        window.removeEventListener("scroll", handleScroll);
    }
    },[menu])
    return (
        <header className=' container fixed top-1 w-full left-0 right-0 z-50'>
            {/* Container */}
            <div className={` ${active? "py-0": "py-2"} container bg-white transition-all duration-200 rounded-full px-5 right-1 ring-slate-900/5`}>

                <div className={` flex justify-between py-2 px-5 border rounded-full `}>
                    {/* Logo */}
                    <Link to={'/'}>
                        <span className=' font-bold text-3xl'>Zinx<span className=' font-semibold text-2xl'>State</span></span>
                    </Link>
                    {/* Nav */}
                    <div className=' flexCenter gap-x-4'>
                        {/* Desktop */}
                        <Navbar containerStyles={" hidden lg:flex gap-x-5 lg:gap-x-10 capitalize medium-15 ring-1 ring-slate-900/10 rounded-full p-2"} />
                        {/* mobile */}
                        <Navbar containerStyles={`${menu? ' lg:hidden flex items-start flex-col gap-y-8 capitalize fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 ring-slate-900/5 transition-all duration-700 z-50' : 'flex items-start flex-col gap-y-8 capitalize fixed top-20 -right-[100%] p-12 bg-white rounded-3xl shadow-md w-64 ring-slate-900/5 transition-all duration-700'}`} />

                    </div>
                    {/* buttons */}
                    <div className=' flex justify-between gap-x-3 sm:gap-x-5 '>
                       {!menu ? (<MdMenu onClick={ToggleMenu} className=' lg:hidden cursor-pointer text-3xl hover:text-lime-600'/>) : (<MdClose onClick={ToggleMenu} className=' lg:hidden cursor-pointer text-3xl hover:text-lime-600'/>)}
                       <button className=' bg-lime-600 text-white px-4 py-2 flexCenter gap-x-2 rounded-full font-semibold'>
                        <img src={userIcon} alt="" width={22} height={22} />
                        <span>Login</span>
                        </button> 

                    </div>
                </div>
            </div>


        </header>
    )
}

export default Header
