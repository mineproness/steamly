"use client"
import React, { useState } from 'react'

const useInfinteFetch = (fn: Function  , postslength) => {
  const [nowpage, setnowpage] = React.useState(postslength)
  const [nextpage, setnextpage] = useState(function(){
    return nowpage + 2
  })
  return {
    fetchMore: async function(){
      setnextpage((prev)=> prev + 1)
      const post =  await fn(nowpage , nextpage + 2)
      setnowpage((pev)=> pev + 1)
      return post
    }
  }
}

export default useInfinteFetch
