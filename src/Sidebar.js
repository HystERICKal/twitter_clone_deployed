// This is a component so the first letter of the filename is Capital

import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBoarderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizonIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

// const Sidebar = () => { ..............function declaration Same thing as below
function Sidebar() {
    return (
        <div className="sidebar">
            {/* Twitter icon */}
            <TwitterIcon className="sidear__twitterIcon"/>

            {/* SidebarOptions */}
            <SidebarOption active Icon={HomeIcon} text="Home"/>
            <SidebarOption Icon={SearchIcon} text="Explore"/>
            {/* <a class="twitter-hashtag-button"href="https://twitter.com/intent/tweet">Tweet</a> */}
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>
            <SidebarOption Icon={MailOutlineIcon} text="Messages"/>
            <SidebarOption Icon={BookmarkBoarderIcon} text="Bookmarks"/>
            <SidebarOption Icon={ListAltIcon} text="Lists"/>
            <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
            <SidebarOption Icon={MoreHorizonIcon} text="More"/>
            
            {/* Button -> Tweet */}
            {/* Variant is a material UI style */}
            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>

        </div>
    );
}

export default Sidebar;