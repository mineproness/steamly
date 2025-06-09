import React from 'react'
import '@/app/page.css'
import Image from 'next/image'
import { name } from '@/lib/GetAllValue'
import Link from 'next/link'
import { allpost } from './action'
import Blog from '@/components/Blog'
import Header from '@/components/Header'
import Foooter from '@/components/Foooter'
export const revalidate = 0;
const page = async  () => {
  const allposts = await allpost()
  return (
    <>
    <Header/>
     <div className="flex justify-center items-center text-center flex-col hero h-[400px]">
      <h1 className='my-3 text-4xl text-white  font-serif  p-3  rounded-lg'>Grap Your Free Gift Cards Or Discord Nitro</h1>
      <Link className="text-xl  text-white bg-blue-700 duration-300 hover:[box-shadow:2px_2px_20px_blue] px-7 py-2 rounded-xl" href='/blog'>Clam Now</Link>
     </div>
     <div className='flex-row-reverse flex justify-between max-md:justify-center max-md:items-center mt-[100px] mb-32 max-md:flex-col   px-7 items-center'>
       <div>
           <Image width={400} height={500} className='img duration-300' alt='Hero Img' src="https://d2j6dbq0eux0bg.cloudfront.net/default-store/giftcards/gift_card_003_1500px.jpg"></Image>
       </div>
       <div className='max-md:w-full w-[400px] max-md:mt-6'>
         <h1 className='text-2xl'>{name} is Provider Gave Free Gift Cards or Discord Nitro Generator. You Don't Have Money Checkout Our Website. You Play Free Fire Checkout Our <Link href='/ff/index.html' className='hover:text-purple-700 duration-300 underline'>Diamond Generator</Link></h1>
       </div>
     </div>
     <h1 className='text-3xl px-7 mb-32 hover:underline cursor-pointer duration-300 hover:text-blue-600' draggable={false}>See Our Blogs</h1>
     <div className='px-7 justify-center my-5 flex flex-wrap gap-4 items-center text-center'>
        {allposts.splice(0 , 14).map(function(e){
          return (
            <Blog e={e} key={e.id}/>
          )
        })}
     </div>
    <h1 className='text-3xl hover:underline cursor-pointer duration-300 hover:text-blue-600 px-7 mt-32 mb-5'>Discord Nitro Generator</h1>
    <h1 className='my-2 text-xl mb-20 px-7 font-semibold'>Discord Nitro Generator is Run in Your Computer. It is Not a Virus You Can Check In Virustotal.com . This Generator Needs Network, Up to 10GB Internet Not Speed, Node JS To Run Server. This Generator Needs Up to 15+ Hours. You Have Old Laptop Or Your Motherboard Was repaired. Do Not Try This Generator ⚠️. Instant Give Our 1$ to Generate Nitro. Go to <Link href="/contact" className='underline hover:text-blue-700 duration-300'>Contact Page</Link> To Contact.</h1>
     <Foooter/>
    </>
  )
}

export default page
