import { contact } from '@/app/action'
import React from 'react'


const page = async () => {
    const allcontact: any = await contact();
    return (
        <>
        <br />
            <div className="my-3 px-9 flex justify-center items-center">
                <table className='table'>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Date</th>
                        <th>IP</th>
                        {/* <th>IP</th> */}
                        <th>Body</th>
                    </tr>
                    <tr>
                        {allcontact.map((e, d) => {
                            // console.log(e)
                            return (
                                <td key={d}>{e.name}</td>
                            )
                        })}
                        {allcontact.map((e, d) => {
                            // console.log(e)
                            return (
                                <td key={d}>{e.email}</td>
                            )
                        })}
                        {allcontact.map((e, d) => {
                            // console.log(e)
                            return (
                                <td key={d}>{e.subject}</td>
                            )
                        })}
                        {allcontact.map((e, d) => {
                            // console.log(e)
                            return (
                                <td key={d}>{e.date}</td>
                            )
                        })}
                        {allcontact.map((e, d) => {
                            // console.log(e)
                            return (
                                <td key={d}>{e.ip}</td>
                            )
                        })}
                        {allcontact.map((e, d) => {
                            // console.log(e)
                            return (
                                <td><a className='hover:underline duration-300 hover:text-purple-700' href={`/admin/contact/${e.id}`}>Go</a></td>
                            )
                        })}
                    </tr>

                </table>
            </div>
        </>
    )
}

export default page