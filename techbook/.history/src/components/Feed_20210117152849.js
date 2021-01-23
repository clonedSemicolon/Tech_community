import React from 'react'

const Feed = () => {
    return (
        <div className='feed'>
            <StoryReel/>
            <MessageSender/>

            {
                postData.map(entry=>(
                    <Post
                        profilePi
                    />
                ))
            }
            
        </div>
    )
}

export default Feed
