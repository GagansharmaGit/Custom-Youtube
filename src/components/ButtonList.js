import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const LIST = ["All","Gaming","Song","Live","News","World Affairs"];
  return (
    <div className='flex'>
      {
        LIST.map((el)=>(
          <Button  name = {el}/>
        ))
      }
  </div>
  )
}

export default ButtonList