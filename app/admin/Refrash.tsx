"use client"
import React, { useState } from 'react'
// import { Redirect  } from 'next'
import { redirect, usePathname, useRouter } from 'next/navigation'
const Refrash = () => {
    const router = useRouter()
    const path = usePathname()
    const [reloadstaute, setreloadstaute] = useState(false)
    // console.log(path)
    return (
        <div className='fixed bottom-0 left-0 m-5 '>
            <button onClick={async function(){
                setreloadstaute(true)
                await router.refresh()
                setTimeout(()=>{
                       setreloadstaute(false)
                } , 5000)
            }}  className='rounded-full bg-blue-700 w-[40px] h-[40px]'><i className={`fa-solid fa-refresh text-xl ${reloadstaute ? 'animate-spin' : ""}`}></i></button>
        </div>
    )
}

export default Refrash