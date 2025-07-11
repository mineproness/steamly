"use client"
import React from 'react'

const Post = ({ e }) => {
    return (
        <div onClick={()=>{
            try {
                window.location.replace(`/posts/${e.id}`)
            } catch (error) {
                
            }
        }} className='w-full border flex border-white px-5 py-2 rounded-xl justify-between'>
            <h1 className='title-limit'>{e.title}</h1>
            <div className='flex gap-2 flex-wrap'>
                <i className="fa solid fa-comment text-center text-xl"><span className="mx-2">{e.comment.length}</span></i>
                <i className="fa solid fa-thumbs-up text-center text-xl"><span className="mx-2">{e.like.length}</span></i>
            </div>
        </div>
    )
}

export default Post
