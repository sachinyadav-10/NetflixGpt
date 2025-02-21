import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black text-white px-8">
      {/* Main Section Overlapping Effect */}
      <div className="-mt-32 relative z-20 space-y-8">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
      </div>

      {/* Scrollable Movie Lists */}
      <div className="space-y-8">
        <MovieList title="Trending" movies={movies.popularMovies} />
        <MovieList title="Upcoming" movies={movies.nowPlayingMovies} />
        <MovieList title="Horror" movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
