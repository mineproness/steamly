"use client"
import { usePathname, useRouter } from 'next/navigation'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Suspense, useEffect, useState } from 'react'
import Tabs from './Tabs'
import { io, Socket } from 'socket.io-client'

const More = ({ pathname, session, change }) => {
  const link = [

    {
      path: "/posts/analytics",
      title: "Analytics",
      icon: "fa-chart-mixed"
    }, {
      path: "/public-message",
      title: "Public Message",
      icon: "fa-comment"
    },
    {
      path: "/posts",
      title: "Posts",
      icon: "fa-plus",

    },

  ]

  return (
    <div popover={"auto"} className='flex z-10 w-full h-full bg-[#0000008a] justify-center items-center flex-col'>
      <div className="text-white bg-gray-800 w-[300px] h-[400px] rounded-md p-7 text-2xl">
        <i onClick={change} className="fa-solid fa-xmark text-start cursor-pointer"></i><br />
        <div className="flex justify-center items-center my-1 flex-col gap-2">
          {link.map((e) => {
            return <Atag session={session} path={e.path} pathname={pathname} title={e.title} icon={e.icon} />
          })}
        </div>
      </div>
    </div>
  )
}

const A = ({ pathname, session, path, icon, title }: { pathname: string, path: string, icon: string, title: string, session: any }) => {
  const active = pathname == path
  const router = useRouter()
  if (session.userid) {
    if (title == "Login" || title == "Signup") {
      return null
    }
  } else {
    if (title == "Profile" || title == "Logout" || title == "Upload" || title == "Posts" || title == "Analytics") {
      return null
    }
  }
  if (active) {
    return (
      <span className={`${active ? "a-active" : "a"}  flex flex-col items-center text-center justify-center`}><i className={`fa-solid ${icon} `}></i>{title}</span>
    )
  } else {
    return (
      <a href={path} onClick={(e)=>{
        e.preventDefault()
        router.push(path)
      }} className={`${active ? "a-active" : "a"} flex flex-col items-center text-center justify-center`}><i className={`fa-solid ${icon} `}></i>{title}</a>
    )
  }
}

const Atag = ({ pathname, session, path, icon, title }: { pathname: string, path: string, icon: string, title: string, session: any }) => {
  const active = pathname == path
  const router = useRouter()
  if (session.userid) {
    if (title == "Login" || title == "Signup") {
      return null
    }
  } else {
    if (title == "Public Message" || title == "Profile" || title == "Logout" || title == "Upload" || title == "Posts" || title == "Analytics") {
      return null
    }
  }
  if (active) {
    return (
      <span className={`${active ? "a-active" : "a"}`}><i className={`fa-solid ${icon} mr-2`}></i>{title}</span>
    )
  } else {
    return (
      <a href={path} onClick={(e)=>{
        e.preventDefault()
        router.push(path)
      }} className={`${active ? "a-active" : "a"}`}><i className={`fa-solid ${icon} mr-2`}></i>{title}</a>
    )
  }
}

const Header = ({ session, GetInfomation }: any) => {
  const path = usePathname()
  const router = useRouter()
  const [socket, setsocket] = useState<Socket | null>()
  useEffect(() => {
    const SocketIO = io()
    setsocket(SocketIO)
    return () => {
      SocketIO.emit("disconnect", 88858595959)
    }
  }, [])
  const link = [
    {
      path: "/",
      title: "Home",
      icon: "fa-house"
    },
    {
      path: "/profile",
      title: "Profile",
      icon: "fa-user",

    },
    {
      path: "/upload",
      title: "Upload",
      icon: "fa-square-plus",

    },


    ,
    {
      path: "/login",
      title: "Login",
      icon: "fa-user",

    },


  ]
  const [more, setmore] = useState(false)
  return (
    <>
      <div className=' w-[20%] float-left sticky top-0 normal-border h-[100vh] max-lg:hidden'>
        <div className="my-2 text-white px-3">
          <img src="/logo.png" alt="Logo" width={180} height={100} className='img my-3' />
          <div className="px-9 flex flex-col">
            {link.map((e) => {
              return <Atag session={session} path={e.path} pathname={path} title={e.title} icon={e.icon} />
            })}
            <a href='#open' className='hover:text-blue-700 duraiton-300' onClick={(e) => {
              e.preventDefault()
              setmore(true)
            }}><i className="fa-solid fa-bars mr-2"></i>More Options</a>
          </div>
          {GetInfomation ?
            <div className="border border-white rounded-md  flex-row-reverse py-2 px-5 items-center fixed bottom-0 w-[18%] right-0 left-0 m-2 flex justify-between">
              <img onClick={() => {
                router.push("/profile")
              }} src={`/api/images/${GetInfomation.img}`} alt={GetInfomation.id} className=' cursor-pointer rounded-full' width={30} />
              <h1 className='text-xl'>{GetInfomation.username}</h1>
            </div>
            :
            null
          }
        </div>

      </div>
      <div className="max-lg:flex z-10 hidden fixed bottom-0 bg-gray-950 border-t gap-5 border-gray-700 w-full py-2 items-center justify-center">
        {link.map((e) => {
          return <A session={session} path={e.path} pathname={path} title={e.title} icon={e.icon} />
        })}
        <a href='#open' className='hover:text-blue-700 flex justify-center items-center text-center flex-col duraiton-300' onClick={(e) => {
          // e.preventDefault()
          setmore(true)
        }}><i className="fa-solid fa-bars mr-2"></i>More Options</a>
      </div>
      {more ? <More change={function () {
        setmore(false)
      }} pathname={path} session={session} />
        :
        null
      }
      <Tabs />
    </>
  )
}

export default Header
