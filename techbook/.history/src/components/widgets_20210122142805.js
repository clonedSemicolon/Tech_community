import React from 'react'

const widgets = () => {
    return (
        <div className='widgets'>
            <iframe 
            width="340" 
            height="1500" 
            src="https://www.youtube.com/embed/whpJ5k7espE" 
            frameborder="0" 
            allow="accelerometer; 
            autoplay; clipboard-write; 
            encrypted-media; gyroscope; 
            picture-in-picture" allowfullscreen>
            style={{border:"none",overflow="hidden"}}
            scrolling= "no"
            allowTransparency="true"

            </iframe>
        </div>
    )
}

export default widgets
