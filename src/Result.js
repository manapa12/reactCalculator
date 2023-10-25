import React from 'react'

const Result = ({result,myNumber}) => {
  
  return (
    <h1 className='result-display'>
      {myNumber ? myNumber : "0"}
    </h1>
  )
}

export default Result