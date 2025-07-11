"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import '@/app/globals.css'
const notfound = () => {
  const router = useRouter()
  return (
    <>
      <html>
        <body className='text-white bg-black'>
          <head>
            <title>404 Not found</title>
          </head>
          <div className='flex justify-center items-center text-center flex-col w-full  h-[80vh] px-9'>
            <h1 className="text-xl text-blue-600">404</h1>
            <h1 className='mt-6  text-white text-7xl max-md:text-4xl'>404 Not Found</h1>
            <h1 className=' text-xl mt-7 text-gray-500'>Sorry, we couldn’t find the page you’re looking for.</h1>
            <div>
              <br />
              <a href='/' className='button'>Go to Home</a>
            </div>
          </div>
        </body>
      </html>

    </>
  )
}

export default notfound