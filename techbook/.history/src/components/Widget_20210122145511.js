import React from 'react'

const widgets = () => {
    return (
        <div className='widget'>
            <iframe 
            width="400" 
            height="150" 
            src="https://www.youtube.com/embed/whpJ5k7espE" 
            style={{border:"none", overflow: "hidden"}}
            scrolling= "no"
            allowTransparency="true"
            frameborder="0" 
            allow="encrypted-media" 
            >     
            </iframe>
        </div>
    )
}

export default widgets
