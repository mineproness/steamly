"use client"
import React, { useEffect, useRef, useState } from 'react'
import { upload } from '../admin_actions'
import './upload.css'
import { API_URL } from '@/lib/GetAllValue'
const Upload = () => {
//  const IframeRef = useRef(null)
 const [title, settitle] = useState("")
 const [des, setdes] = useState("")
 const [path, setpath] = useState("")
 const [img, setimg] = useState("")
 const [html, sethtml] = useState("")
 function set(value : string){
  const res : any =  document.querySelector(".if")
  res.srcdoc = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="/js/tailwindcss.js"></script>
    <script src="/html.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
</head>
<div class="bg-[#b4b4b48f] backdrop-blur-lg w-full flex justify-between sticky top-0 z-10 px-9 py-3 items-center text-center"><div><h1 class="text-blue-700 text-4xl">Gc<span class="text-red-600">free</span></h1></div><div><ul class="gap-3 flex max-md:hidden"><li><a class="text-xl hover:text-blue-600 duration-500" href="/">Home</a></li><li><a class="text-xl hover:text-blue-600 duration-500" href="/about">About</a></li><li><a class="text-xl hover:text-blue-600 duration-500" href="/contact">Contact</a></li><li><a class="text-xl hover:text-blue-600 duration-500" href="/blog">Blog</a></li><li><a class="text-xl hover:text-blue-600 duration-500" href="/logout">Logout</a></li><li><a class="text-xl hover:text-blue-600 duration-500" href="/profile">Profile</a></li></ul><i class="fa-solid fa-bars cursor-pointer text-xl hover:text-blue-700 duration-300 hidden max-md:flex"></i></div></div>
<body class="bg-gray-100 ">
  <div class='flex flex-col px-8 my-2'> ${value.replaceAll(":post_name" , title).replaceAll(":post_img_path" , `${API_URL}/images${img}`).replaceAll(":h1" , "<h1 class='text-2xl'>").replaceAll("h1:" , "</h1>").replaceAll(":hilight" , "<span class='text-2xl text-blue-700'>").replaceAll("hilight:" , "</span>").replaceAll(":space2" , "<pre class='my-2'>").replaceAll("space2:" , "</pre>").replaceAll(":br" , "<br>").replaceAll(":div" , "<div>").replaceAll("div:" , "</div>").replaceAll("items-center" , "flex justify-center item-center text-center flex-col").replaceAll(":post_des" , des)}</div>
</body>
</html>
  `
 }
 useEffect(()=>{
  set(html)
 } , [title , des , path , img])
 useEffect(()=>{
   
 } ,  [])
  return (
    <>
    <br />
      <form action={upload} className='flex flex-col justify-center px-32'>
        <input type="text" name='title' value={title} onChange={(e)=> settitle(e.target.value)} className='input' required placeholder='Enter Your Title' />
        <input type="text" name='des' value={des} onChange={(e)=> setdes(e.target.value)} className='input h-[100px]' required placeholder='Enter Your Des' />
        <input type="text" name='path' value={path} onChange={(e)=> setpath(e.target.value)} className='input' required placeholder='Enter Your Path' />
        <input type="text" name='img' value={img} onChange={(e)=> setimg(e.target.value)} className='input' required placeholder='Enter Your Img Code' />
        <input type="text" className="input"  name='keyword' placeholder='Enter Your Keywords Like ["1st","2nd"]' />
        <textarea name="html" className='w-full h-[300px] input' onChange={function(e){
          sethtml(e.target.value)
          set(e.target.value)
        }} placeholder='Enter Your Html'></textarea>
        <iframe  className='h-[300px] w-full border-black border-2 if rounded-md'></iframe>
        <button onClick={function(e){
           e.preventDefault()
           document.querySelector(".if").requestFullscreen()
        }} className="my-2 w-full button py-4 ">FullScreen To Review Your Blog</button>
        <button className='button my-3'>Upload</button>
      </form>
    </>
  )
}

export default Upload