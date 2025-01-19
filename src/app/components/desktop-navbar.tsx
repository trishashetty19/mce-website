import React from 'react'

const DesktopNavbar = () => {
    return(
        <div className='desktop-navbar flex justify-between items-center p-3 shadow-lg'>
            <div className='Logo flex'><img src='/logo.png' alt='Logo' className='h-10'></img></div>
            <nav className='flex space-x-8 right-1 text-sm font-bold'>
                <a href = "#home" className='hover:text-secondary'>Home</a>
                <a href = "#courses" className='hover:text-secondary'>Courses</a>
                <a href = "#iti" className='hover:text-secondary'>ITI</a>
                <a href = "#gallery" className='hover:text-secondary'>Gallery</a>
                <a href = "#aboutus" className='hover:text-secondary'>About Us</a>
                <a href = "#contactus" className='hover:text-secondary'>Contact Us</a>
            </nav>
        </div>
    )
};
export default DesktopNavbar;

