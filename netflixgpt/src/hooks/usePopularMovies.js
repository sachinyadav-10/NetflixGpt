import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/consts";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies =()=>{
    //   fetching data from tmdb aapi and update the store
  const dispatch = useDispatch();
  const popularMovies= useSelector(store=>store.movies.popularMovies)

  const getpopularmovies = async ()=>{
    const data= await fetch('https://api.themoviedb.org/3/movie/popular?page=1',API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };
  useEffect(()=>{
    !popularMovies&&getpopularmovies();
  },[])
}
export default usePopularMovies;