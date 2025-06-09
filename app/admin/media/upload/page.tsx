"use client"
import React, { useState } from 'react'
import { uploadfile } from '../../admin_actions'
import { ToastContainer, toast } from 'react-toastify'
import '@/app/admin/upload/upload.css'

const page = () => {
    const [file, setfile] = useState(null)
    const [copy, setcopy] = useState(false)
    const [ramdom, setramdom] = useState(Math.floor(Math.random() * 29399596969))
    return (
        <>
            <ToastContainer />
            <br />
            <h1 className='text-2xl text-center my-8'>Upload Your Image Here. Then Copy The Img Code For Posts</h1>
            <div className='flex justify-center text-center flex-col px-32'>
                <input className='input' type="file" onChange={(e) => setfile(e.target.files)} />
                <button className='button my-2' onClick={async (e) => {
                    if (!file) {
                        toast.error("Upload The File")
                    } else {
                        if (file.length == 1) {
                            const ram = Math.floor(Math.random() * 29399596969)
                            setramdom(ram)
                            // console.log(ram)
                            const base64: any = await base64converter(file[0])
                            const withouturl = await base64.replaceAll("data:image/png;base64,", "")
                            await uploadfile({
                                filename: ram,
                                base64: withouturl
                            })

                            setcopy(!copy)
                        } else {
                            file.map(async (e) => {
                                const ram = Math.floor(Math.random() * 29399596969)
                                setramdom(ram)
                                // console.log(ram)
                                const base64: any = await base64converter(e)
                                const withouturl = await base64.replaceAll("data:image/png;base64,", "")
                                await uploadfile({
                                    filename: ram,
                                    base64: withouturl
                                })

                                setcopy(!copy)
                            })
                        }
                    }
                }}>Upload</button>
            </div>
            <div popover='auto' className={`${copy ? "flex" : "hidden"} justify-center items-center text-center flex-col h-full w-full bg-[#00000063]`}>
                <div className='w-[300px] h-[400px] bg-gray-700 text-white rounded-xl px-9 py-3'>
                    <h1 className="text-center mt-32 text-xl">Remembar This Img Code For Posts</h1>
                    <div className="px-2 bg-gray-600 rounded-xl p-5 my-5 cursor-pointer" onClick={function () {
                        try {
                            navigator.clipboard.writeText(`/${ramdom}.png`)
                        } catch (err) {
                            console.log("")

                        }
                        toast.success("Copy is Success")
                        // Notification.requestPermission()
                    }}><h1>/{ramdom}.png</h1></div>
                    <i className="fa-solid fa-xmark text-xl hover:text-blue-700 duration-500 cursor-pointer" onClick={function () {
                        setcopy(!copy)
                    }}></i>
                </div>
            </div>
        </>
    )
}

export default page




async function base64converter(file) {
    return new Promise((resolv, reject) => {
        const render = new FileReader()
        render.readAsDataURL(file)
        render.onload = function () {
            resolv(render.result)
        }
        render.onerror = function (err) {
            reject(err)
        }
    })
}