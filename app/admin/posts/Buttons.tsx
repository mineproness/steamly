"use client"
import React from 'react'
import { DeletePOST, Resetallposts } from '../admin_actions'
import { ToastContainer , toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

const Buttons = ({e}) => {
    // console.log(e)
    const router = useRouter()
  return (
    <>
    <ToastContainer/>
     <div className='flex gap-6 justify-center text-center items-center flex-wrap mt-7'>
        <i onClick={function(){
              router.push(`/admin/posts/edit/${e.id}`)
        }} className="fa-solid fa-pencil text-xl hover:text-blue-700 cursor-pointer duration-300"></i>
        <i onClick={async function () {
            await DeletePOST(e.id)
            toast.warn("POST WAS DELETE")
        }} className="fa fa-trash text-xl hover:text-blue-700 cursor-pointer duration-300"></i>
         <i onClick={async function () {
            await Resetallposts(e.id)
            toast.warn("POST WAS RESET")
            // if(!window == undefined){
            //   document.querySelector(".fa-refresh").classList.add = "animate-spin"
            // }
        }} className="fa fa-refresh text-xl hover:text-blue-700 cursor-pointer duration-300"></i>
     </div>
    </>
  )
}

export default Buttons