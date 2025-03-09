import React, { useRef } from 'react';
import language from "../utils/languageConstants";
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openAi';
import { API_OPTIONS } from '../utils/consts';
import { addGptMovieResult } from '../utils/gptSearchSlice';

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const languageKey = useSelector((store) => store.config.language);
    const searchText = useRef(null);

    // search movie in TMDB 
    const searhMovieTMDB = async (movie)=>{
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="
            +movie+
            "&include_adult=false&language=en-US&page=1", API_OPTIONS);
            const json = await data.json();
            return json.results;
        
    }
    const handelGptSearchClick = async () => {
        console.log(searchText.current.value);

    const gptQuerry =
              "Act as a movie recommendation system and suggest some movies for the querry : "
              +searchText.current.value
              +", only give me the name of 5 movies name which are more rated , comma seprated . like the example result given ahead . Example result : Gadar,Sholey,Don,Goalmaal,Koi Mil Gaya";
        try {
            const gptResult = await openai.chat.completions.create({
                messages: [{ role: 'user', content: gptQuerry }],
                model: 'gpt-3.5-turbo',
            });

            console.log("GPT Response:", gptResult.choices[0]?.message?.content);
            const gptMovies = gptResult.choices[0]?.message?.content.split(",");
            
            // for each movie lets search TMDB API 
            const promiseArray = gptMovies.map(movie=>searhMovieTMDB(movie));
            const tmdbResults = await Promise.all(promiseArray);
            dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}));
             
        } catch (error) {
            console.error("Error fetching GPT response:", error);
        }
    };

    return (
        <div className='pt-[25%] flex justify-center'>
            <form 
              className='w-1/2 bg-black grid grid-cols-12'
              onSubmit={(e) => e.preventDefault()} // ✅ Fixed missing ()
            >
                <input 
                  type='text' 
                  ref={searchText}  
                  className='p-4 m-4 col-span-9' 
                  placeholder={language[languageKey]?.gptSearchplaceholder}
                /> 
                <button 
                  className='col-span-3 py-2 m-4 px-4 bg-red-600 text-white rounded-lg'
                  onClick={handelGptSearchClick}
                >
                    {language[languageKey]?.search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;
