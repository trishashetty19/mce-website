'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

const page = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '/photo1.jpg',
    '/photo2.jpg',
    '/photo3.jpg',
    '/photo4.jpg'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 2000); // Change of image every 2 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center justify-center">

      {/* Background Logo */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url('/logo.png')`,
          opacity: 0.05,
        }}
      ></div>

      {/* Main Logo */}
      <img
        src="/logo_with_name.png"
        alt="Logo with Name"
        className="absolute top-8 md:top-10 left-1/2 transform -translate-x-1/2 z-10 w-1/2 md:w-1/3"
      />

      {/* SINCE 2001 Text */}
      <p className="absolute top-[calc(2.5rem+4rem)] sm:top-[calc(2.5rem+12rem)] left-1/2 transform -translate-x-1/2 text-md font-bold text-primary z-20 sm:text-xl md:text-2xl">
        SINCE 2001
      </p>

      {/* Two Cards Section */}
      <div className="relative w-full flex flex-col md:flex-row justify-center px-5 md:px-20 space-y-6 md:space-y-0 md:space-x-20 mt-40 md:mt-80">

        {/* Kaup and Padubidri Sections Card */}
        <Card className="w-full md:w-1/2 h-full p-10 bg-card border-2 border-secondary rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-3 md:mb-6 text-primary">
            Our Branches
          </h3>
          <div className="flex flex-col md:flex-row h-full">

            {/* Kaup Section */}
            <div className="w-full md:w-1/2 p-6 mb-1 md:mb-0">
              <h3 className="text-xl font-bold mb-2 sm:mb-4 text-center">Kaup</h3>
              <Button className="w-full py-3 mb-2 rounded-lg bg-primary text-primary-foreground hover:bg-secondary hover:scale-110">Computer Courses</Button>
              <Button className="w-full py-3 mb-2 rounded-lg bg-primary text-primary-foreground hover:bg-secondary hover:scale-110">ITI Courses</Button>
              <Button className="w-full py-3 mb-2 rounded-lg bg-primary text-primary-foreground hover:bg-secondary hover:scale-110">Fashion Designing</Button>
              <Button className="w-full py-3 mb-2 rounded-lg bg-primary text-primary-foreground hover:bg-secondary hover:scale-110">Spoken English</Button>
            </div>

            {/* Divider */}
            <div className="w-px bg-secondary h-auto text-center mx-2 md:block"></div>

            {/* Padubidri Section */}
            <div className="w-full md:w-1/2 p-6">
              <h3 className="text-xl font-bold mb-2 sm:mb-4 text-center">Padubidri</h3>
              <Button className="w-full py-3 mb-2 rounded-lg bg-primary text-primary-foreground hover:bg-secondary hover:scale-110">Computer Courses</Button>
              <Button className="w-full py-3 mb-2 rounded-lg bg-primary text-primary-foreground hover:bg-secondary hover:scale-110">ITI Courses</Button>
              <Button className="w-full py-3 mb-2 rounded-lg bg-primary text-primary-foreground hover:bg-secondary hover:scale-110">Fashion Designing</Button>
              <Button className="w-full py-3 mb-2 rounded-lg bg-primary text-primary-foreground hover:bg-secondary hover:scale-110">Spoken English</Button>
            </div>
          </div>
        </Card>

        {/* Image Carousel Card */}
        <Card className="w-full md:w-1/2 h-full bg-card border-2 border-secondary rounded-lg shadow-lg">
          <div className="relative w-full h-full rounded-lg overflow-hidden">

            {/* View More Button */}
            <Button
              onClick={() => {
                window.location.href = 'gallery.tsx';
              }}
              className="absolute bottom-2 right-0 transform -translate-x-1/2 bg-primary text-sm sm:text-sm text-primary-foreground border-primary font-bold rounded-full px-2 py-1 sm:px-3 sm:py-2 z-10 hover:bg-secondary hover:scale-105"
            >
              View More
            </Button>

            {/* Image Carousel */}
            <img
              src={images[currentImageIndex]}
              alt="Carousel Image"
              className="object-cover w-full h-full rounded-lg"
            />

            {/* Navigation */}
            <Button
              onClick={prevImage}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-primary text-primary-foreground rounded-full p-4 sm:p-4 shadow-md transition-all duration-300 hover:scale-110 hover:bg-secondary hover:text-primary"
            >
              &#8249;
            </Button>
            <Button
              onClick={nextImage}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-primary text-primary-foreground rounded-full p-4 sm:p-4 shadow-md transition-all duration-300 hover:scale-110 hover:bg-secondary hover:text-primary"
            >
              &#8250;
            </Button>
          </div>
        </Card>
      </div>

      {/* About Us Section */}
      <div className="w-full mt-10 md:mt-16 flex flex-col items-center px-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">About Us</h2>
        <p className="text-md md:text-lg text-secondary font-bold mb-6 max-w-3xl">
          At Manipal Computer Education (MCE), our mission is to empower individuals with the skills and knowledge needed to excel in the digital age.
          We provide a wide range of courses in technology, design, and professional development tailored to meet industry demands.
          With experienced faculty and state-of-the-art facilities, we foster an environment of learning and innovation.
          Join us to embark on a journey of growth and success!
        </p>

        <Button
          onClick={() => {
            window.location.href = '#aboutus';
          }}
          className="py-3 px-6 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-secondary transition-all"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default page;
