import { findcontact } from '@/app/action'
import React from 'react'

const JsonCompoents = async ({ params }) => {
   const res = await findcontact(Number(params.id))
//    console.log(res)
  return (
    <>
      <div className="px-9 py-2 flex justify-center items-center  flex-col">
        <h1 className='text-2xl'>JSON Data</h1>
        <h1 className="text-xl">{JSON.stringify(res , null , 2)}</h1>
        <div className="mt-20 my-2 text-xl">
            <h1 className="text-2xl">Body</h1>
            <h1 className="my-2">{res.body}</h1>
        </div>
      </div>
    </>
  )
}

export default JsonCompoents