"use client"
import React, { useEffect } from 'react'
import { io } from 'socket.io-client'


let sokect = io()

const HandleStatus = ({ GetInfomationUser }) => {
  useEffect(()=>{
    if(!GetInfomationUser){
        
    }else{
        sokect.emit("Online" , GetInfomationUser.token)
    }
    window.addEventListener("beforeunload" , function(){
        if(!GetInfomationUser){
        
    }else{
        sokect.emit("dis" , GetInfomationUser.token)
     }
    })
  } , [])
  return null
}

export default HandleStatus