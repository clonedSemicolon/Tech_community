import React from 'react'
import { Avatar } from "@material-ui/core";

const Story = ({story,profileSrc,title}) => {
    return (
        <div style={{backgrounndImage: `url(${image})`}}>
            <Avatar src={profileSrc} className='story_avatar'/>
        </div>
    )
}

export default Story
