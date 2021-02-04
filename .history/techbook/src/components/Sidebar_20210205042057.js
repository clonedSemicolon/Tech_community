import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojilagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from'@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLobraryIcon from '@material-ui/icons/VideoLibrary'
import ApartmentIcon from '@material-ui/icons/Apartment';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import ExpandMoreoutLined from '@material-ui/icons/ExpandMoreOutlined'


const Sidebar=()=>{

    const []
    return(
        <div className="sidebar">
            <SidebarRow src='' title="Avishak"/>
            
            <SidebarRow Icon={ApartmentIcon} title='Curriculam'/>
            <SidebarRow Icon={PeopleIcon} title='Faculty'/>
            <SidebarRow Icon={ChatIcon} title='Messenger'/>
            <SidebarRow Icon={KeyboardIcon} title='CGPA calculator'/>
            <SidebarRow Icon={LocalHospitalIcon} title='Health Center'/>
            <SidebarRow Icon={VideoLobraryIcon} title='Gallery'/>
            
        </div>
    )
}

export default Sidebar;