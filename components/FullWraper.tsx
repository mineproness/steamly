"use client"

import React from 'react'
import dynamic from 'next/dynamic'

export default function FullWraper(){
    const FullScreen = dynamic(()=> import("./FullScreen") , {
        ssr: false,
    })
    return <>
     <FullScreen/>
    </>
}