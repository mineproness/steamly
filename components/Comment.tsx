// "use server"
import { finduser, removecomment } from '@/app/action'
import React, { useEffect, useState } from 'react'
// import Load from './Load'
import cookie from 'js-cookie'
import LoadingOPT from './LoadingOPT'
const Comment = ({ comment, setloading , id }) => {
  //   const user = await finduser(Number(comment.user))
  //   const [loading, setloading] = useState(true)
  const [data, setdata] = useState(null)
  const [options, setoptions] = useState(false)
  const [Load, setLoad] = useState(false)
  return (
    <>



      <div className='border-2 border-black rounded-md my-9 px-7 py-3 pb-8'>

        <div className="flex justify-between">
          <h1 className="text-2xl"><i className="fa-solid fa-user mr-2"></i>{comment.user} <span className='text-xl text-gray-600'>({comment.date})</span></h1>
          <div>
            {options ?
              <div className="bg-white flex-col  items-center text-center [box-shadow:2px_2px_20px_black]  rounded-md absolute right-[50px] z-[1000] mt-7 flex">
                <button onClick={async function() {
                  // setload(<LoadingOPT on={true}/>)
                  setLoad(true)
                   await removecomment(id, comment.id)
                   setLoad(false)
                  //  setload(<></>)
                }} className='rounded-md hover:bg-red-700 duration-500 px-6  py-3'><i className='fa-solid fa-trash mr-2'></i>Delete</button>
              </div>
              :
              null
            }
            {(cookie.get("userid") == comment.uid ?
              <button className='text-2xl hover:text-red-600 duration-500' onClick={function () {
                setoptions(!options)
              }}>•••</button>
              :
              null
            )}
          </div>
        </div>
        <h1 className="text-lg">{comment.body}</h1>
      </div>
    <LoadingOPT on={Load}/>
    </>
  )
}

export default Comment