import { redirect } from 'next/navigation'
import React from 'react'
import { GetInfomationUser, GetSession } from '@/app/server'
import Upload from './Upload'
import deleteid from '@/lib/deleteid'

const page = async () => {
    const session = await GetInfomationUser()
    return (
        <>
        <Upload session={deleteid(session)}/>
        </>
    )
}

export default page