import Foooter from '@/components/Foooter'
import Header from '@/components/Header'
import { name } from '@/lib/GetAllValue'
import React from 'react'
import '@/app/page.css'
import type { Metadata } from 'next'
// import { allpost } from '../action'
import Blog from '@/components/Blog'
import { allpost } from '../action'
export const revalidate = 0
export const metadata: Metadata = {
  title: "About",
  description: "Gcfree Give Us Best Deals Gift Card Or Generator. So Checkout Our About Page"
}
const page = async () => {
  const allposts = await allpost()
  const user = [
    {
      name: "Shanto",
      des: "Hi I'm Shanto. I'm Belong a Mid Range Class. I buy a PS5. But I do not have Money To Buy PS5 Games. I rushed For Google and Search. I see Some Fake Website. 99% Website is Give Fake Gift Card. Then I go Gcfree. I Complete Some Robot Verify Then I Get Free Gift Card."
    },
    {
      name: "Bathon",
      des: "Hi I'm Bathon. I'm Also Belong a Mid Range Class. I buy a XBOX. But I do not have Money To Buy XBox Games or Xbox Gaming Pass. I Went For Google and Search. I see Some Fake Website. 90% Website is Give Fake Gift Card. Then I go Gcfree. I Complete Some Games Then I Get Free Gift Card."
    },
    {
      name: "Emad",
      des: "Hi I'm Emad. I'm Belong a Mid Range Class. I buy a PC. Then I install a Steam But I do not have Money To Buy Games . I Went For Google and Search. I see Some Fake Website. 90% Website is Give Fake Gift Card. Then I go Gcfree. I Complete Some Games Then I Get Free Gift Card."
    }
  ]
  return (
    <>
      <Header />
      <div className='body2 w-full h-[400px] text-white flex justify-center items-center flex-col text-center'>
        <h1 className='font-bold text-4xl'>About</h1>
        <h1 className="my-3 text-xl">Our Website is Give Gift Cards Codes</h1>
      </div>
      <div className='my-3 px-9'>
        <ul className='px-8 rounded-xl py-5 bg-blue-100'>
          <li><h1 className="text-2xl font-serif"><i className="fa-solid fa-user mx-2"></i>Signup For Free</h1></li>
          <li><h1 className="text-2xl font-serif"><i className="fa-solid fa-money-bill mx-2"></i>No Need Money</h1></li>
          <li><h1 className="text-2xl font-serif"><i className="fa-solid fa-credit-card mx-2"></i>No Need Credit Card</h1></li>
          <li><h1 className="text-2xl font-serif"><i className="fa-solid fa-headset mx-2"></i>Contact Support</h1></li>
          {/* <li><h1 className="text-2xl">Signup For Free</h1></li> */}
        </ul>
      </div>
      <div className="my-9 px-9">
        <h1 className='text-2xl text-center my-3'>What Our Viewer Say</h1>
         <div className="flex justify-center items-center text-center flex-wrap gap-8">
          {user.map((e) => {
          return (
            <div className="my-2 bg-gray-200 rounded-xl w-[330px] h-[550px] px-8 flex shadow-xl items-center text-center flex-col">
              <i className="fa-solid fa-user text-7xl mt-9"></i>
              <h1 className="text-xl font-black  mt-3">{e.name}</h1>
              <h1 className="text-lg my-4 font-extralight">{e.des}</h1>
            </div>
          )
        })}
         </div>
      </div>
      <div className="bg-blue-100 mt-2 py-9">
         <div className="my-2 flex justify-center flex-wrap gap-8 items-center text-center ">
           {allposts.splice(0 , 15).map(function(e){
                  return (
                    <Blog e={e} key={e.id}/>
                  )
                })}
         </div>
      </div>
      <Foooter />
    </>
  )
}

export default page