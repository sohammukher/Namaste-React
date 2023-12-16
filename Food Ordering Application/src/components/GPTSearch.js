import React from 'react'

import { Provider, useSelector } from "react-redux";
import appStore from "../utils/appStore";
import GPTSearchUI from './GPTSearchUI';

const GPTSearch = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  console.log("Inside GPT SEARCH ", showGptSearch);
  return (
    <>
        {showGptSearch?<GPTSearchUI/>:<div></div>}
    </>
  )
}

export default GPTSearch