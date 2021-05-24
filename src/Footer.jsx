import React from 'react';


const Footer=()=>{
    let year = new Date().getFullYear();
    return(
        <>
        <footer id="footer">copyright © {year} - {year +1}</footer>
        </>
    );
};
export default Footer;