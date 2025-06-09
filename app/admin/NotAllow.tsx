"use client"
import React, { useEffect, useState } from 'react'

const NotAllow = () => {
    // const [size, setsize] = useState(window.innerWidth)
    const [menus, setmenus] = useState(false)
    // console.log(window.innerWidth)
    useEffect(() => {
        try {
            if (window.innerWidth < 600) {
                setmenus(true)
            }
        } catch (error) {
            console.log("h");

        }
    }, [])

    return (
        <>
            {menus ?
                <div popover='auto' className='flex h-full w-full flex-col justify-center items-center text-center z-10 text-white bg-[#000000]'>
                    <h1 className="text-4xl">Mobile Or Smail Table Is Not Support</h1>
                </div>
                :
                null
            }
        </>
    )
}

export default NotAllow