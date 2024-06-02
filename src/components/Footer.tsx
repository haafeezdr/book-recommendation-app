import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='bg-green-950 flex justify-between items-center p-4'>
        <Image src="/assets/logo1.png" alt="logo" className="flex m-2" width={137} height={55} priority />
        <p className='text-white opacity-70 font-semibold '>Copyright Onawo 2024 All right Reserved</p>
    </div>
  )
}

export default Footer