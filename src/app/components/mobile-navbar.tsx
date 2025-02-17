import React, { useState } from 'react';
import { AlignJustify, X } from 'lucide-react';


const MobileNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="mobile-navbar flex justify-between items-center p-4 shadow-md z-10">
      <div className="logo flex"><img src='/logo.png' alt='Logo' className='h-10'></img></div>
      <button
        onClick={toggleSidebar}
        className="menu-icon text-2xl focus:outline-none"
      >
        <AlignJustify></AlignJustify>
        
      </button>

      {/* Sidebar */}
      <div
        className={`sidebar fixed top-0 right-0 w-2/3 h-full bg-primary shadow-2xl z-50 p-6 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button
          onClick={toggleSidebar}
          className="close-button text-2xl mb-4 focus:outline-none text-primary-foreground cursor-pointer"
          style={{pointerEvents: 'auto'}}
        >
          <X className='w-7 h-7 '></X>
        </button>
        <nav className="flex flex-col space-y-4 text-lg text-primary-foreground">
          <a href="#home" className='hover:text-secondary'>Home</a>
          <a href="#courses" className='hover:text-secondary'>Courses</a>
          <a href="#iti" className='hover:text-secondary'>ITI</a>
          <a href="#gallery" className='hover:text-secondary'>Gallery</a>
          <a href="#about-us" className='hover:text-secondary'>About Us</a>
          <a href="#contact-us" className='hover:text-secondary'>Contact Us</a>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;
