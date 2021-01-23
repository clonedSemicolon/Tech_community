import React from 'react'

const Feed = () => {
    return (
        <div className='feed'>
            <StoryReel/>
            <MessageSender/>

            {
                postData.map(entry=>(
                    <Post
                        profilePic={entry}
                    />
                ))
            }
            
        </div>
    )
}

export default Feed
