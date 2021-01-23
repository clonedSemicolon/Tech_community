import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import SubscriptionsOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined'
import SuperVisedUserCircleIcon from '@material-ui/icons/Home'


const header = () => {
    return (
        <div className='header'>
            <div className="header_left">
            <img src="https://i.imgur.com/iyOaNTG.png"alt="iict logo"/>
            </div>

            <div className="header_input">
                <SearchIcon/>
                <input placeholder='Search Techbook' type="text">
                </input>
            </div>

            <div className="header-center">

                <div className="header_option header_option--active">
                    <HomeIcon fontSize='large'/>
                </div>

                <div className="header_option">
                    <FlagIcon fontSize='large'/>
                </div>

                <div className="header_option">
                    <SubscriptionsOutlinedIcon fontSize='large'/>
                </div>

                <div className="header_option">
                    <SuperVisedUserCircleIcon fontSize='large'/>
                </div>

            </div>

        </div>
    )
}

export default header
