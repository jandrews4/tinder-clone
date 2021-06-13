import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import IconButton from '@material-ui/core/IconButton';
import { Link, useHistory } from 'react-router-dom';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function Header({ backButton }) {
    const history = useHistory();
    return (
    <div class="header">
        {backButton ? (
            <IconButton onClick={() => history.replace(backButton)}>
                <ArrowBackIosIcon fontSize="large" className="header__backarrow"/>
            </IconButton>
    ) : (
        <IconButton>
            <PersonIcon className="header__icon" fontSize="large"/>
        </IconButton>
    )} 
        
        <Link to="/">
        <img 
        className="header__logo"
        src="https://logodix.com/logo/1986183.jpg" 
        alt="logo"/>
        </Link>
        <Link to="/chat">
            <IconButton>
                <ChatBubbleIcon className="header__icon" fontSize="large"/>
            </IconButton>
        </Link>
    </div>
    );
}

export default Header;