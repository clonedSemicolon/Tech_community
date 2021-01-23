import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojilagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from'@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLobraryIcon from '@material-ui/icons/VideoLibrary'
import ExpandMoreoutLined from '@material-ui/icons/ExpandMoreOutlined'
import { useStateValue } from "../StateProvider"

const Sidebar=()=>{
    return(
        <div>
            <SidebarRow src="" title="Avishak"/>
            <SidebarRow Icon={LocalHospitalIcon} title='Covid-19 Information Center'/>
            <SidebarRow Icon={EmojilagsIcon} title='Pages'/>
            <SidebarRow Icon={PeopleIcon} title='Friends'/>
            <SidebarRow Icon={ChatIcon} title='Messenger'/>
            <SidebarRow Icon={StorefrontIcon} title='Marketplace'/>

        </div>
    )
}