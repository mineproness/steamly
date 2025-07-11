"use client"
import { GetGOOGLE_ID } from '@/lib/Get'
import React, { useState, useTransition } from 'react'
// import { Signup, UploadImage } from '../server'
import { toast, ToastContainer } from 'react-toastify'

const page = () => {
    const [isPending, startTransition] = useTransition()
    const [file, setfile] = useState(null)
    const [token, settoken] = useState(Math.floor(Math.random() * 9999600505444))
    return (
        <>
            <ToastContainer />
            <br />
            <div className='flex justify-center items-center text-center flex-col h-[90vh]'>
                <div className="w-[300px] h-[300px] flex  flex-col   px-8 bg-gray-900 rounded-md">
                        <>
                          <img src="/logo.png" alt="logo" className='img my-6' />
                          <h1 className="text-white text-2xl mb-7">Create And Share Your Videos</h1>
                         <button onClick={async ()=>{
                            
                              
                                const clientId = await GetGOOGLE_ID()
                                const redirectUri = "http://localhost:3000/api/auth/callback";
                                const scope = "email profile openid";
                                const state = "random_csrf_token"; // optional but recommended
                                const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}&access_type=offline&state=${state}&prompt=consent`;
                            
                                window.location.href = url;
    
                         }} className='button w-[250px] mt-44'>Login With Google <i className="fa-brands fa-google mx-1"></i></button>
                         {/* <button onClick={()=> setemail(!email)} className='button w-[250px]'>Login With Email  <i className="fa-solid fa-envelope mx-2 "></i></button> */}
                        </>
                    

                </div>
            </div>
        </>
    )
}

export default page

