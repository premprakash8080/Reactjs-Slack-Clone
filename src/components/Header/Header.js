import React from 'react'
import './Header.css'
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SeachIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/Help';

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                {/* {Avatars for logged in user} */}
                {/* {Time icon} */}
                <Avatar className="header_avatar"
                    alt='Test usr'
                    src='test path'
                />
                {/* alt={user?.displayname} */}
                {/* src={user?.photoURL} */}
                <AccessTimeIcon />
            </div>

            <div className="header_search">
            <SeachIcon />
            <input placeholder='Search ' />
                {/* {search icon} */}

            </div>
            <div className="header_righ">
            <HelpOutlineIcon />

            </div>
        </div>
    )
}

export default Header