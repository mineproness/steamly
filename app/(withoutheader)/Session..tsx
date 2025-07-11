"use client"


import { createContext, useContext } from "react"
const S = createContext("")

export const useMyContext  = ()=> useContext(S)
const session = function({children , value}){
    return (
      <S value={JSON.stringify(value)}>
        {children}
      </S>
    )
}

export default  session