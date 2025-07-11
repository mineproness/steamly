import React from 'react'

const PostsChildren = ({des2} : { des2 : string}) => {
  return (
     <div className="text-xl my-2"  dangerouslySetInnerHTML={{ __html: des2}}></div>
  )
}

export default PostsChildren