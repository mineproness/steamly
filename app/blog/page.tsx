import React from 'react'
import { allpost } from '../action'
import Blog from '@/components/Blog';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Foooter from '@/components/Foooter';

export const metadata : Metadata = {
    title: "Blog"
}

export const revalidate = 0;

const page = async () => {
  const allposts   = await allpost()
  return (
    <>
     <Header/>
      <div className='px-8 justify-center items-center text-center py-3 flex flex-wrap gap-9'>
      {allposts.map((e :any)=>{
        return (
              <Blog key={e.id} e={e}/>
        )   
      })}
    </div>
    <br />
     <Foooter/>
    </>
  )
}

export default page
