"use client"
import React, { useState, useTransition } from 'react'
import { UploadPost } from '@/app/server'

interface initzaldata {
    id: Number
    title: string,
    des: string,
    img: any,
    author: any,
    date: string,
    comment: []
    like: any
}



const Upload = ({ session }) => {
    const initzaldata: initzaldata = {
        id: Math.floor(Math.random() * 59606660606069),
        title: "",
        des: "",
        img: "",
        author: session,
        date: new Date().toString(),
        comment: [],
        like: [],
    }
    const [formdata, setformdata] = useState(initzaldata)
    const changestate = (e: any) => {
        const { value, name, files } = e.target
        if (name == "img") {
            setformdata((prev) => ({
                ...prev,
                [name]: files[0]
            }))
        } else {
            setformdata((prev) => ({
                ...prev,
                [name]: value
            }))
        }
    }
    const [ispeding, start] = useTransition()
    return (
        <>
            <br />
            <h1 className='my-5 text-center text-2xl'>Upload</h1>
            <div className="my-2 flex flex-col  px-8">
                <form onSubmit={(e) => {
                    e.preventDefault()
                        start(async () => {
                           await UploadPost(formdata)
                           try {
                            window.location.replace("/posts")
                           } catch (error) {
                            
                           }
                        })
                    }}>
                    <input  accept='videos' onChange={changestate} type="file" name="img" id="" placeholder={""} className='w-full' />
                    <input value={formdata.title} onChange={changestate} type="text" name='title' required placeholder='Enter Your Title Of Post' className='w-full placeholder:text-gray-500' />
                    <textarea value={formdata.des} onChange={changestate} rows={15} required name='des' placeholder='Enter Your Html Of Post' className='w-full placeholder:text-gray-500'></textarea>
                    <button  className='button bg-gray-800' disabled={ispeding}>{ispeding ? "Uploading...." : "Upload"}</button>
                </form>
            </div>
        </>
    )
}

export default Upload