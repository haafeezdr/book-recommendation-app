import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='bg-green-950 flex md:flex-row flex-col justify-between items-center p-3 w-full'>
        <Image src="/assets/recommend.png" alt="logo" className="flex m-2" width={137} height={55} priority />
        <p className='text-white text-sm opacity-70 md:font-semibold font-light '>Copyright Onawo 2024 All right Reserved</p>
    </div>
  )
}

export default Footer