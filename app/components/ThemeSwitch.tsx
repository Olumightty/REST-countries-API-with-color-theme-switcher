'use client'

import useTheme from 'next-theme'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FiSun } from 'react-icons/fi'
import { IoMoonOutline } from 'react-icons/io5'

const ThemeSwitch = () => {
    const {theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const handleTheme = () => {
        if(theme == 'light'){
          setTheme('dark')
        } 
        else{
          setTheme('light')
        } 
        
      }

      if(!mounted){
        return(
            <div
                className='w-[27px] h-[27px]'
            />
        )
      }
    if(theme == 'light'){
    return (
            <button onClick={() => setTheme('dark')} className='flex gap-2 items-center cursor-pointer'>
                <IoMoonOutline size={27} fill='white'/>
                <span>Dark Mode </span> 
            </button>
        )
    }
    else {
        return(
            <button onClick={() => setTheme('light')} className='flex gap-2 items-center cursor-pointer'>
                <FiSun size={27} fill='white'/>
                <span>Dark Mode </span> 
            </button>
        )
    }
}

export default ThemeSwitch