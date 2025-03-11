import React from 'react'

const CountryButton = ({name}: {name: string}) => {
  return (
    <button className='bg-white shadow-xs px-5 cursor-pointer'>
        {name}
    </button>
  )
}

export default CountryButton