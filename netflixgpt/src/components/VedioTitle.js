import React from 'react'

const VedioTitle = ({title,overview}) => {
  return (
    <div className='pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
        <h1 className='text-6xl font-bold' >{title}</h1>
        <p className='text-lg py-6 w-1/3' >{overview}</p>
        <div className=''>
            <button className='bg-white text-black px-12 p-4 text-xl rounded-lg hover:bg-opacity-70'>🔈Play</button>
            <button className='bg-gray-500 text-white p-4 mx-2 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-70'>More info</button>
        </div>
    </div>
  )
}

export default VedioTitle