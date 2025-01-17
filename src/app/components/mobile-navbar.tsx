import React, { useState } from 'react';
import { AlignJustify, X } from 'lucide-react';


const MobileNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="mobile-navbar flex justify-between items-center p-4 shadow-md">
      <div className="logo text-xl font-bold">Logo</div>
      <button
        onClick={toggleSidebar}
        className="menu-icon text-2xl focus:outline-none"
      >
        <AlignJustify></AlignJustify>
        
      </button>

      {/* Sidebar */}
      <div
        className={`sidebar fixed top-0 right-0 w-2/3 h-full bg-primary shadow-2xl z-100 p-6 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button
          onClick={toggleSidebar}
          className="close-button text-2xl mb-4 focus:outline-none text-primary-foreground cursor-pointer"
          style={{pointerEvents: 'auto'}}
        >
          <X className='w-6 h-6 '></X>
        </button>
        <nav className="flex flex-col space-y-4 text-lg text-primary-foreground">
          <a href="#home">Home</a>
          <a href="#courses">Courses</a>
          <a href="#iti">ITI</a>
          <a href="#gallery">Gallery</a>
          <a href="#about-us">About Us</a>
          <a href="#contact-us">Contact Us</a>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;
