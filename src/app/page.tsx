import React from 'react';

const page = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
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
      {/* Text Below Logo */}
      <p className="absolute top-[calc(2.5rem+3rem)] sm:top-[calc(2.5rem+10rem)] left-1/2 transform -translate-x-1/2 text-md font-bold text-primary z-20 sm:text-xl md:text-2xl">
        SINCE 2001
      </p>
    </div>
  );
};

export default page;
