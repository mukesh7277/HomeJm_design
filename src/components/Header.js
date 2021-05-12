import React from 'react';
import logo from '../images/homejam_logo.png'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
    return (
        <div className="container">
            <div>
            <img style={{height:37}} src={logo} alt='logo'/>
            </div>
            <div className="texts">
                <div style={{display:'flex',alignItems:'center',marginRight:30}}>
                <SearchIcon/>
                <p>Search</p>
                </div>
                <p style={{marginRight:30}}>Help</p>
                <p style={{marginRight:30}}>Account</p>
                <LocalMallIcon style={{marginRight:80}}/>
            </div>
            <div className="icon">
                <SearchIcon style={{height:20,marginRight:10}}/>
                <LocalMallIcon style={{height:20,marginRight:10}}/>
                <MenuIcon style={{height:20}}/>
                </div>
        </div>
    )
}

export default Header
