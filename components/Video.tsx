"use client"


import React, { useRef, useEffect, useState } from 'react'

const Video = ({ src, w = "80%", h = "400px" }) => {
    const video = useRef<HTMLVideoElement>(null)
    const [vol, setvol] = useState(0)
    const [play, setplay] = useState(false)
    const [options, setoptions] = useState(false)
    const [muted, setmuted] = useState(false)
    const [progress, setprogress] = useState(0)
    function playtoggle() {
        if (play) {
            video.current.pause()
            //   setplay(false)
        } else {
            video.current.play()
        }
        setTimeout(() => setplay(!play), 100)
    }
    function Changevol(e) {
        const volvalue = parseInt(e.target.value)
        setvol(volvalue)
        console.log(volvalue);
        
        video.current.volume = "0." + volvalue 
    }
    function FullScreen() {
        video.current.requestFullscreen()
    }
    function Skip(){
        video.current.currentTime += 1000
    }
    return (
        <>
            <video onTimeUpdate={function(e){
                // console.log(video.current.currentTime);
                const currenttime = (video.current.currentTime / video.current.duration) * 100
                setprogress(currenttime)
            }} onPlay={playtoggle} src={src} width={w} height={h} ref={video} className='rounded-t-sm mt-3'>
            </video>
            <div style={{ width: w }} className='h-[10px] bg-[#1f1e1e] flex'>
                <div className="bg-blue-500 h-[10px]" style={{ width: progress }}></div>
                {/* <span className="mx-2">({video.current.})</span> */}
            </div>
            <div className='bg-[#2c2c2c] mb-3 py-2 items-center flex justify-between  text-center px-7 rounded-b-sm' style={{ width: w }}>
                <div className="flex gap-5 items-center">
                    <button onClick={playtoggle}>{play ? <i className='fa-pause fa-solid text-md'></i> : <i className='fa-play fa-solid text-md'></i>}</button>
                    <button onClick={()=>{
                        setmuted((prev)=> !prev)
                       
                            video.current.muted = muted
                        
                    }}>{muted ? <i className="fa-solid fa-volume-xmark text-md "></i> : <i className="fa-solid fa-volume-high text-md "></i>}</button>
                  <button onClick={Skip}>{<i className="fa-solid fa-forward-fast text-md"></i>}</button>
                </div>
                <div className=''>
                    <button onClick={() => setoptions(!options)} className='text-xl'>•••</button>
                </div>
                {options ?
                    <div className='absolute m-3 py-4 px-3 bg-gray-950 z-10 rounded-md  right-0  top-0 '>
                        <h1 className='text-center text-lg my-2'>Options</h1>
                        <button onClick={FullScreen} className='button w-full'>Full Screen</button>
                    </div>
                    :
                    null
                }
            </div>

        </>
    )
}

export default Video
