import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/UseMovieTrailer"; 

const VideoBackground = ({ movieId }) => {
  const trailerVedio = useSelector((store) => store.movies?.trailerVedio); 

  // Fetch trailer and update the store
  useMovieTrailer(movieId);

  return (
    <div className="w-screen h-screen overflow-hidden">
      {trailerVedio ? (
        <iframe
          className="absolute top-0 left-0 w-screen h-screen"
          src={`https://www.youtube.com/embed/${trailerVedio?.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVedio?.key}&controls=0&showinfo=0`}
          title="YouTube video player"
          allow="autoplay; encrypted-media; fullscreen"
          frameBorder="0"
        ></iframe>
      ) : (
        <p className="text-white text-center">Loading trailer...</p>
      )}
    </div>
  );
};

export default VideoBackground;
