import { notFound, redirect } from 'next/navigation'
import React from 'react'
import { FindUser, GetInfomationUser, Getpost } from '@/app/server'
import Button from './Button'
import Unfollow from './Unfollow'
import Post from '@/components/Post'
import Follower from '@/app/(headers)/Follower'
import { Metadata } from 'next'
import HandleUpdate from '@/components/HandleUpdate'

export async function generateMetadata({ params }: { params: { username: string } }) : Promise<Metadata> {
  const { username } = await params
  const filtedusername = username.replaceAll("%40", "").replaceAll("%20" , " ")
  return {
    title: filtedusername,
    keywords: [`Steamly for ${filtedusername}` , filtedusername , `${filtedusername} for Steamly`]
  }
}

const page = async ({ params }: { params: { username: string } }) => {
  const { username } = await params
  const session = await GetInfomationUser()
  const infomation = await FindUser(username)
  if (!infomation) {
    notFound()
  }
  let posts = await Getpost(infomation.username)
  let filted ;
  if(!session){
    
  }else{
    filted = infomation.follow.find((e) => e == session.username)
  }


  return (
    <>
    <HandleUpdate/>

      <div className="flex bg-gray-900  px-5 py-2 justify-between max-md:flex-col max-md:text-center max-md:justify-center ">
        <div className='flex items-center px-8 py-2 justify-between max-md:flex-col max-md:text-center max-md:justify-center'>
          <img src={`/api/images/${infomation.img}`} alt={infomation.id} width={100} className='rounded-full' />
          <div>
            <h1 className='mx-4 text-xl'>{infomation.username} {infomation.verfied ? <a href={`/docs/verifed`}>{<i className="fa-solid fa-circle-check font-thin text-green-500"></i>}</a> : <a href={`/docs/verifed`}>{<i className="fa-solid fa-circle-xmark font-thin text-red-500"></i>}</a>}</h1>
            
              <Follower infomation={infomation}/>
           
          </div>
        </div>
        <div>
        </div>
        <div className='my-5 flex justify-center items-center flex-col flex-wrap gap-2'>
          {session ?
            session.username == infomation.username ?
              null
              :
              filted ?
                <Unfollow id={session.id} username={session.username} fid={infomation.id} fusername={infomation.username} />
                :
                <Button id={session.id} username={session.username} fid={infomation.id} fusername={infomation.username} />
            :
            null


          }
        </div>
      </div>
     <div className='my-4 flex justify-center items-center flex-col'>
         {posts.length == 0 || !posts ?
          <h1 className='text-xl text-center mt-40'>Post Not Found</h1> 
          :
          posts.map((e)=>(
            <Post e={e} key={e.id} session={session}/>
          ))
        }
     </div>
    </>
  )
}

export default page
