import React from 'react'
import language from "../utils/languageConstants"
import { useSelector } from 'react-redux'
const GptSearchBar = () => {

    const languageKey = useSelector((store)=>store.config.language);

  return (
    <div className='pt-[5%] flex justify-center'>
        <form className='w-1/2 bg-black  grid grid-cols-12'>
            <input 
            type='text' 
            className='p-4 m-4 col-span-9' 
            placeholder={language[languageKey]?.gptSearchplaceholder}
            /> 
            <button 
            className='col-span-3 py-2 m-4 px-4 bg-red-600 text-white rounded-lg'>
                {language[languageKey]?.search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar