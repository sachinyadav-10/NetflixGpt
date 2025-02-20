import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/UseMovieTrailer";  // Ensure correct file name

const VideoBackground = ({ movieId }) => {
  const trailerVedio = useSelector((store) => store.movies?.trailerVedio);  // Fix: Matched Redux state name

  // Fetch trailer and update the store
  useMovieTrailer(movieId);

  return (
    <div className="w-screen " >
      {trailerVedio ? (
        <iframe
        className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailerVedio?.key}?&autoplay=1&mute=1&rel=0`}  // Fix: Corrected state variable name
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      ) : (
        <p>Loading trailer...</p>
      )}
    </div>
  );
};

export default VideoBackground;
