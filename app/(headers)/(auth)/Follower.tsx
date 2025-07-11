"use client"


import React from 'react'

const Follower = ({ infomation }) => {
    return (
        <button onClick={()=>{
            try {
                window.location.replace(`/@${infomation.username}/follower`)
            } catch (error) {
                
            }
        }}>
            <h1 className="text-xl mx-4 text-gray-600">Followers: {infomation.follow.length}</h1>
            <h1 className="text-xl mx-4 text-gray-600">Following: {infomation.follwing.length}</h1></button>
    )
}

export default Follower