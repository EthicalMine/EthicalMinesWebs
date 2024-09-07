import React from 'react'

const Button = ({children}: any) => {
  return (
    <div>
        <button className='py-3 px-10 my-5 mx-1 bg-gradient-tob rounded-md'>{children}</button>
    </div>
  )
}

export default Button