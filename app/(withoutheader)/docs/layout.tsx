"use server"
import mongo from '@/lib/mongo'
import React from 'react'

const layout = async ({children}) => {
  const docs = await (await mongo()).db.collection("docs").find().toArray()
  return (
    <>
     <div className='float-start h-screen flex  px-8 flex-col w-[300px]  py-2 z-10 bg-black normal-border'>
         <h1 className='text-4xl my-3 bg-gradient-to-br to-blue-700 from-red-500 text-transparent bg-clip-text'>Docs</h1>
         {docs.map((e)=>{
            return (
                <a className='text-gray-300 text-xl hover:text-blue-700 duration-300' href={`/docs/${e.path}`}>{e.path.replaceAll("/" , "")}</a>
            )
         })}
     </div>
     <br />
     <div className="flex justify-center items-center flex-col m">
        {children}
     </div>
    </>
  )
}

export default layout
