import React, { useEffect, useState } from 'react'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import axios from '../axios'



const Feed = () => {

    const [postsData,setPostsData]=useState([])
    const [profilePic,setProfilePic]=useState('')

    const syncFeed=()=>{
        axios.get('/retrieve/posts').then((res)=>{
            console.log(res.data)
            setPostsData(res.data)
        })
    }
useEffect(()=>{
    syncFeed()
},[])


    return (
        <div className='feed'>
            
            <MessageSender/>

            {

                postsData.map(entry =>(

            <Post
                profilePic={entry.avatar}
                message={entry.text}
                timestamp={entry}
                imgName='imgName'
                username='Avishak'
            />
                ))

            }

           
            
        </div>
    )
}

export default Feed
