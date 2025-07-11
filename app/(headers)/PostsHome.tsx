"use client"
import Post from '@/components/Post'
import React, { useState } from 'react'
import { Getposts } from '../server'
import useInfinteFetch from '@/hooks/useInfinteFetch'

const PostsHome = ({ Posts, infomation, postslength }) => {
    const [posts, setposts] = React.useState(Posts)
    // const [nextpage, setnextpage] = useState(5)
    const [nowpage, setnowpage] = useState(posts.length)
    const loadingRef = React.useRef(null)
    const { fetchMore } = useInfinteFetch(async function(nowpage , nextpage){
       const p = await Getposts(nowpage , nextpage)
       return p
    } , posts.length)
    React.useEffect(() => {
        
        const obv = new IntersectionObserver((e) => {
            e.forEach(async (e) => {
                // console.log(e.isIntersecting);

                if (e.isIntersecting) {
                    const res = await fetchMore()
                    // console.log(res);
                    setposts(prev=> [...prev , ...res])
                    setnowpage(prev=> prev + 1)
                    
                }
            })
        })
        if(loadingRef.current){
            obv.observe(loadingRef.current)
        }
    }, [])
    return (
        <>
            {posts.map((e) => {
                return (
                    <Post e={e} session={infomation} />
                )
            })}
            {nowpage == postslength ?
                null
                :
                <div ref={loadingRef} className="my-5 border-t-2 white border-2  border-t-black rounded-full w-[40px] h-[40px] animate-spin"></div>
            }
            
        </>
    )
}

export default PostsHome
