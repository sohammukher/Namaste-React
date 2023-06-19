import React from 'react'
import {useRouteError}  from "react-router-dom"

function Error() {

    // All the Errors will be caught and 
    // will be avaiable to us inside the object "err"
    const err = useRouteError()

    console.log(err)

  return (
    <>
    <h1>Oops!!!!</h1>
    <h2>Something Went Wrong!</h2>
    <h2>{err.data}</h2>
    </>
  )
}

export default Error