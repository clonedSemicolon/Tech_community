import React from 'react'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'

const Feed = () => {
    return (
        <div className='feed'>
            
            <MessageSender/>

            <

            {/*
                postData.map(entry=>(
                    <Post
                        profilePic={entry.avatar}
                        message={entry.text}
                        timestamp={entry.timestamp}
                        imgName={entry.imgName}
                        userName={entry.user}
                    />
                ))
                */}
            
        </div>
    )
}

export default Feed
