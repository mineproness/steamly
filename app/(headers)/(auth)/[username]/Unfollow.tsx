"use client"
import React, { useTransition } from 'react'
import { Follow, unfollow } from '@/app/server'
import { useRouter } from 'next/navigation'
import { io } from 'socket.io-client'
const Sokect = io()
const Unfollow = ({id , fid , username , fusername}) => {
   const [ispending , startTranstion] =  useTransition()
   const router = useRouter()
  return (
    <>
       <button onClick={()=>{
         startTranstion(async ()=>{
           await unfollow({id , fid , username , fusername})
           Sokect.emit("update", "Mineproness")
           router.refresh()
          })
       }} className='bg-red-700 duration-300 px-8 py-2 rounded-md hover:bg-blue-700' disabled={ispending} >{ispending ? "loading..." : "Unfollow"}</button>  
    </>
  )
}

export default Unfollow