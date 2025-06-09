// import { findpost } from '@/app/action'
import React from 'react'
import Edit from './Edit'
import { findpost } from '@/app/admin/admin_actions'
import { notFound } from 'next/navigation'

const page = async ({ params } : any) => {
  const posts = await findpost(Number(params.id))
  if(!findpost){
    notFound()
  }
//   console.log(posts)
  return (
    <>
     <Edit e={posts}/>
    </>
  )
}

export default page