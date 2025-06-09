import { Metadata } from 'next'
import React from 'react'

export const metadata : Metadata = {
 title: {
    absolute: "Blog is Not Found",
    default: "Blog is Not Found"
 }
}

const notfound = () => {
  return (
    <>
     <div className="flex justify-center items-center text-center flex-col h-[80vh]">
        <h1 className='text-3xl my-2 text-red-700'>404 Not Found</h1>
        <h1 className='text-xl'>Seems Blog is Not Exist Or Removed</h1>
     </div>
    </>
  )
}

export default notfound
