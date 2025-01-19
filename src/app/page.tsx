'use client';

import React, { useState, useEffect } from 'react';

const page = () => {
  // State for the carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '/photo1.jpg', // Replace with your actual image paths
    '/photo2.jpg',
    '/photo3.jpg',
    '/photo4.jpg'
  ];

  // Function to handle next/prev images
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Automatic image sliding every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 2000); // Change image every 2 seconds

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center">

      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url('/logo.png')`,
          opacity: 0.07,
        }}
      ></div>

      <img
        src="/logo_with_name.png"
        alt="Logo with Name"
        className="absolute top-2.5 left-1/2 transform -translate-x-1/2 z-10 w-1/2 md:w-1/3"
      />

      <p className="absolute top-[calc(2.5rem+3rem)] sm:top-[calc(2.5rem+10rem)] left-1/2 transform -translate-x-1/2 text-md font-bold text-primary z-20 sm:text-xl md:text-2xl">
        SINCE 2001
      </p>

      {/* Two Cards*/}
      <div className="relative mt-80 md:mt-60 w-full flex flex-col md:flex-row justify-center px-10 space-y-6 md:space-y-0 md:space-x-10">

        {/* Kaup and Padubidri Sections Card */}
        <div className="w-full md:w-1/2 h-full p-6 bg-card border-2 border-secondary rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-center mb-3 sm:mb-6 text-primary">
            Our Branches
          </h3>
          <div className="flex flex-col md:flex-row h-full">

            {/* Kaup Section */}
            <div className="w-full md:w-1/2 p-6">
              <h3 className="text-xl font-bold mb-4 text-center">Kaup</h3>
              <button className="w-full py-3 mb-2 rounded-lg bg-primary text-primary-foreground hover:bg-secondary">Computer Courses</button>
              <button className="w-full py-3 mb-2 rounded-lg bg-primary text-primary-foreground hover:bg-secondary">ITI Courses</button>
              <button className="w-full py-3 mb-2 rounded-lg bg-primary text-primary-foreground hover:bg-secondary">Fashion Designing</button>
              <button className="w-full py-3 mb-2 rounded-lg bg-primary text-primary-foreground hover:bg-secondary">Spoken English</button>
            </div>

            {/* Divider */}
            <div className="w-px bg-secondary h-4/5 text-center mx-2 hidden md:block"></div>

            {/* Padubidri Section */}
            <div className="w-full md:w-1/2 p-6">
              <h3 className="text-xl font-bold mb-4 text-center">Padubidri</h3>
              <button className="w-full py-3 mb-2 rounded-lg bg-primary text-primary-foreground hover:bg-secondary">Computer Courses</button>
              <button className="w-full py-3 mb-2 rounded-lg bg-primary text-primary-foreground hover:bg-secondary">ITI Courses</button>
              <button className="w-full py-3 mb-2 rounded-lg bg-primary text-primary-foreground hover:bg-secondary">Fashion Designing</button>
              <button className="w-full py-3 mb-2 rounded-lg bg-primary text-primary-foreground hover:bg-secondary">Spoken English</button>
            </div>
          </div>
        </div>

        {/* Image Carousel Card */}
        <div className="w-full md:w-1/2 h-full border-2 border-secondary rounded-lg shadow-lg">
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <img
              src={images[currentImageIndex]}
              alt="Carousel Image"
              className="object-fill"
            />
        
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-primary text-primary-foreground rounded-full p-2"
            >
              &#8249;
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-primary text-primary-foreground rounded-full p-2"
            >
              &#8250;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
