import Image from 'next/image'
import React from 'react'
import { CountryCardInfoProps } from '../types'


const CountryCard = (props: CountryCardInfoProps | any) => {
  return (
    props as CountryCardInfoProps ?
    <div className='bg-white rounded-b-lg shadow-xs cursor-pointer hover:scale-105 ease-linear duration-300'>
        <Image
            className='rounded-t-lg w-[300px] h-[200px]'
            width={300}
            height={200}
            src={props.flags.svg}
            alt={props.name}
        />
        <div className='p-5 '>
            <p className='font-semibold'>{props.name}</p>
            <p className='mt-5 text-sm'>
                <span className='block'><span className='font-semibold '>Population: </span> {props.population}</span>
                <span className='block'><span className='font-semibold '>Region: </span>{props.region}</span>
                <span className='block'><span className='font-semibold '>Capital: </span>{props.capital}</span>
            </p>
        </div>
    </div>
    : <p>Datat Integrity Violation</p>
  )

}

export default CountryCard