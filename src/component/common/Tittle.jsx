import React from 'react'

const Tittle = ({name,namebold}) => {
  return (
    <h2 className='text-center text-primary font-normal text-[35px]'>{name} <span className='font-bold'>{namebold}</span></h2>
  )
}

export default Tittle