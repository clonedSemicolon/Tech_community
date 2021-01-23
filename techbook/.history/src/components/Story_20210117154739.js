import React from 'react'
import { Avatar } from "@material-ui/core";

const Story = ({image,profileSrc,title}) => {
    return (
        <div style={{backgrounndImage: `url(${image})`}} className='story'>
            <Avatar src={profileSrc} className='story_avatar'/>
            <h4>{title}</h4>
        </div>
    )
}

export default Story
