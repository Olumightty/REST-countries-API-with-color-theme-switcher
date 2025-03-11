import React from 'react'
import CountryCard from './CountryCard'
import data from "@/public/data.json"
import { CountryCardInfoProps } from '../types'
import Link from 'next/link'


const CountryCardsWrapper = async({name, filter}:
   {
    name: string,
    filter: string
   }) => {
  
  let countries
  if(name?.trim() || filter?.trim()){
    countries = data.filter((country) => country.name.toLowerCase().includes(name?.toLowerCase() || '') && country.region.toLowerCase().includes(filter?.toLowerCase() || ''))
  }
    else {
      countries = data
    }
  return (
    <div className='mt-10 grid grid-cols-4 gap-20'>
        {countries?.map((country, index) => <Link key={country?.alpha3Code} href={`${country?.alpha3Code}`}><CountryCard key={index} {...country}/></Link>)}
    </div>
  )
}

export default CountryCardsWrapper