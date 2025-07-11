
import { FindPost, GetInfomationUser } from '@/app/server'
import HandleUpdate from '@/components/HandleUpdate'
import Post from '@/components/Post'
import { Metadata } from 'next'
import React from 'react'


export async function generateMetadata({params}) : Promise<Metadata> {
    const post = await FindPost(Number(params.id))
    return {
        title: post.title,
        keywords: [`Steamly for ${post.title}` , post.title , "Steamly" , `${post.title} for Steamly`]
    }
}

const page = async ({params}) => {
  const post = await FindPost(Number(params.id))
  const Infomation = GetInfomationUser()
  return (
    <div className='flex justify-center items-center flex-col'>
    <HandleUpdate/>

       <Post e={post} session={Infomation}/>
    </div> 
  )
}

export default page
