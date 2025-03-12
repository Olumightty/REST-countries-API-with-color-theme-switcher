
import useTheme from 'next-theme'
import Link from 'next/link'
import React from 'react'

import { IoMoonOutline } from 'react-icons/io5'
import ThemeSwitch from './ThemeSwitch'

const NavBar = () => {
  
  
  return (
    <nav className='w-full flex items-center justify-between px-20 py-4 bg-(--light_mode_elements) dark:bg-(--dark_mode_elements) text-(--light_mode_text) dark:text-(--dark_mode_text) sticky top-0 left-0 shadow-xs z-10'>
        <Link className='text-xl font-semibold' href={'/'}>Where in the World?</Link>
        <ThemeSwitch/>
    </nav>
  )
}

export default NavBar