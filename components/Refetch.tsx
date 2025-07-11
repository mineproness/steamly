"use client"



import { useRouter } from 'next/navigation'
import React from 'react'

const Refetch = () => {
  const router = useRouter()
  return (
    <>
     <button className="fixed bottom-0 m-3 bg-gray-800 w-[30px] h-[30px] rounded-full">{<i className='fa-solid fa-refresh'></i>}</button>
    </>
  )
}

export default Refetch