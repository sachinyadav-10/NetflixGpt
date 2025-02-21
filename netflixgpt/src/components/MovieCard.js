import React from "react";
import { IMG_CDN_URL } from "../utils/consts";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 md:w-60 relative overflow-hidden">
      <img 
        alt="Movie Poster" 
        className="rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110 hover:-translate-y-2"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
