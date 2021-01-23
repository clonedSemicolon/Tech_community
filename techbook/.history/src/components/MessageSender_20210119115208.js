import { Avatar } from '@material-ui/core'
import { SettingsInputAntenna } from '@material-ui/icons'
import React, { useState } from 'react'

const MessageSender = () => {
    const [input,setInput]=
    return (
        <div className='MessageSender'>
            <div className='messageSender_top'>
                <Avatar src="https://i.imgur.com/FQbpyAY.jpg"/>
                <form>
                    <input type="text" className='messegeSender_input' placeholder="Whats`s up with you ?" value={input} onChange = {(e)=>setInput(e.target.value)}/>
                    <input type="file" className='messeageSender_fileSelector' onChange= {hamdleChange}/>
                    <button onClick={handleSubmit} type='Submit'/>
                </form>
            </div>
            
        </div>
    )
}

export default MessageSender
