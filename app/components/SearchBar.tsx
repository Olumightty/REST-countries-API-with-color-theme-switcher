'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { BiSearch } from 'react-icons/bi'

const SearchBar = () => {
  const router = useRouter()
  const setSearchParam = (value: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set("name", value);
    router.push(`?${params.toString()}`, { scroll: false });
  };
  return (
    <div className='flex gap-5 items-center px-5 py-2 bg-white shadow-xs w-fit'>
        <BiSearch size={27}/>
        <input onChange={(e) => setSearchParam(e.target.value)}  className='outline-none' type="text" placeholder="Search for a country" />
    </div>
  )
}

export default SearchBar