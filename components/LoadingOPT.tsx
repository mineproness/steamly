import React from 'react'

const LoadingOPT = ({on}) => {
  return (
    <>
     <div popover='auto' className={`${on ? "flex" : "hidden"} z-10 flex-col w-full h-full bg-[#00000091] p-0 overflow-hidden`}>
       <div className="w-full h-[10px] flex flex-col text-center OPT overflow-hidden">
        <div className="w-[50%] h-[20px] bg-blue-700"></div>
       </div>
     </div>
    </>
  )
}

export default LoadingOPT