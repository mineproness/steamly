// import BlogProps from '@/types/BlogProps'
import React from 'react'
import { findpost, finduser, getview } from '@/app/action'
// import Blog from '@/types/Blog';
import Htmls from '@/components/Htmls';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Foooter from '@/components/Foooter';
import Likes from './Likes';
import { cookies } from 'next/headers';
// import Likecommit from './Likecommit';
export const revalidate = 0;
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { id } = await params;
  const post = await findpost(id)
  if (!post) {
    return {}
  } else {
    return {
      title: post.title,
      description: post.des,
      keywords: post.keywords
    }
  }
}

export function generateStaticParams() {
  return []
}

const page = async ({ params }: any) => {
  const { id } = await params;
  const data: any = await findpost(id)
  
  if (!data) {
    notFound()
  }else{
   const uid = (await cookies()).get("userid")
   if(uid){
    const finduser2 = await finduser(Number(uid.value))
    if(!finduser2.admin){
       await getview(id)
    }
   }
  }
  return (
    <>
      <Header />
      <div className='m-0'>
        {/* <h1 className='text-4xl  my-4 text-left'>{(await data).title}</h1> */}
        {/* <br /> */}
        <Htmls html={(await data).html} des={data.des} title={data.title} img={data.img}/>
        {/* <Likecommit id={id} data={data.like} commit={data.comment}/> */}
      </div>
      <br />
      <Likes data={{
         des:data.des,
         title:data.title,
         img:data.img,
         like: data.like,
         commit: data.commit,
         id: data.id
      }}/>
      {/* <Foooter /> */}
    </>
  )
}

export default page
// export const dynamic = "force-dynamic"