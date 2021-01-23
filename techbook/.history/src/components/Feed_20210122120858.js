import React from 'react'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

const Feed = () => {
    return (
        <div className='feed'>
            
            <MessageSender/>

            <Post
                profilePic='https://i.imgur.com/FQbpyAY.jpg'
                message='This is a caption'
                ti
            />

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
