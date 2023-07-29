import React from 'react' ;
import './feature.css' ;
const Feature = ({title, text}) => {
  return (
    <div className='featurewala'>
    <div className='text'>
      <p>{text}</p>
    </div>
  </div>
  )
}

export default Feature