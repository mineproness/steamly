"use client"
import Foooter from '@/components/Foooter'
import Header from '@/components/Header'
import Loading from '@/components/Loading'
import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { sumbit } from '../action'

const page = () => {
  const [loading, setloading] = useState(false)
  const formRef = useRef(null)
  const toastly = (data) => {
    // console.log(data.message)
    toast(data.message)
  }
  return (
    <>
    <Header/>
      <ToastContainer />
      <div className="w-full h-[300px] flex justify-center items-center flex-col text-center mb-2  body">
        <h1 className="text-center text-3xl my-9 text-white brightness-100">Contact</h1>
        <h1 className='text-xl text-white'>You Have Any Problems Please Contact Us. </h1>
      </div>
      <form ref={formRef} onSubmit={async function (e: any) {
        e.preventDefault() 
        const ip = await fetch("https://api.ipify.org?format=json")
        const ipres = await ip.json()

        setloading(true)
        const form = new FormData(e.target)
        const data = {
          id: Math.floor(Math.random() * 2994595959),
          name: form.get("name"),
          email: form.get("email"),
          subject: form.get("subject"),
          main: form.get("main"),
          date: new Date().toString(),
          ip: ipres.ip
        }
        const datas = await sumbit(data)
        toastly(datas)
        setloading(false)

      }} className=' rounded-lg p-3 flex justify-center items-center text-center flex-col'>
        <input type="text" name='name' className='px-7 py-2 rounded-xl bg-gray-200 placeholder:text-black focus:outline-none my-2' placeholder='Enter Your Name' required />
        <input type="email" name='email' className='px-7 py-2 rounded-xl bg-gray-200 placeholder:text-black focus:outline-none my-2' placeholder='Enter Your Email' required />
        <input type="text" name='subject' className='px-7 py-2 rounded-xl bg-gray-200 placeholder:text-black focus:outline-none my-2' placeholder='Enter Your Subject' required />
        <textarea name="main" className='px-7 py-2 rounded-xl bg-gray-200 placeholder:text-black focus:outline-none my-2 w-[237px] h-[200px] min-h-[200px]' placeholder='Enter Your Problems' required></textarea>
        <button  className='bg-blue-700 rounded-xl px-8 w-[237px] py-3 hover:bg-red-500 text-white duration-500 my-6 cursor-pointer' >{loading ? <Loading/> : "Send"}</button>
      </form>
       <Foooter/>
    </>
  )
}

export default page
