// import userdata from '@/types/Userdata'
import { Metadata } from 'next'
import { cookies } from 'next/headers'
import React from 'react'
import { finduser } from '../action'
// import Userdata from '@/types/Userdata'
import { redirect } from 'next/navigation'
import Side from './Side'
import NotAllow from './NotAllow'
import Refrash from './Refrash'

export const metadata : Metadata = {
    title: "Admin"
}
export const revalidate = 0;
const layout = async ({children}) => {
  // const router = useRouter()
  const res = await (await cookies()).get("userid")
  //  console.log(res)
   if(!res){
     redirect("/")
   }else{
    const user: any = await finduser(Number(res.value))
    // console.log(user)
    if(!user.admin){
      redirect("/")
    }
   }
  return (
    <>

    <NotAllow/>
    <Side/>
          <Refrash/>
    {children}
    
    </>
  )
}

export default layout

export const dynamic = "force-dynamic"