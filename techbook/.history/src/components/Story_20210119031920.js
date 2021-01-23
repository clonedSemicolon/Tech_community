import React from 'react'
import { Avatar } from "@material-ui/core";
import './Story.css'

const Story = ({images,profileSrc,title}) => {
    return (
        <div style={{backgrounndImage: `url(${images})` }} className='story'>
            <Avatar src={profileSrc} className='story_avatar'/>
            <h4>{title}</h4>
        </div>
    )
}

export default Story
