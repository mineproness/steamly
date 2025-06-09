"use client"

import Foooter from '@/components/Foooter'
import Header from '@/components/Header'
import React, { useRef, useState } from 'react'
import { sendOPT, signup, checkemail } from '../action'
// import { Email } from './Email'
import Loading from '@/components/Loading'
import LoadingOPT from '@/components/LoadingOPT'
import { ToastContainer, toast } from 'react-toastify'
import cookie from 'js-cookie'
import { useRouter } from 'next/navigation'
const page = () => {
    // console.log(findpost)
    const router = useRouter()
    const emailRef = useRef(null)
    const [states, setstates] = useState("email")
    const optRef = useRef(null)
    const DivRef = useRef(null)
    const [on, seton] = useState(false)
    const [menu, setmenu] = useState("Enter Your Email To Verify")
    const [email, setemail] = useState("")
    const [useropt, setuseropt] = useState("")
    const [password, setpassword] = useState("")
    const [username, setusername] = useState("")
    const [opt, setopt] = useState(String(Math.floor(Math.random() * 10000)))
    return (
        <>
            <ToastContainer />
            <Header />
            <div className="my-2 flex justify-center items-center flex-col  ">
                <div className="my-2 w-[90%] h-[400px] max-md:justify-center shadow-2xl [box-shadow:2px_2px_10px_black] rounded-2xl ">
                    <div className='flex justify-between max-md:justify-center'>
                        <div className='style h-[400px] w-[60%] max-md:hidden flex justify-center items-center text-center flex-col'>
                            <h1 className='text-white text-2xl'>{menu}</h1>
                        </div>
                        <div className=' px-9 pr-20 max-md:pr-9'>
                            <h1 className="text-xl my-2 max-md:mt-20  max-md:flex hidden flex-col">{menu}</h1>
                            <input ref={emailRef} className="bg-gray-400 text-white my-2 max-md:mt-0 mt-20 placeholder:text-white focus:outline-none px-7 py-2 rounded-lg flex flex-col" placeholder="Enter Your Email" type="email" value={email} onChange={(e) => setemail(e.target.value)} />
                            <input ref={optRef} className="bg-gray-400 hidden text-white my-2 max-md:mt-0 mt-20 placeholder:text-white focus:outline-none px-7 py-2 rounded-lg flex-col" placeholder="Enter Your OPT" type="text" value={useropt} onChange={(e) => setuseropt(e.target.value)} />
                            <div ref={DivRef} className='flex justify-center items-center flex-col text-center' style={{ display: 'none' }}>
                                <input className="bg-gray-400 text-white my-2 max-md:mt-0 mt-20 placeholder:text-white focus:outline-none px-7 py-2 rounded-lg flex-col" placeholder="Enter Your Username" type="text" value={username} onChange={(e) => setusername(e.target.value)} />
                                {/* <br /> */}
                                <input className="bg-gray-400 text-white my-2  placeholder:text-white focus:outline-none px-7 py-2 rounded-lg flex-col" placeholder="Enter Your Password" type="text" value={password} onChange={(e) => setpassword(e.target.value)} />
                            </div>
                            <button onClick={async function () {
                                // console.log(divRef.current.innerHTML = "");
                                // console.log(email.includes("@"))
                                if (states == "email") {
                                    if (email == "" || !email || !email.includes("@")) {
                                        toast.error("Enter Your Email")
                                    } else {
                                        // console.log(opt)
                                        seton(true)
                                        await sendOPT({
                                            email: email,
                                            opt: opt,
                                        })
                                        emailRef.current.style.display = "none"
                                        optRef.current.style.display = "flex"
                                        setmenu("Enter Your OPT")
                                        seton(false)
                                        setstates("opt")
                                    }

                                } else if (states == "opt") {
                                    if (String(opt) == useropt) {
                                        toast("Email is Verifed")
                                        console.log('verfied')
                                        optRef.current.style.display = 'none'
                                        DivRef.current.style.display = 'flex'
                                        setstates("userinfo")
                                    } else {
                                        toast.error("OPT is Wrong")
                                    }
                                } else if (states == "userinfo") {
                                    if (username.split(" ").join("") == "" || !username || password.split(" ").join("") == "" || !password) {
                                        toast.error("You Are Typing Form Wrong")
                                    } else {
                                        seton(true)
                                            const id = Math.floor(Math.random() * 569060505)
                                            const signup2 = await signup({
                                                id,
                                                username,
                                                password,
                                                email,
                                                admin: false
                                            })
                                            if (signup2 == "Username is Used") {
                                                toast.error(signup2)
                                            } else {
                                                cookie.set("userid", String(id))
                                                router.push("/")
                                            }
                                        } 

                                        seton(false)
                                    
                                }
                            }} className="bg-blue-500 duration-300 text-white  rounded-xl px-[40px]  py-2">{states == "userinfo" ? "Login" : "Next" }</button>
                        </div>
                    </div>
                </div>
            </div>
            <LoadingOPT on={on} />
            <br />
            <Foooter />
        </>
    )
}

export default page