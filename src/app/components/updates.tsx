import React from 'react'

const Updates = () => {
  return (
    <div className='flex flex-col justify-center items-center h-96 font-Sarabun'>
        <div className='text-center flex flex-col justify-center items-center'>
        <h3 className='text-4xl py-3'>Get latest updates</h3>
        <p className='opacity-50 w-3/4'>Subscribe to our newsletter to get latest news and updates on our products and services</p>
        </div>
        <div className='m-5 w-2/6 flex justify-center'> 
            <form className='w-1/2'>
                <input type="email" placeholder='enter email' className=' p-1 w-full my-3' />
                <div className='bg-customGreen text-white text-center rounded-md p-2'>
                <button type='submit'>Suscribe</button>
                </div>
                
            </form>
        </div>
    </div>
  )
}

export default Updates