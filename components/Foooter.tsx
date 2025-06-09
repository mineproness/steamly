"use client"
import { autor } from '@/lib/GetAllValue'
import React from 'react'

const Foooter = () => {
  return (
    <>
     <div className='bg-gray-300 py-5 text-center flex justify-center items-center flex-col  px-9'>
        <h1 className='text-3xl'>Copyright © By {autor}</h1>
     </div>
    </>
  )
}

export default Foooter
