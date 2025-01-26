import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-6">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="flex flex-wrap justify-center space-x-9 text-center">
            <a href="#home" className="text-md hover:text-secondary">Home</a>
            <a href="#courses" className="text-md hover:text-secondary">Courses</a>
            <a href="#iti" className="text-md hover:text-secondary">ITI</a>
            <a href="#gallery" className="text-md hover:text-secondary">Gallery</a>
            <a href="#about-us" className="text-md hover:text-secondary">About Us</a>
            <a href="#contact-us" className="text-md hover:text-secondary">Contact Us</a>
          </div>
        </div>

        <div className="text-center text-sm text-secondary">
          <p>&copy; 2025 Computer Career Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;