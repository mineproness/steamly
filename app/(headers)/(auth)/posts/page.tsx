"use client"
import React, { cache, useEffect, useState } from 'react'
import { GetInfomationUser, Getpost, GetSession } from '@/app/server'
import UserPost from '@/components/UserPosts'
import deleteid from '@/lib/deleteid'

const user = cache(GetInfomationUser)

const page = () => {
    const [posts, setposts] = React.useState([])
    const [session, setsession] = useState({})
    const [not, setnot] = useState(false)
    React.useEffect(() => {
    
        
        async function Getposts() {
            const session2 = await user()
            setsession(session2)
            const infomation = await Getpost(session2.username)
            if (infomation.length == 0) {
                setnot(true)
            }
            
            setposts((prev)=> [...prev , ...infomation.map((e)=> ({
                ...e,
            }))])
        }
        Getposts()
    }, [])
    return (
        <>
        
            {posts.length == 0 ?
                not ?

                    <div className='flex justify-center items-center text-center flex-col h-[80vh]'>
                      <h1 className='text-xl px-8'>You Are Not Uploading Posts</h1>
                    </div>
                    :
                    <div className='flex justify-center items-center text-center flex-col h-[80vh]'>
                        <div className="border-2 border-white border-t-transparent w-[40px] h-[40px] rounded-full animate-spin"></div>
                    </div>
                :
                <div className="flex justify-center items-center flex-col">
                    {posts.map((e) => (
                        <UserPost e={e} session={session} key={e.id} />
                    ))}
                </div>
            }
        </>
    )
}

export default page