import React from 'react'
import { GetInfomationUser, Getpost, GetSession } from '@/app/server'
import Button from './Button'
import { redirect } from 'next/navigation'
import Post from '@/components/Post'
import Follower from '../Follower'
import deleteid from '@/lib/deleteid'
import { io } from 'socket.io-client'
import HandleUpdate from '@/components/HandleUpdate'
// const sokect = io()
const page = async () => {
  const session = await GetInfomationUser()
  let posts = [];
    posts = await Getpost(session.username)
  
  return (
    <>
    <HandleUpdate/>
      <div className="flex bg-gray-900 px-5 py-2 justify-between max-md:flex-col max-md:text-center max-md:justify-center ">
        <div className='flex items-center px-8 py-2 justify-between max-md:flex-col max-md:text-center max-md:justify-center'>
          <img src={`/api/images/${session.img}`} alt={session.id} width={100} className='rounded-full' />
          <div>
            <h1 className='mx-4 text-xl'>{session.username} {session.verfied ? <a href={`/docs/verifed`}>{<i className="fa-solid fa-circle-check font-thin text-green-500"></i>}</a> : <a href={`/docs/verifed`}>{<i className="fa-solid fa-circle-xmark font-thin text-red-500"></i>}</a>}</h1>
             <Follower infomation={deleteid(session)}/>
          </div>
        </div>
        <div>
        </div>
        <div className='my-5 flex justify-center items-center flex-col flex-wrap gap-2'>
          <Button session={deleteid(session)} />
        </div>
      </div>
      <br />
      {posts.length > 0 ?
        <div className="flex justify-center items-center  flex-col">
          {posts.map((e) => {
            return (
              <Post e={deleteid(e)} session={session} key={e.id} />
            )
          })}
        </div>
        :
        <>
          <div className='my-6 text-center mt-32'>
            <h1 className='text-xl'>Post is Not Found</h1>
          </div>
        </>
      }
    </>
  )
}

export default page