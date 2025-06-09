import Load from '@/components/Load'
import React, { Suspense } from 'react'
import JsonCompoents from './JsonCompoents'

const page = ({ params }) => {
  return (
    <>
     <Suspense fallback={<Load/>}>
        <JsonCompoents params={params}/>
     </Suspense>
    </>
  )
}

export default page