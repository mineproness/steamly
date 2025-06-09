import Foooter from '@/components/Foooter'
import Header from '@/components/Header'
import React from 'react'

const notfound = () => {
  return (
    <>
    <Header/>
     <div className='flex justify-center items-center text-center flex-col h-[70vh]'>
        <span className='text-4xl'>404 <span className="mx-2">:(</span></span>
        <h1 className="text-xl my-9">Seems Page Does Not Exist</h1>
     </div>
     <Foooter/>
    </>
  )
}

export default notfound
