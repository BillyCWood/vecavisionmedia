import React from 'react'

const Vid =  ({ src, id }) => {
  return (

    <video src={src} id='video' controls className='aspect-video w-[1280px]' />


  )
}

export default Vid