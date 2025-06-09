import React from 'react'

const Display = () => {
  if(process.env.NODE_ENV == "production"){
    return null;
  }
  return (
    <div className='fixed bottom-0 right-0 z-10 max-md:hidden bg-gray-800 duration-500 px-9 py-1 m-4 rounded-lg text-white'>
       <h1 className="text max-md:flex hidden">Md</h1>
       <h1 className="text max-xl:flex hidden">XL</h1>
       <h1 className="text max-2xl:flex hidden">2XL</h1>
       <h1 className="text max-sm:flex hidden">SM</h1>
    </div>
  )
}

export default Display