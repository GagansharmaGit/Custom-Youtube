import React from 'react'

export const Button = ({name}) => {
  return (
    <div>
        <button className="px-5 m-2 py-2 bg-gray-200 rounded-md hover:bg-gray-300">{name}</button>
    </div>
  )
}
export default Button;