import React from 'react'

const CountryButton = ({name}: {name: string}) => {
  return (
    <button className='bg-(--light_mode_elements) dark:bg-(--dark_mode_elements) shadow-xs px-5 cursor-pointer'>
        {name}
    </button>
  )
}

export default CountryButton