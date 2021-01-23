import React from 'react'
import { Avatar } from "@material-ui/core";

const Story = ({story,profileSrc,title}) => {
    return (
        <div style={{backgrounndImage: `url(${image})`}} className=''>
            <Avatar src={profileSrc} className='story_avatar'/>
            <h4>{title}</h4>
        </div>
    )
}

export default Story
