import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import IconButton from '@material-ui/core/IconButton';

function Header() {
    return (
    <div class="header">
        <IconButton>=
        <PersonIcon className="header__icon" fontSize="large"/>
        </IconButton>
        <img 
        className="header__logo"
        src="https://logodix.com/logo/1986183.jpg" 
        alt="logo"/>
        <IconButton>
        <ChatBubbleIcon className="header__icon" fontSize="large"/>
        </IconButton>
    </div>
    );
}

export default Header;