"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { io, Socket } from 'socket.io-client'

const HandleUpdate = () => {
//   const [sokect, setsokect] = React.useState<Socket | null>()
  const router = useRouter()
    const SokectIO = io();
    SokectIO.on("update" , function(){
        router.refresh()
    })
    // setsokect(SokectIO)
  return null
}

export default HandleUpdate
