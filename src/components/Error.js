import React from 'react'
import {useRouteError} from 'react-router-dom'

 const Error = () => {
    const err=useRouteError();
    console.log(err);
  return (
    <>
        <h1>Ooooops!!</h1>
        <h2>Something went wrong</h2>
        <h2>{err.status +   " : " + err.statusText}</h2>
    </>
  )
}

export default Error;