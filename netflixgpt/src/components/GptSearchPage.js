import React from 'react'
import GptSearchBar from './GptSearchBar'
import { LOGIN_BG } from '../utils/consts'
import GptMovieSuggestion from './GptMovieSuggestion'

const GptSearchPage = () => {
  return (
    <div>
      <div className='absolute top-0 left-0 w-full h-full -z-10'>
                <img
                    className='w-full h-full object-cover'
                    src={LOGIN_BG}
                    alt='background_image'
                />
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
            </div>
        <GptSearchBar/>
        <GptMovieSuggestion/>
        Gpt Movie Suggestions
    </div>
  )
}

export default GptSearchPage