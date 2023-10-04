import React from 'react'

const index = ({ setModalIsOpen }) => {
  return (
    <div className='backdrop' onClick={() => setModalIsOpen(prev => !prev)}></div>
  )
}

export default index