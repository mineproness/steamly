import React from 'react'
import { GetInfomationUser, Getposts, GetPostsLength } from '@/app/server'
import Post from '@/components/Post'
import deleteid from '@/lib/deleteid'
import PostsHome from './PostsHome'
import { Metadata } from 'next'


const page = async () => {
  const posts = await Getposts(0, 2)
  const GetInfomation = await GetInfomationUser()
  const postslength = await GetPostsLength()

  return (
    <>
      <br />
      <div className='px-4 max-md:px-2 flex justify-center items-center flex-col gap-4'>
        <PostsHome postslength={postslength} Posts={posts} infomation={deleteid(GetInfomation)} />
      </div>
    </>
  )
}

export default page
