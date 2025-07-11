"use client"
import { DeleteComment } from '@/app/server'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Comment = ({ e, session,  Update, f , rerender , setcommet , comment }: any) => {
  const router = useRouter()
  const [options, setoptions] = useState(false)
  // console.log(e);
  
  return (
    <>
      <div className="border border-gray-700 w-full px-7 p rounded-md my-2">
        <div className="flex justify-end items-end text-end flex-col relative h-[30px]">
          {session ?
             f.author.username == session.username ?
             <>
               <button className='text-xl cursor-pointer' onClick={()=> setoptions((pre)=> !pre)} >•••</button>
                {options ?
                <div className="my-6 bg-gray-600 absolute rounded-md">
                  <button onClick={async ()=>{
                    const filted = comment.filter((f)=> f.coid !== e.coid)
                    setcommet(filted)
                    setoptions(false)

                    const res = await DeleteComment({
                      id: f.id,
                      coid: e.coid
                    })
                    Update()
                    // router.refresh()
                  }} className='px-9 py-2 rounded-md hover:bg-red-700 duration-200'>Delete</button>
                </div>
                :
                null}
              </>
             :
             session.username == e.infomation.username ?
              <>
               <button className='text-xl cursor-pointer' onClick={()=> setoptions((pre)=> !pre)} >•••</button>
                {options ?
                <div className="my-6 bg-gray-600 absolute rounded-md">
                  <button onClick={async ()=>{
                    const filted = comment.filter((f)=> f.coid !== e.coid)
                    setcommet(filted)
                    setoptions(false)

                    const res = await DeleteComment({
                      id: f.id,
                      coid: e.coid
                    })
                    rerender()
                    // router.refresh()
                  }} className='px-9 py-2 rounded-md hover:bg-red-700 duration-200'>Delete</button>
                </div>
                :
                null}
              </>

              :
              null
            :
            null

          }
        </div>
        <div className='flex gap-2 items-center'>
          <img src={`/api/images/${e.infomation.img}`} width={40} className='rounded-full' alt="" />
          <h1 className='hover:underline duration-150 hover:text-blue-600 cursor-pointer' onClick={() => router.push(`/@${e.infomation.username}`)}>@{e.infomation.username}</h1>
        </div>
        <h1 className='text-gray-600 my-1'>{e.date}</h1>
        <h1 className="mb-5  text-xl">{e.body}</h1>
      </div>
    </>
  )
}

export default Comment