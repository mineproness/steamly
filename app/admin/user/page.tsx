import React from 'react'
import { getallusers } from '../admin_actions'
import Delete from './Delete'

const page = async () => {
    const alluser = await getallusers()
    //    console.log(alluser)
    return (
        <>
            <br />
            <div className="flex flex-col px-9 my-4">
                {alluser.map((e) => {
                    return (
                        <div key={e.id} className="flex justify-center items-center my-4 text-center flex-col bg-blue-100 w-full py-4 rounded-md">
                            <i className="fa-solid fa-user text-4xl"></i>
                            <h1 className="mt-3 text-2xl">{e.username}</h1>
                            <h1 className="my-2 text-xl">{e.email}</h1>
                            <h1 className=" text-xl">Admin: {String(e.admin)}</h1>
                            <Delete id={e.id}/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default page