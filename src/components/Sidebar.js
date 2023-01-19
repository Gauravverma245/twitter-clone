import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOptions from './SidebarOptions';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailIcon from '@mui/icons-material/Mail';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';

function Sidebar() {
  return (
    <div className='sidebar'>
        <TwitterIcon className='sidebar__twitterIcon'/>
        <SidebarOptions active Icon={HomeIcon} text="Home"/>
        <SidebarOptions Icon={SearchIcon} text="Explore"/>
        <SidebarOptions Icon={NotificationsNoneIcon} text="Notifications"/>
        <SidebarOptions Icon={MailIcon} text="Message"/>
        <SidebarOptions Icon={BookmarkBorderIcon} text="Bookmarks"/>
        <SidebarOptions Icon={ListAltIcon} text="Lists"/>
        <SidebarOptions Icon={PermIdentityIcon} text="Profile"/>
        <SidebarOptions Icon={LogoutIcon} text="Logout"/>
        <Button className="sidebar__tweet" variant="outlined">Tweet</Button>
    </div>
  )
}

export default Sidebar
