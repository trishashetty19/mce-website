import React from 'react'

const DesktopNavbar = () => {
    return(
        <div className='desktop-navbar flex justify-between items-center p-3 shadow-lg'>
            <div className='Logo flex'><img src='/logo.png' alt='Logo' className='h-10'></img></div>
            <nav className='flex space-x-7 text-sm'>
                <a href = "#home">Home</a>
                <a href = "#courses">Courses</a>
                <a href = "#iti">ITI</a>
                <a href = "#gallery">Gallery</a>
                <a href = "#aboutus">About Us</a>
                <a href = "#contactus">Contact Us</a>
            </nav>
        </div>
    )
};
export default DesktopNavbar;

