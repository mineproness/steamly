"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast, ToastContainer } from 'react-toastify'

const Button = ({session}) => {
    const router = useRouter()
    const verfiy = (fn)=>{
        if(session.verfied){
            fn()
        }else{
            toast.error("At First Verfiy Your Profile")
        }
    }
    return (
        <>
        <ToastContainer/>
            <button onClick={()=>{
                verfiy(function(){
                   router.push("/upload")
                })
            }} className='bg-blue-600 duration-300 hover:bg-red-700 px-8 py-2 rounded-md'>Add POSTS</button>
            <button onClick={()=>{
                verfiy(function(){
                   router.push("/setting")
                   
                })
            }} className='bg-yellow-600 duration-300 hover:bg-red-700 px-8 py-2 rounded-md'>Edit Profile</button>
        </>
    )
}

export default Button