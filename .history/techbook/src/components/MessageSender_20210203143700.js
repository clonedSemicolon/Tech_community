import { Avatar, Input } from '@material-ui/core'
import { SettingsInputAntenna } from '@material-ui/icons'
import React, { useState } from 'react'
import './MessageSender.css'


const MessageSender = () => {
    const [input,setInput]=useState('');
    const [imageUrl,setImageUrl]=useState('')
    const [image,setImage]=useState(null)
    const [{user},dispatch]=useStateValue()

    const handleChange=(e)=>{
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    }

    const handleSubmit=()=>{

    }
    return (
        <div className='messageSender'>
            <div className='messageSender_top'>
                <Avatar src="https://i.imgur.com/FQbpyAY.jpg"/>
                <form>
                    <input type="text" className='messegeSender_input' placeholder="Whats`s up with you ?" value={input} onChange = {(e)=>setInput(e.target.value)}/>
                    <input type="file" className='messeageSender_fileSelector' onChange= {handleChange}/>
                    <button onClick={handleSubmit} type='Submit'> Post </button>
                </form>
            </div>
            
        </div>
    )
}

export default MessageSender
