import React from 'react'

import Error from '../assets/Error.svg'
const ShowError = () => {
  return (
    <>
    {/* the above svg is donload from undraw */}
    <img src={Error} alt="" style={{height:"480px", width:"1500px"}} />
    <h1 className='text-center my-2'>Please Check Your Connection!!</h1>
    </>
  )
}

export default ShowError