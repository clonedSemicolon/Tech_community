import { Avatar } from '@material-ui/core'
import React from 'react'
import { useStateValue } from '../StateProvider';
import './Post.css'

const Post = ({profilePic,imgName,username,timestamp,message}) => {
    const [{user},displatch]=useStateValue();
    return (
        <div className='post'>
            <div className="post_top">
                <Avatar src={profilePic} className='post_avatar'/>
                <div className="post_topInfo">
                    <h3>username</h3>
                    <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
                </div>
            </div>
            <div className="post_bottom">
                <p>{message}</p>
            </div>   
            {
                imgName ? (
                    <div className="post__image">
                        <img src={`http://localhost:3002/retrieve/images/single?name=${imgName}`} />
                    </div>
                ) : (
                        console.log('DEBUG >>> no image here')
                    )
            }       
        </div>
    )
}

export default Post
