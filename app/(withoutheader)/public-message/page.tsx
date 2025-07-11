"use client"
import React, { useContext, useEffect, useState } from 'react'
import { io, Socket } from 'socket.io-client'
import Session, { useMyContext } from '../Session.'
// import { Show } from '../server'
// import SendOnline from '@/components/Send-Online'
const page = () => {
  const Session = JSON.parse(useMyContext())
  const [message, setmessage] = useState(Session.message)
  const [sokect, setsokect] = useState<Socket | null>()
  const [user, setuser] = useState("")
  // const [online, setonline] = useState(0)
  useEffect(() => {
    // SendOnline({setonline: setonline})
    const Sockets = io({ auth: Session.token })
    Sockets.on("message", function (meg) {
      setmessage((prev: any) => [...prev, meg])
      if (document.visibilityState == "hidden") {
        new Notification("Message Found", {
          body: meg.message
        })
      }
    })
    setsokect(Sockets)



  }, [])
  function Send(e: any) {
    if (user.replaceAll(" ", "") == "") {

    } else {

      setuser("")
      sokect?.emit("message", {
        userinfo: Session.user,
        message: user
      })
    }

  }
  return (
    <>
      <div className="py-20">
        {/* <h1>{online}</h1> */}
        {message.length == 0 ?
          <h1 className='text-2xl my-6 text-center'>No Message :(</h1>
          :
          message.map((e: any) => {
            if (e.userinfo.username == Session.user.username) {
              return <div key={Math.random()} className='flex px-5 justify-end my-3 items-end text-end '><img className='mx-2 rounded-full' width={50} src={`/api/images/${e.userinfo.img}`} alt="" /><div className="bg-blue-800 py-2 px-7 rounded-md text-xl text-white">{e.message}</div></div>
            } else {
              return <div key={Math.random()} className='flex px-5 justify-start my-3 items-start text-start '><img className='mx-2 rounded-full' width={50} src={`/api/images/${e.userinfo.img}`} alt="" /><div className="bg-gray-800 py-2 px-7 rounded-md text-xl text-white">{e.message}</div></div>
            }
          })
        }
      </div>
      <div className="bg-gray-900 py-4 w-full flex px-4 fixed bottom-0">
        <input value={user} onChange={(e) => setuser(e.target.value)} type="text" className='w-full' placeholder='Enter Your Message' />
        <button type='button' className='button mx-2' onClick={Send}>Send</button>
      </div>
    </>
  )
}

export default page