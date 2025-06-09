"use client"
import LoadingOPT from '@/components/LoadingOPT'
import userdata from '@/types/Userdata'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { deleteuser, updateuser } from '../action'

const User = ({ userdata }: { userdata: userdata }) => {
  // console.log(userdata.admin)//
  const [edit, setedit] = useState(false)
  const router = useRouter()
  const [on, seton] = useState(false)
  const [username, setusername] = useState(userdata.username)
  const [password, setpassword] = useState(userdata.password)
  return (
    <>
      <ToastContainer />
      <div className='flex justify-between  px-9 my-20'>
        <div>
          <i className="fa-solid fa-user text-[200px] "></i>
        </div>
        <div>
          <h1 className="text-2xl">{userdata.username}</h1>
          <h1 className="text-xl">{userdata.email}</h1>
        </div>
      </div>
      <div className="mt-32 my-2 flex justify-center items-center text-center flex-wrap gap-9">
        <button onClick={() => setedit(true)} className='bg-yellow-600 text-white hover:bg-red-700 duration-300 px-9 py-2 rounded-xl'>Edit</button>
        <button onClick={async function () {
          seton(true)
          await deleteuser(Number(userdata.id))
          router.push("/")
          seton(false)
        }} className='button'>delete</button>
        {userdata.admin == true ?
          <button className='bg-red-700 text-white duration-500 hover:bg-blue-600 px-5 py-2 rounded-xl' onClick={function () {
            router.push("/admin")
          }}>Admin DashBoard</button>
          :
          null
        }
      </div>
      {edit ?
        <div popover='auto' className="flex z-10 h-full w-full justify-center items-center text-center flex-col bg-[#00000085]">
          <div className="flex justify-center items-center text-white flex-col text-center bg-gray-800 rounded-xl px-8 py-9">
            <h1 className="my-2 text-xl">Edit Your Profile</h1>
            <input type="text" value={username} onChange={(e) => setusername(e.target.value)} className='bg-gray-500 text-white my-2  placeholder:text-white focus:outline-none px-7 py-2 rounded-lg flex flex-col' />
            <input type="text" value={password} onChange={(e) => setpassword(e.target.value)} className='bg-gray-500 text-white my-2 placeholder:text-white focus:outline-none px-7 py-2 rounded-lg flex flex-col' />
            <button onClick={async function () {               // toast.warn("You are Not Edit")
              seton(true)
              await updateuser({
                username,
                password,
                id: userdata.id,
              })
              setedit(false)
              seton(false)
              router.refresh()

            }} className='button my-2'>Save</button>

          </div>
        </div>
        :
        null
      }
      <LoadingOPT on={on} />
    </>
  )
}

export default User