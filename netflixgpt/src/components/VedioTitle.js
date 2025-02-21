import React from 'react';

const VedioTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 flex flex-col justify-center px-24 text-white bg-gradient-to-r from-black via-transparent w-screen">
      <h1 className="text-5xl md:text-7xl font-extrabold">{title}</h1>
      <p className="text-md py-6 w-1/3 leading-relaxed">{overview}</p>
      <div className="flex space-x-4">
        <button className="bg-white text-black px-8 py-3 text-md rounded-lg font-semibold flex items-center space-x-2 hover:bg-opacity-80 transition">
          ▶ Play
        </button>
        <button className="bg-gray-700 text-white px-8 py-3 text-md rounded-lg font-semibold flex items-center space-x-2 bg-opacity-70 hover:bg-opacity-50 transition">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VedioTitle;
