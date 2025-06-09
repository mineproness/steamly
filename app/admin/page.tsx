import React from 'react'
import { getallinformation } from './admin_actions';
import { revalidatePath } from 'next/cache';
import Refrash from './Refrash';
import Reset from './Reset';



export const revalidate = 0;

const page = async () => {
   const { postlength , view , like , comment } = await getallinformation()
  return (
    <>
    <br />
      <Refrash/>
      <div className='flex justify-center flex-wrap gap-10  my-2 px-9'>
         <div className='w-[300px] h-[190px] flex rounded-xl cursor-pointer  group/view items-center justify-between px-9 py-2 flex-wrap gap-6   bg-yellow-600'>
          <h1 className='text-7xl text-white'>{view} <br /> <span className="text-lg">Views</span></h1>
          <i className="fa-solid text-6xl text-yellow-700 fa-chart-simple group-hover/view:scale-150 duration-500"></i>
         </div>
         <div className='w-[300px] h-[190px] flex rounded-xl cursor-pointer  group/view items-center justify-between px-9 py-2 flex-wrap gap-6   bg-purple-600'>
          <h1 className='text-7xl text-white'>{postlength} <br /> <span className="text-lg">Posts</span></h1>
          <i className="fa-solid text-6xl text-purple-700 fa-plus group-hover/view:scale-150 duration-500"></i>
         </div>
         <div className='w-[300px] h-[190px] flex rounded-xl cursor-pointer  group/view items-center justify-between px-9 py-2 flex-wrap gap-6   bg-red-600'>
          <h1 className='text-7xl text-white'>{like} <br /> <span className="text-lg">Like</span></h1>
          <i className="fa-solid text-6xl text-red-700 fa-thumbs-up group-hover/view:scale-150 duration-500"></i>
         </div>
         <div className='w-[300px] h-[190px] flex rounded-xl cursor-pointer  group/view items-center justify-between px-9 py-2 flex-wrap gap-6   bg-blue-600'>
          <h1 className='text-7xl text-white'>{comment} <br /> <span className="text-lg">Comment</span></h1>
          <i className="fa-solid text-6xl text-blue-700 fa-comment group-hover/view:scale-150 duration-500"></i>
         </div>
      </div>
      <div className="flex justify-center items-center text-center flex-col mt-48">
        <Reset/>
      </div>
    </>
  )
}

export default page