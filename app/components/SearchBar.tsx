import Image from 'next/image'
import React from 'react'
import { BiSearch } from 'react-icons/bi'

const SearchBar = () => {
  return (
    <div className='flex gap-5 items-center px-5 py-2 bg-white shadow-xs w-fit'>
        <BiSearch size={27}/>
        <input className='outline-none' type="text" placeholder="Search for a country" />
    </div>
  )
}

export default SearchBar