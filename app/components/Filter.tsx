'use client'
import React from 'react'
import { filterList } from '../constatnts'
import { useRouter } from 'next/navigation'

const Filter = () => {
    const router = useRouter()
    const setSearchParam = (value: string) => {
        const params = new URLSearchParams(window.location.search);
        params.set("filter", value);
        router.push(`?${params.toString()}`, { scroll: false });
      };
  return (
    <div className='bg-white shadow-xs p-2 w-fit'>
        <select onChange={(e) => setSearchParam(e.target.value)} className='outline-none bg-white text-sm w-[150px] cursor-pointer '  name="region">
            <option value="">Filter by Region</option>
            {filterList.map((label, index) => <option key={index} value={label.toLowerCase()}>{label}</option>)}
        </select>
    </div>
  )
}

export default Filter