"use client"
import React, { useState } from 'react'
import Logo from './Logo'
// import a from 'next/a'
import { usePathname } from 'next/navigation'
import allPaths from '@/lib/allPaths'
import datauser from '@/lib/datauser'
const Header = () => {
    const [menu, setmenu] = useState(false)
    const [animate, setanimate] = useState(false)
    return (
        <>
            <div className='bg-[#b4b4b48f] backdrop-blur-lg w-full flex justify-between sticky top-0 z-10 px-9 py-3 items-center text-center' >
                <div>
                    <Logo />
                </div>
                <div>
                    <ul className='gap-3 flex max-md:hidden'>
                        <li>
                            <a className='text-xl hover:text-blue-600 duration-500' href="/">Home</a>
                        </li>
                        <li>
                            <a className='text-xl hover:text-blue-600 duration-500' href="/about">About</a>
                        </li>
                        <li>
                            <a className='text-xl hover:text-blue-600 duration-500' href="/contact">Contact</a>
                        </li>
                        <li>
                            <a className='text-xl hover:text-blue-600 duration-500' href="/blog">Blog</a>
                        </li>
                        {!datauser() ?
                            <>
                                <li>
                                    <a className='text-xl hover:text-blue-600 duration-500' href="/login">Login</a>
                                </li>
                                <li>
                                    <a className='text-xl hover:text-blue-600 duration-500' href="/signup">Signup</a>
                                </li>
                            </>
                            :
                            <>
                                <li>
                                    <a className='text-xl hover:text-blue-600 duration-500' href="/logout">Logout</a>
                                </li>
                                <li>
                                    <a className='text-xl hover:text-blue-600 duration-500' href="/profile">Profile</a>
                                </li>
                            </>
                        }
                    </ul>
                    <i onClick={() => setmenu(!menu)} className="fa-solid fa-bars cursor-pointer text-xl hover:text-blue-700 duration-300 hidden max-md:flex"></i>
                </div>
            </div>
            {menu ?
                <div popover='auto' className={`z-50 rounded-xl animate flex h-[99%] w-[99%] bg-[#b9b9b9b2] backdrop-blur-xl justify-center flex-col text-center items-center ${animate ? "animate2" : ''}`}>
                    <i className="fa-solid fa-xmark cursor-pointer text-2xl hover:text-blue-700 duration-300 my-3" onClick={() => {
                        setanimate(true)
                        setTimeout(() => {
                            setanimate(false)
                            setmenu(false)
                        }, 1000)
                    }}></i>
                    <ul>
                        <li>
                            <a className='text-2xl hover:text-blue-600 duration-500' href="/">Home</a>
                        </li>
                        <li>
                            <a className='text-2xl hover:text-blue-600 duration-500' href="/about">About</a>
                        </li>
                        <li>
                            <a className='text-2xl hover:text-blue-600 duration-500' href="/contact">Contact</a>
                        </li>
                        <li>
                            <a className='text-2xl hover:text-blue-600 duration-500' href="/blog">Blog</a>
                        </li>
                        {!datauser() ?
                            <>
                                <li>
                                    <a className='text-2xl hover:text-blue-600 duration-500' href="/login">Login</a>
                                </li>
                                <li>
                                    <a className='text-2xl hover:text-blue-600 duration-500' href="/signup">Signup</a>
                                </li>
                            </>
                            :
                            <>
                                <li>
                                    <a className='text-xl hover:text-blue-600 duration-500' href="/logout">Logout</a>
                                </li>
                                <li>
                                    <a className='text-xl hover:text-blue-600 duration-500' href="/profile">Profile</a>
                                </li>
                            </>
                        }
                    </ul>
                </div>
                :
                null
            }
        </>
    )
}

export default Header
