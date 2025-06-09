import React from 'react'
import { getallpost } from '../admin_actions'
import { API_URL } from '@/lib/GetAllValue'
import Buttons from './Buttons'

const page = async () => {
  const allpost = await getallpost()
  return (
    <>
      <br />
      <div className="flex justify-center items-center text-center flex-wrap gap-6">
        {allpost.length == 0 ?
          <div className='text-3xl flex justify-center items-center text-center flex-col my-32'>
            <h1>Don't Have Any Post</h1>
          </div>
          :
          allpost.map((e) => {
            return (
              <div key={e.id} className='w-[300px] h-[400px] bg-gray-300 rounded-xl'>
                <img src={`${API_URL}/images/${e.img}`} className='rounded-t-xl' alt={e.id} />
                <h1 className='text-2xl my-2'>{e.title.slice(0, 32)}{e.title.length > 32 ? "....." : ""}</h1>
                <br />
                <a className='text-xl bg-blue-600 duration-300 hover:bg-red-600 text-white px-7 py-2 rounded-xl my-6' href={`/blog/${e.path}`}>Go to Blog</a>
                <Buttons e={e} />
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default page