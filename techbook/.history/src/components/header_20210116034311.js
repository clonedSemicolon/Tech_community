import React from 'react'

const header = () => {
    return (
        <div className='header'>
            <div className="header_left">
            <img src="https://i.imgur.com/iyOaNTG.png"alt="iict logo"/>
            </div>

            <div className="header_input">
                <SearchIc
                <input placeholder='Search Techbook' type="text">
                </input>

            </div>

        </div>
    )
}

export default header
