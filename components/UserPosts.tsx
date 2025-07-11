"use client"
import { DeletePost, FindPost, FindUser, PostComment, RemoveLike, SetLike } from '@/app/server'
import { useRouter } from 'next/navigation'
import React, { useEffect, useOptimistic, useState, useTransition } from 'react'
import Comment from './Comment'
import { toast, ToastContainer } from 'react-toastify'
import PostsChildren from './PostsChildren'

const UserPost = ({ e, session }) => {
    const [data , setdata] = useState(e)
    const [ispending , startTranstion] = useTransition()
    const [des, setdes] = useState(false)
    const router = useRouter()
    const [like, setlike] = useState(data.like)
    const [info, setinfo] = useState(false)
    const [falseorture, setfalseorture] = useState<any>()

    useEffect(() => {
        startTranstion(async()=>{
            if (!session) {

            // setmout(true)
        } else {
            async function Get() {
                const res = await FindUser(data.author.username)
                const find = res.follow.find((e)=> e == session.username)
                setinfo(find)
            }
            Get()
            const hid = () => {
                return like.find((e) => e.username == session.username)
            }
            setfalseorture(hid)
        }
        })
    }, [])
    async function rerender() {
        const res = await FindPost(data.id)
        setdata(res)
    }
    const [comment, setcommet] = useState(data.comment)
    const [opencomment, setopencomment] = useState(false)
    const [commentinput, setcommentinput] = useState("")
    let des2 = des ? data.des : data.des.slice(0, 100)
    
    return (
        <>
            <ToastContainer />
            <div className='border border-white rounded-md pt-1 my-2 w-[90%]'>
                <div className='px-2 my-2'>
                    <div className=" px-5 rounded-md py-2 justify-between w-full flex  gap-2">
                        <div className='flex gap-2'>
                            <img onClick={() => router.push(`/@${data.author.username}`)} src={`/api/images/${e.author.img}`} width={50} className='rounded-full cursor-pointer' alt="" />
                            <div>
                                <h1 className='text-xl'>{data.author.username}</h1>
                            </div>
                        </div>
                        {session ?
                            session.username == data.author.username ?
                                null
                                :
                                ispending ?

                                "loading...."
                                :
                                info ?
                                  <div>
                                    <a className='bg-blue-600 duration-500 px-6 py-2 rounded-md hover:bg-red-600 ' href={`/@${e.author.username}`}>Follow</a>
                                </div>
                                :
                                 <div>
                                    <a className='bg-blue-600 duration-500 px-6 py-2 rounded-md hover:bg-red-600 ' href={`/@${e.author.username}`}>Follow</a>
                                </div>
                            :
                            null

                        }
                    </div>
                    <div className="px-5 mt-2 mb-4">
                        <h1 className='text-gray-600 text-md my-2'>{data.date}</h1>
                        <h1 className='text-2xl my-3'>{data.title}</h1>
                        <PostsChildren des2={des2}/>
                        {!(data.des.length > 100) ? null : <><button className='text-blue-700 hover:underline duration-200' onClick={() => setdes(!des)}>{des ? "Read Less......" : "Read More...."}</button></>}
                    </div>
                </div>
                <div>
                </div>
                <video width={"100%"} src={`/api/video/${data.img.id}`} controls className='rounded--md' ></video>
                {ispending ? <h1 className='text-2xl text-center my-2'>loading...</h1> :
                  <div className="my-2 px-9 flex justify-center items-center gap-5 text-center">
                    <a href={`/posts/edit/${e.id}`}className='text-2xl gap-2 cursor-pointer hover:text-blue-700 duration-500'>{<i className='fa-solid fa-pencil mx-1'></i>} Edit</a>
                    <button onClick={async()=> {
                        await DeletePost(data.id)
                        try {
                            window.location.reload()
                        } catch (error) {
                            
                        }
                    }} className='text-2xl gap-2 cursor-pointer hover:text-blue-700 duration-500'>{<i className='fa-solid fa-trash mx-1'></i>} Delete</button>
                    <h1 onClick={() => setopencomment(!opencomment)} className='text-2xl gap-2 cursor-pointer hover:text-blue-700 duration-500'><i className="fa-solid fa-comment"></i><span className="mx-2">{comment.length}</span></h1>
                </div>
            }
                {opencomment ?
                    <div className="mt-3 px-6 bg-gray-800 py-5 rounded-b-md flex flex-col">
                        <div className='flex items-center text-center justify-center  mb-8 '>
                            <input value={commentinput} onChange={(e) => setcommentinput(e.target.value)} type="text" className='bg-gray-700 w-full h-[40px] ro-md rounded-r-none px-8 py-2' placeholder='Enter Your Comment' />
                            <button onClick={async () => {
                                if (!session) {
                                    toast.error("At First Login", {
                                        theme: "dark"
                                    })
                                } else {
                                    if (commentinput == "") {
                                        toast.error("Empty")
                                    } else {
                                        setcommentinput("")
                                        setcommet((prev)=> [...prev , {
                                            id: data.id,
                                            session,
                                            body: commentinput,
                                            date: new Date().toLocaleString(),
                                            coid: Math.floor(Math.random() * 595995),
                                            infomation: session
                                        }])
                                        await PostComment({
                                            id: data.id,
                                            session,
                                            body: commentinput,
                                            date: new Date().toLocaleString()
                                        })
                                       await rerender()
                                        // router.refresh()
                                    }
                                }
                            }} className='px-4 h-[40px]  rounded-r-md  bg-gray-600 hover:bg-red-600 duration-300'>Post</button>
                        </div>
                        {comment.length == 0 ? <h1 className='text-2xl text-center'>No Comment</h1> :
                            comment.map((f) => {


                                return (
                                    <Comment setcommet={setcommet} comment={comment} rerender={rerender} e={f} f={e} session={session} />
                                )
                            })
                        }
                    </div>
                    :
                    null
                }
            </div>
        </>
    )
}

export default UserPost