import React from 'react'
import { lang } from '../utils/languageConstants'
import cartSlice from '../utils/cartSlice'
import { useSelector } from 'react-redux'
// import gptSlice from '../utils/gptSlice'

const GptSearchBar = () => {

    const langKey = useSelector((store)=>store.config.lang);

    // {lang[langKey].gptSearchPlaceHolder}

  return (
    <div className='pt-[2%] flex justify-center '>
        <form className='w-1/2 bg-yellow-500 grid grid-cols-12 rounded-lg opacity-95'>
            <input type='text'className='p-4 m-4  col-span-9 rounded-lg font-semibold' placeholder={lang[langKey].gptSearchPlaceHolder}></input>
            <button className='py-2 px-4 bg-blue-500 text-white rounded-lg col-span-3 m-4  font-semibold'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar