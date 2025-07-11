import mongo from "@/lib/mongo"
import { notFound } from "next/navigation"
import { NextResponse } from "next/server"
import { server } from "typescript"
import  Markdown from "react-markdown"
// -Markdown



export async function generateMetadata({params}){
    const { name } = await params
    return {
        title: name
    }
}

export default async function page({ params }){
 const { name } = await params
 const { db }= await mongo()
 const serverhtml =  await db.collection("docs").findOne({ path : `/${name}`})
 if(!serverhtml){
   notFound()
 }

 return (
    <>
     {/* <pre>
       <code>Hi bro</code>
     </pre> */}
     <div className=" px-8 py-2  prose text-white prose-h1:text-white prose-h2:text-white prose-p:text-white prose-h4:text-white prose-h3:text-white">
        <Markdown>{serverhtml.html}</Markdown>
     </div>
    </>
 )
}