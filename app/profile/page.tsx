// "use client"
import React from 'react'
import { finduser } from '../action'
import datauser from '@/lib/datauser'
// import Loading from '@/components/Loading'
import userdata from '@/types/Userdata'
import Header from '@/components/Header'
import Foooter from '@/components/Foooter'
import User from './User'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { Metadata } from 'next'
export const metadata : Metadata = {
  title: "Profile"
}
export const revalidate = 0;
const page = async () => {
  const cookiedata = await (await cookies()).get("userid")
  // console.log(cookiedata)
  
  if(!cookiedata){ return (
    <div className="w-full flex justify-center items-center flex-col text-center">
       <h1 className='text-2xl text-red-600 mt-36'>You Are Not Logined</h1>
       <Link href="/login" className='hover:text-purple-700 duration-300 underline my-2'>Go To Login</Link>
    </div>
  )}else{
    const userdata = await finduser(Number(cookiedata.value))
  return (
    <>
     <Header/>
      <User userdata={userdata}/>
      <br />
      <br />
      <Foooter/>
    </>
  )
}
}

export default page