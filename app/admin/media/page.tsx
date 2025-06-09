import React from 'react'
import { ToastContainer } from 'react-toastify'
import Img from './Img'
// import ImgWraper from './ImgWraper'
export const revalidate = 0
const page = async () => {
  const fetchdata = await fetch(`${process.env.API_URL}all`)
  const res  = await fetchdata.json()
  if(res.length == 0){
    return <>
    <br />
     <div className="flex justify-center text-center my-32 items-center flex-col">
       <h1 className="text-2xl">Media Is Not Found</h1>
     </div>
    </>
  }
  return (
    <>
    <ToastContainer/>
    <br />
    <h1 className='my-4 text-center text-2xl'>Here Your All Images</h1>
     <div className="flex flex-wrap justify-center items-center text-center">
         {res.map((e)=>{
            return (
               <Img e={e}/>
            )
         })}
     </div>
    </>
  )
}

export default page