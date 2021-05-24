import React from 'react';
import logo from './images/logo.png'

const Header=()=>{
    
    return(
    <>

    <header className="header">
        <img src={logo} alt="" id ="logo" />
        <h1>Google Keep</h1>
    </header>
    </>
    )
}
export default Header;