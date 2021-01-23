import { Avatar } from '@material-ui/core'
import React from 'react'

const MessageSender = () => {
    return (
        <div className='MessageSender'>
            <div className='messageSender_top'>
                <Avatar src="https://i.imgur.com/FQbpyAY.jpg"/>
                <form>
                    <input type="text" className='messegeSender_input' placeholder="Whats`s up with you ?" value={input} onChange{/>
                    <input/>
                </form>
            </div>
            
        </div>
    )
}

export default MessageSender
