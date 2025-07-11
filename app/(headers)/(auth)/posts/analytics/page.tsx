import { GetInfomationUser, Infomation } from '@/app/server'
import React from 'react'
import Post from './Post'
import HandleUpdate from '@/components/HandleUpdate'

const page = async () => {
  const session = await GetInfomationUser()
  const data = await Infomation(session.username)
  return (
    <>
    <HandleUpdate/>

      <br />
      <h1 className="my-5 text-center text-2xl">Total Result</h1>
      <div className="flex justify-center flex-wrap gap-5 rounded-md px-8">
        <div className="w-[350px] h-[200px] bg-yellow-600 rounded-md items-center flex justify-center flex-col">
          <div className='items-center rounded-md flex justify-center flex-wrap gap-9'>


            <div>
              <i className="fa-solid fa-thumbs-up text-5xl text-yellow-800"></i>
            </div>
            <h1 className='text-4xl'>{data.like.length == 0 ? 0 : data.like.reduce((prev, now) => prev + now)}</h1>
          </div>
          <div className="flex justify-center mt-8 items-center text-center flex-col">
            <h1 className='text-2xl'>Likes</h1>
          </div>
        </div>
        <div className="w-[350px] h-[200px] bg-blue-600 rounded-md items-center flex justify-center flex-col">
          <div className='items-center rounded-md flex justify-center flex-wrap gap-9'>


            <div>
              <i className="fa-solid fa-comment text-5xl text-blue-800"></i>
            </div>
            <h1 className='text-4xl'>{data.comment.length == 0 ? 0 : data.comment.reduce((prev, now) => prev + now)}</h1>
          </div>
          <div className="flex justify-center mt-8 items-center text-center flex-col">
            <h1 className='text-2xl'>Comments</h1>
          </div>
        </div>
      </div>
      {data.posts.length == 0 ?
        <div>
          <h1 className="text-2xl text-center my-20">You Are Not Uploading Post </h1>
        </div>
        :
        <>
          <h1 className="text-2xl mt-9 text-center">Posts Results</h1>
          <div className="mt-40  gap-2 flex flex-col px-9 mb-8 my-5">
            {data.posts.map((e) => {
              return (
                <Post e={e} />
              )
            })}
          </div>
        </>
      }
    </>
  )
}

export default page