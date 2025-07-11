"use client"

import { usePathname , useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { revalidatePath } from 'next/cache'
export default function Progress(){
    const router = usePathname()
    const [rerender, setrerender] = useState(false)
    React.useEffect(()=>{
         setrerender(Math.random())
    } , [router])
    return (
        <div className='fixed top-0 z-[100000] w-full  h-[20px]'>
          <div className={`bg-blue-700 rounded-xl animate-progress h-[5px] w-[50px] ${rerender ? "flex" : "flex"}`}></div>
        </div>
    )
// }