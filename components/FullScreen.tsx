"use client"
import React, { useEffect, useState } from 'react'

const FullScreen = () => {
    const [full, setfull] = useState(document.fullscreenElement)
    function Fullmode(){
        document.documentElement.requestFullscreen()
        setfull(true)
    }
    return (
        <>
     <div className="fixed top-0 m-7 z-10 right-0">
          {full  ? null: <button onClick={Fullmode} className='bg-gray-800 max-md:flex hidden px-8 py-2 rounded-md hover:bg-red-700 z-[100000]'>{<i className='fa-solid fa-expand'></i>}</button>}
     </div>
    </>
  )
}

export default FullScreen
