import { name } from '@/lib/GetAllValue'
import React from 'react'

const Side = () => {
  return (
    <div className='w-[260px] mr-20 float-left px-9 h-[100vh] sticky top-0 bg-gray-300 duration-500'>
        <h1 className='text-2xl bg-gradient-to-br to-blue-700 from-red-700 bg-clip-text text-transparent [text-shadow:2px_2px_20px_blue]'>{name} Admin</h1>
        <ul className='mt-20'>
          <li><a className='text-lg hover:text-blue-700 duration-300' href="/admin">Home</a></li>
          <li><a className='text-lg hover:text-blue-700 duration-300' href="/admin/contact">Contact</a></li>
          <li><a className='text-lg hover:text-blue-700 duration-300' href="/admin/upload">Upload</a></li>
          <li><a className='text-lg hover:text-blue-700 duration-300' href="/admin/user">Users</a></li>
          <li><a className='text-lg hover:text-blue-700 duration-300' href="/admin/posts">Posts</a></li>
          <li><a className='text-lg hover:text-blue-700 duration-300' href="/admin/media">Media</a></li>
          <li><a className='text-lg hover:text-blue-700 duration-300' href="/admin/media/upload">Upload Media</a></li>
        </ul>
    </div>
  )
}

export default Side