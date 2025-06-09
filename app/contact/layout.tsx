import { Metadata } from 'next'
import React from 'react'

export const metadata : Metadata={
  title: "Contact"
}

const layout = ({ children }: {children : React.ReactNode}) => {
  return (
    children
  )
}

export default layout
