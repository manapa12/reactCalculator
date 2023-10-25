import React from 'react'

const Button = ({onhandleClick,buttonValues}) => {
  return (
    <div className='calc-board'>
        {buttonValues.map((item,index) => (<button onClick={() => onhandleClick(index)} key={index} className={`button-${index}`}>{item}</button>))}
    </div>
  )
}

export default Button