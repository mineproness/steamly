"use client"
import React from 'react'
import cookie from 'js-cookie'
import { useRouter } from 'next/navigation'
const page = () => {
  const router = useRouter()
  try {
    cookie.remove("userid")
    router.back()
  } catch (error) {
    // blassjsjsjs
  }
  return (
    <></>
  )
}

export default page