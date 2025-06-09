"use client"
import React from 'react'

const error = ({ error , reset }) => {
    console.log(String(error))
  return (
    <>
     <div className="flex justify-center items-center text-center flex-col h-[80vh]">
        <h1 className="text-3xl ">Opps! Something was wrong :(</h1>
        <h1 className="text-xl text-red-600 px-20">Our Backend Was Problems. This Cause When Database is Disconnected. Or database is broken</h1>
        <button className='bg-red-700 hover:bg-blue-700 duration-300 px-8 py-3 rounded-xl my-5 text-white' onClick={reset}>Try Again</button>
     </div>
    </>
  )
}

export default error