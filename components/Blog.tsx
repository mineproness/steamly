import { API_URL } from '@/lib/GetAllValue'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'



const Blog = ({ e } : any) => {
  // console.log(e.title.length)
  return (
    <div className='bg-gray-300 max-md:w-[320px] max-lg:w-[40%] w-[40%]  h-[500px] rounded-xl'>
      <img src={`${API_URL}/images${e.img}`} width={"100%"} className='rounded-t-xl' alt={e.id}  />
      <div className="px-9 my-5">
        <h1 className='text-2xl'>{e.title.slice(0 , 32)}  {e.title.length > 32 ? "....." : ""}</h1>
        <h1 className='mt-3 bg-gray-200 px-8 py-3 rounded-xl text-black'>No Need Credit Card</h1>
        <div className=' flex w-full justify-center items-center text-center '>
            <a className='mt-5 bg-blue-700 hover:backdrop-shadow border-2 border-blue-700 text-white hover:[box-shadow:2px_2px_20px_blue] backdrop-blur-md  duration-500 rounded-xl px-9 py-2'  href={`/blog/${e.path}`}>Get Your Gift Cards Now</a>
        </div>
      </div>
    </div>
  )
}

export default Blog
