"use client"
import { API_URL } from '@/lib/GetAllValue'
import React from 'react'
import { toast  } from 'react-toastify'
const Img = ({ e }) => {
  return (
     <img  className='mx-9  cursor-pointer rounded-xl mt-2 ' onClick={function(){
        toast.success("Copy Is success")
        try{
         navigator.clipboard.writeText(`/${e}.png`)
        }catch(err){
         console.log(err)
        }
     }}width={100} loading='lazy' height={100}  src={`${API_URL}/images/${e}.png`} alt={e} />
  )
}

export default Img