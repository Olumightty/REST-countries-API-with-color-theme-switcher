import Link from 'next/link'
import React from 'react'

import { IoMoonOutline } from 'react-icons/io5'

const NavBar = () => {
  return (
    <nav className='w-full flex items-center justify-between px-20 py-2 bg-white absolute top-0 left-0 shadow-xs'>
        <Link className='text-xl font-semibold' href={'/'}>Where in the World?</Link>
        <button className='flex gap-2 items-center cursor-pointer'>
            <IoMoonOutline fill='white'/>
            <span>Dark Mode </span> 
        </button>
    </nav>
  )
}

export default NavBar