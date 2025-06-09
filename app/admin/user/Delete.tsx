"use client"
import React from 'react'
import { removeuser } from '../admin_actions'
// import { revalidatePath } from 'next/cache'

const Delete = ({ id }) => {
  return (
    <i className="fa-soild fa-xmark text-xl my-5 hover:text-blue-700 duration-500" onClick={async function() {
        await removeuser(Number(id))
        // revalidatePath("/admin/user")
    }}></i>
  )
}

export default Delete