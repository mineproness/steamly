"use client"
import React, { useTransition } from 'react'
import { Follow } from '@/app/server'
import { useRouter } from 'next/navigation'
import { io } from 'socket.io-client'
const Sokect = io()
const Button = ({id , fid , username , fusername}) => {
   const [ispending , startTranstion] =  useTransition()
   const router = useRouter()
  return (
    <>
       <button onClick={()=>{
         startTranstion(async ()=>{
           await Follow({id , fid , username , fusername})
           Sokect.emit("update", "Mineproness")
            router.refresh()

          })
       }} className='bg-blue-700 duration-300 px-8 py-2 rounded-md hover:bg-red-700' disabled={ispending} >{ispending ? "loading..." : "Follow"}</button>  
    </>
  )
}

export default Button