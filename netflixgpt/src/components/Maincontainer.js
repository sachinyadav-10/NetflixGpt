import React from 'react';
import { useSelector } from 'react-redux';
import VedioTitle from './VedioTitle';
import VedioBackground from './VedioBackground';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if (!movies) return null; // Fixed return issue

    const mainMovie = movies[0];
    const { original_title, overview, id } = mainMovie;

    return (
        <div className="relative w-full h-screen">
            <VedioBackground movieId={id} />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent" />
            <VedioTitle title={original_title} overview={overview} />
        </div>
    );
};

export default MainContainer;
