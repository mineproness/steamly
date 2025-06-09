"use client"
import React, { useEffect, useState } from 'react'
import cookie from 'js-cookie'
import { finduser, getcomment, getlike } from '@/app/action'
import Loading from '@/components/Loading'
import Comment from '@/components/Comment'
import Load from '@/components/Load'
import { toast, ToastContainer } from 'react-toastify'
import delay from '@/lib/delay'
const Likes = ({ data }) => {
    const findlike = data.like.find((e) => e == cookie.get("userid"))
    const [pending, setpending] = useState(false)
    const [commit, setcommit] = useState(data.commit)
    const [peningcomment, setpeningcomment] = useState(false)
    const [userfiled, setuserfiled] = useState("")
    const [loadingcomment, setloadingcomment] = useState(true)
    const [dis, setdis] = useState(false)
    const [isopencommit, setisopencommit] = useState(false)

    const [userid, setuserid] = useState(cookie.get("userid"))
    return (
        <>
            <ToastContainer />
            <div className='flex flex-wrap justify-center items-center text-center gap-9 mt-44 mb-9'>
                <h1 className='text-2xl gap-2 flex  justify-center items-center text-center'>{findlike ?

                    <i className="fa-solid fa-thumbs-up text-3xl text-blue-700 duration-500 cursor-pointer" onClick={async function () {
                        if (userid) {
                            if (!findlike) {
                                await getlike(data.id, cookie.get("userid"))
                            }
                        } else {
                            toast.error("At First Login")
                        }
                    }}></i>
                    :
                    <i className={`fa-solid ${pending ? "fa-refresh animate-spin" : "fa-thumbs-up"}  text-3xl hover:text-blue-700 duration-500 cursor-pointer`} onClick={async function () {
                        if (userid) {
                            if (!pending) {
                                setpending(true)
                                if (!findlike) {
                                    await getlike(data.id, cookie.get("userid"))
                                    setpending(false)
                                }
                            }
                        } else {
                            toast.error("At First Login")
                        }
                    }}></i>
                }
                    {data.like.length}
                </h1>
                <h1 className='text-2xl gap-2 flex  justify-center items-center text-center'><i className={`fa-solid ${"fa-comment"}  text-3xl hover:text-blue-700 duration-500 cursor-pointer`} onClick={async function () {
                  setisopencommit(!isopencommit)
                }}></i>
                    {data.commit.length}
                </h1>
            </div>
            {isopencommit ?
                <div className="bg-blue-100 w-full  px-9">
                    <br />
                    <div className="  flex">
                        <input value={userfiled} onChange={(e) => {
                            setuserfiled(e.target.value)
                        }} disabled={dis} type="text" className='bg-gray-300 px-6 w-full h-[50px] duration-300 rounded-xl' /> <button onClick={async function () {

                            if (userid) {
                                if (userfiled == "") {

                                } else {
                                    setdis(true)
                                    const user = await finduser(Number(cookie.get('userid')))
                                    setpeningcomment(true)
                                    const json = {
                                        "body": userfiled,
                                        "date": new Date().toLocaleString(),
                                        "user": user.username,
                                        "id": Math.floor(Math.random() * 959959969696),
                                        "uid": cookie.get("userid")
                                    }
                                    await getcomment(data.id, json)
                                    setuserfiled("")
                                    setpeningcomment(false)
                                    setdis(false)
                                }
                            } else {
                                await delay(1000)
                                toast.error("At First Login")
                            }
                            // await new Promise((resolv,reject)=> setTimeout(()=>{
                            //     resolv("hi")
                            // } , 2000))
                        }} className='bg-gray-700 duration-500 hover:bg-red-700 px-7 text-white h-[50px] rounded-xl mx-2'>{peningcomment ? "loading...." : "Comment"}</button>
                    </div>
                    {data.commit.length == 0 ?
                        <div className=" flex justify-center items-center text-center flex-col">
                            <h1 className='text-2xl mt-20'>Comment Not Found :(</h1>
                        </div>
                        :
                        data.commit.map((e, idex) => {

                            return (
                                <>
                                    <Comment id={data.id} setloading={setloadingcomment} comment={e} />
                                </>
                            )
                        })

                    }
                    <br />
                </div>

                :
                null
            }
        </>
    )
}

export default Likes