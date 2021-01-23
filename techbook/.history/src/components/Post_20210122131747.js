import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'

const Post = ({profilePic,imgName,username,timestamp,message}) => {
    return (
        <div className='post'>
            <div className="post_top">
                <Avatar src={profilePic} className='post_avatar'/>
                <div className="post_topInfo">
                    

                </div>

            </div>
            
        </div>
    )
}

export default Post
