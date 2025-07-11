"use client"
import { FindPost, GetInfomationUser, GetSession, UpdatePost } from '@/app/server'
import { notFound, useParams } from 'next/navigation'
import React, { cache, useTransition } from 'react'



interface Initzaldata {
    title: string,
    des: string,
    img: any,
    id: Number,
    imgid: Number
}

const user = cache(GetInfomationUser)

const page = () => {
    //#region 
    const initzaldata: Initzaldata = {
        title: "",
        des: "",
        img: null,
        id: 19955050,
        imgid: 1939495

    }
    const { id } = useParams()
    const [ispeding , start] = useTransition()
    const [formdata, setformdata] = React.useState<any>(initzaldata)
    const [isloading, setisloading] = React.useState(true)
    const [session, setsession] = React.useState({})
    const changestate = (e: any) => {
        const { name, value, files } = e.target
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
    //#endregion
    //#region 
    React.useEffect(() => {
        async function Verify() {
            const session = await GetSession()
            if (!session.userid) {
                try {
                    window.location.replace("/")
                } catch (error) {

                }
            }
        }
        async function Post() {
            const session = await user()
            const post = await FindPost(Number(id))
            setformdata({
                id: post.id,
                imgid: post.imgid,
                des: post.des,
                title: post.title,
                img: null
            })
            if (!post) {
                try {
                    notFound()
                    window.location.replace("/")
                } catch (error) {

                }
            }
            if (post.author.username == session.username) { }
            else {
                try {
                    window.location.replace("/")
                } catch (error) {

                }
            }
        }
        Post()
        Verify()
        setisloading(false)
    }, [])
    //#endregion
    return (
        <>
            {isloading ?
                <div className='flex justify-center items-center text-center flex-col h-[100vh]'>
                    <div className="border-2 border-white border-t-transparent w-[40px] h-[40px] rounded-full animate-spin"></div>
                </div>
                :
                <>
                <h1 className="my-5 text-center text-xl ">Edit Post for {formdata.id}</h1>
                    <form className='px-8 py-2' onSubmit={(e) => {
                        e.preventDefault()
                           start(async()=>{
                             await UpdatePost(formdata)
                           })
                    }}>
                        <input accept='videos' onChange={changestate} type="file" name="img" id="" placeholder={""} className='w-full' />
                        <input value={formdata.title} onChange={changestate} type="text" name='title' required placeholder='Enter Your Title Of Post' className='w-full placeholder:text-gray-500' />
                        <textarea value={formdata.des} onChange={changestate} rows={15} required name='des' placeholder='Enter Your Html Of Post' className='w-full placeholder:text-gray-500'></textarea>
                        <button className='button bg-gray-800' disabled={ispeding}>{ispeding ? "Loading...." : "Update"}</button>
                    </form>
                </>
            }
        </>
    )
}

export default page