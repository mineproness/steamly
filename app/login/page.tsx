"use client"
import Foooter from '@/components/Foooter'
import Header from '@/components/Header'
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { login } from '../action'
import cookie  from 'js-cookie'
import { useRouter } from 'next/navigation'
import LoadingOPT from '@/components/LoadingOPT'

const page = () => {
    const router = useRouter()
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [on, seton] = useState(false)
    return (
        <>
            <ToastContainer />
            <Header />
            <div className="my-2 flex justify-center items-center flex-col  ">
                <div className="my-2 w-[90%] h-[400px] max-md:justify-center shadow-2xl [box-shadow:2px_2px_10px_black] rounded-2xl ">
                    <div className='flex justify-between max-md:justify-center'>
                        <div className='style h-[400px] w-[60%] max-md:hidden flex justify-center items-center text-center flex-col'>
                            <h1 className='text-white text-2xl'>Enter Username And Password</h1>
                        </div>
                        <div className=' px-9 pr-20 max-md:pr-9'>
                            <h1 className="text-xl my-2 max-md:mt-20  max-md:flex hidden flex-col">Enter Username And Password</h1>
                           <input value={username} onChange={(e)=> setusername(e.target.value)} type="text" className="max-md:my-0 mt-20 my-2 bg-gray-300 flex flex-col placeholder:text-white focus:outline-none px-7 py-2 rounded-xl" placeholder='Enter Your Username' />
                           <input value={password} onChange={(e)=> setpassword(e.target.value)} type="text" className=" my-2 bg-gray-300 flex flex-col placeholder:text-white focus:outline-none px-7 py-2 rounded-xl" placeholder='Enter Your Password' />
                                 
                            <button onClick={async function () {
                               if(username == "" || !username || password == "" || !password){
                                 toast.error("Enter Your Form")
                               }else{
                                seton(true)
                                 const res = await login({
                                    "username": username,
                                    "password": password
                                 })
                                 if(res.message == "Username Or Password Was Wrong"){
                                    toast.error(res.message)
                                    seton(false)
                                 }else{
                                    // cookie.set("userid" , String(res.datauser.id))
                                    toast.done(res.message)
                                    router.push("/")
                                    seton(false)
                                 }
                               }
                            }} className="bg-blue-500 duration-300 text-white  rounded-xl px-[40px]  py-2">Login</button>
                        </div>
                    </div>
                </div>
            </div>
            <LoadingOPT on={on} />
            <br />
            <Foooter />
        </>
    )
}

export default page