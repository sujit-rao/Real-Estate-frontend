import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdAddHome, MdHomeWork, MdPermContactCalendar } from 'react-icons/md'
import { RiCheckboxMultipleBlankFill } from 'react-icons/ri'


const Navbar = ({containerStyles}) => {
  return (
    <nav className={`${containerStyles}`}>
      <NavLink
        to={"/"}
        className={({ isActive }) => isActive ? " flexCenter gap-x-1 rounded-full px-2 py-1 bg-lime-600 text-white" : " flexCenter gap-x-1 rounded-full px-2 py-1"}>
        <MdHomeWork />
        <div>Home</div>

      </NavLink>

      <NavLink
        to={"/listing"}
        className={({ isActive }) => isActive ? " flexCenter gap-x-1 rounded-full px-2 py-1 bg-lime-600 text-white" : " flexCenter gap-x-1 rounded-full px-2 py-1"}>
        <RiCheckboxMultipleBlankFill />
        <div>Listing</div>

      </NavLink>

      <NavLink
        to={"mailto:rishikanth545@gmail.com"}
        className={({ isActive }) => isActive ? " flexCenter gap-x-1 rounded-full px-2 py-1 bg-lime-600 text-white" : " flexCenter gap-x-1 rounded-full px-2 py-1"}>
        <MdPermContactCalendar />
        <div>Contact</div>

      </NavLink>

      <NavLink
        to={"/addproperty"}
        className={({ isActive }) => isActive ? " flexCenter gap-x-1 rounded-full px-2 py-1 bg-lime-600 text-white" : " flexCenter gap-x-1 rounded-full px-2 py-1"} >
        <MdAddHome />
        <div>Add Property</div>

      </NavLink>
    </nav>
  )
}

export default Navbar
