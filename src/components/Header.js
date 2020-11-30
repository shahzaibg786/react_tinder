import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import tinder from '../images/tinder.svg';
import ForumIcon from '@material-ui/icons/Forum';

const Header= props => {
    return (
        <div className="header">           
            <IconButton>
            <PersonIcon fontSize="large" 
            className="header__icon"/>
            </IconButton>

            
            <img className="header__logo" 
            src={tinder}  
            alt="" />
            
            <IconButton>
            <ForumIcon fontSize="large" 
            className="header__icon"/>
            </IconButton>
            

        </div>
    );
}

export default Header;