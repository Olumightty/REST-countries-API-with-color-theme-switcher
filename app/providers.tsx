'use client'
import React from 'react'
import { ThemeProvider} from 'next-theme'

const Providers = ({children}: {children: React.ReactNode}) => {

  return (
    <ThemeProvider attribute='class' defaultTheme='system'>
      {children}
    </ThemeProvider>
  )
}

export default Providers