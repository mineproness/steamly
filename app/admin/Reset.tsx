"use client"
import React, { useState } from 'react'
import { ResetAll } from './admin_actions'
// import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'

const Reset = () => {
  const [reload, setreload] = useState(false)
  const router = useRouter()
  return (
    <>
      <div className="flex justify-center items-center flex-col text-center" >
        <button onClick={async function () {
          setreload(true)
          await ResetAll()
          setInterval(() => {
            setreload(false)
          }, 3000)
          //    redirect("/")
          router.prefetch("/admin")
          // router.("/admin")
          router.refresh()
        }} className='text-xl bg-blue-700 duration-300 px-9 py-2 hover:bg-red-600 rounded-xl text-white'>Reset All Views <i className={`fa-solid fa-refresh ${reload ? "animate-spin" : ""}`}></i></button>
      </div>
    </>
  )
}

export default Reset