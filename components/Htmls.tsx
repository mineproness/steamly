"use client"
import React , { useEffect, useId} from 'react'
import Load from './Load'
import Script from 'next/script'
import { API_URL } from '@/lib/GetAllValue'
// import '@/app/html.css'

const Htmls = ({ html , title , img , des } : { html : string , title: string , img: string , des : string}) => {
  
  return (
    <>
    <div className="w-full h-[500px] bg-blog flex flex-col  text-white justify-center items-center text-center">
      <h1 className='text-5xl'>{title}</h1>
      <h1 className='text-blue-500 text-3xl mb-20'>For Gcfree</h1>
    </div>
    <script src='/js/tailwindcss.js'></script>
    <div className='flex flex-col px-8 my-2' dangerouslySetInnerHTML={{ __html: html.replaceAll(":post_name" , title).replaceAll(":post_img_path" , `${API_URL}/images${img}`).replaceAll(":h1" , "<h1 class='text-2xl'>").replaceAll("h1:" , "</h1>").replaceAll(":hilight" , "<span class='text-2xl text-blue-700'>").replaceAll("hilight:" , "</span>").replaceAll(":space2" , "<pre class='my-2'>").replaceAll("space2:" , "</pre>").replaceAll(":br" , "<br>").replaceAll(":div" , "<div>").replaceAll("div:" , "</div>").replaceAll("items-center" , "flex justify-center item-center text-center flex-col").replaceAll(":post_des" , des).replaceAll(":br" , "<br>").replaceAll(":ul" , "<ul class='list-disc'>").replaceAll("ul:" , "</ul>")}}></div>
    <Script src='/html.js'></Script>
    </>
  )
}

export default Htmls
