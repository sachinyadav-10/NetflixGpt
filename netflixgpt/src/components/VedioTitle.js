import React from 'react';

const VedioTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 flex flex-col justify-center pt-[20%] md:pt-0 px-6 md:px-24 text-white bg-gradient-to-r from-black via-transparent w-screen">
      <h1 className=" text-xl md:text-4xl md:text-5xl font-extrabold">{title}</h1>
      <p className="hidden md:inline-block text-sm text-justify py-6 w-1/3 leading-relaxed">{overview}</p>
      <div className=" my-4 md:my-0 flex space-x-4">
        <button className="bg-white text-black px-3 py-1 md:px-8 md:py-3 text-md rounded-lg font-semibold flex items-center space-x-2 hover:bg-opacity-80 transition">
          ▶ Play
        </button>
        <button className="hidden md:inline-block bg-gray-700 text-white px-8 py-3 text-md rounded-lg font-semibold flex items-center space-x-2 bg-opacity-70 hover:bg-opacity-50 transition">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VedioTitle;
