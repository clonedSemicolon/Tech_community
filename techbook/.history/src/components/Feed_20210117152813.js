import React from 'react'

const Feed = () => {
    return (
        <div className='feed'>
            <StoryReel/>
            <MessageSender/>

            {
                postData
            }
            
        </div>
    )
}

export default Feed
