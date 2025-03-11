import React from 'react'
import { filterList } from '../constatnts'

const Filter = () => {
  return (
    <div className='bg-white shadow-xs p-2 w-fit'>
        <select className='outline-none bg-white text-sm w-[150px] cursor-pointer '  name="region">
            <option value="">Filter by Region</option>
            {filterList.map((label, index) => <option key={index} value={label.toLowerCase()}>{label}</option>)}
        </select>
    </div>
  )
}

export default Filter