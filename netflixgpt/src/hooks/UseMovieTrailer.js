import { useEffect } from "react";
import { API_OPTIONS } from "../utils/consts";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMovieVideos = async () => {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
            API_OPTIONS
        );
        const json = await response.json();

        const filteredVideos = json.results.filter((video) => video.type === "Trailer");
        const trailer = filteredVideos.length ? filteredVideos[0] : json.results[0];

        dispatch(addTrailerVideo(trailer));
    };

    useEffect(() => {
        if (movieId) {  // Ensure movieId is present before fetching
            getMovieVideos();
        }
    }, [movieId]);  // Fix: Added dependency to ensure re-fetching when movieId changes
};

export default useMovieTrailer;
