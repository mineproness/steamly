
"use client"
import { Finduser, FindUser } from '@/app/server'
import HandleUpdate from '@/components/HandleUpdate'
import { useRouter } from 'next/navigation'
import React, { use, useEffect, useState } from 'react'

const page = ({ params }) => {
    const { username }: { username: string } = use(params)
    const usernames = username.replace("%40", "").replaceAll("%20" , " ")
    const [followers, setfollowers] = useState([])
    const [mout, setmout] = useState(false)
    const [follwing, setfollwing] = useState([])
    useEffect(() => {
        async function Get() {
                const user = await Finduser(usernames)


                await user?.follow.map(async (e) => {
                    const res = await Finduser(e)
                    setfollowers((prev) => [...prev , res])
                    setTimeout(() => setmout(true))

                })

                await user?.follwing.map(async (e) => {
                    const res = await Finduser(e)
                    setfollwing(prev => [...prev, res])

                    setTimeout(() => setmout(true))
                })
            
         setmout(true)

        }
        Get()
    }, [])
    const router = useRouter()
    return (
        mout ?

            <>    <HandleUpdate/>
            
                <br />
                <div className="mx-2 px-8 my-4">
                    <h1 className="text-xl text-gray-400">Followers: {followers.length}</h1>
                    <div className="border-t border-t-gray-700 my-2">
                        {followers.length == 0 ?
                            <h1 className='text-xl text-center my-9'>No Followers</h1>
                            :
                            followers.map((e) => {
                                return (
                                    <div onClick={() => {
                                        router.push(`/@${e.username}`)
                                    }} key={e.id} className='h-[50px] border cursor-pointer my-2 border-white px-9 py-2 rounded-md flex items-center justify-between'>
                                        <img src={`/api/images/${e.img}`} alt={e.id} className='rounded-full' width={40} />
                                        <h1 className='text-xl'>{e.username}</h1>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
                <div className="mx-2 px-8 my-4 mt-9">
                    <h1 className="text-xl text-gray-400">Following: {follwing.length}</h1>
                    <div className="border-t border-t-gray-700 my-2">
                        {follwing.length == 0 ?
                            <h1 className='text-xl text-center my-9'>No Following</h1>
                            :
                            follwing.map((e) => {
                                return (
                                    <div onClick={() => {
                                        router.push(`/@${e.username}`)
                                    }} key={e.id} className='h-[50px] border cursor-pointer my-2 border-white px-9 py-2 rounded-md flex items-center justify-between'>
                                        <img src={`/api/images/${e.img}`} alt={e.id} className='rounded-full' width={40} />
                                        <h1 className='text-xl'>{e.username}</h1>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </>
            :
            <div className='flex justify-center items-center flex-col text-center mt-32'><div className='border-t-2 border-t-transparent border-white border-2 animate-spin w-[50px] h-[50px] rounded-full'></div></div>
    )
}

export default page