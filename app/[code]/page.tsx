import React from 'react'
import countries from '@/public/data.json'

import { IoMdArrowBack } from 'react-icons/io'
import Image from 'next/image'
import CountryButton from '../components/CountryButton'
import Link from 'next/link'

const CountryDetailsPage = async({params}: {params: Promise<{code: string}>}) => {
  
  const {code} = await params
   const country = countries.find((country) => country.alpha3Code.toLowerCase() == code.toLowerCase())
   if(country) return (
    <div className='p-10 lg:p-20  w-full h-[100%]'>
      <Link href={'/'}>
        <button
         className='cursor-pointer flex items-center gap-2 bg-(--light_mode_elements) dark:bg-(--dark_mode_elements) px-5 py-2 shadow-xs'>
          <IoMdArrowBack />
          <p>Back</p>
        </button>      
      </Link>

        <div className='flex flex-col lg:flex-row gap-20 xl:gap-40 items-center py-10 lg:py-20' >
            <Image
              width={600}
              height={400}
              src={country.flags.svg}
              alt={country.name}
            />
            <div>
              <h1 className='text-xl font-bold'>{country.name}</h1>
              <div className='flex gap-30 mt-5'>
                <div>
                  <p><span className='font-semibold'>Native Name:</span> {country.nativeName}</p>
                  <p><span className='font-semibold'>Population:</span> {country.population}</p>
                  <p><span className='font-semibold'>Region:</span> {country.region}</p>
                  <p><span className='font-semibold'>Sub Region:</span> {country.subregion}</p>
                  <p><span className='font-semibold'>Capital:</span> {country.capital}</p>
                </div>
                <div>
                  <p><span className='font-semibold'>Top Level Domain:</span> {country.topLevelDomain}</p>
                  <p><span className='font-semibold'>Currencies:</span> {country.currencies?.map((currency) => <span key={currency.name}>{currency.name}</span>)}</p>
                  <p><span className='font-semibold'>Languages:</span> {country.languages.map((lang) => <span key={lang.name}>{lang.name}, </span>)}</p>
                </div>
              </div>
              <div className='flex flex-wrap gap-2 items-center mt-10'>
                <p className='font-bold'>Border Countries: </p>
                {country.borders?.map((name) => <Link key={name} href={`${name}`}><CountryButton  name ={name}/></Link>)}
              </div>
            </div>

        </div>
    </div>
  )
  else return (<p>Not Found</p>)
}

export default CountryDetailsPage