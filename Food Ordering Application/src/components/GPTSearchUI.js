import React from 'react';
import GptFoodSuggestions from './GptFoodSuggestions';
import GptSearchBar from './GptSearchBar';

const GPTSearchUI = () => {
  return (
    <div className='dark:bg-black'>
        <GptSearchBar/>
        <GptFoodSuggestions/>
    </div>
  )
}

export default GPTSearchUI