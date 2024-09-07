import React from 'react'
import { IoCheckmarkSharp } from "react-icons/io5";


interface clickProps {
    onClick: ()=> void
}
const Modal: React.FC<clickProps> = ({onClick}) => {
  return (
    <>
    <div className="h-screen w-screen bg-black opacity-70 z-40 fixed inset-0 ">
    </div>
    <div className="flex items-center justify-center z-50 h-screen fixed inset-0">
    <div className="p-12 flex flex-col justify-center items-center w-1/3 h-fit rounded-2xl font-Sarabun text-black text-center border border-gray-300 bg-white">
        <p className='text-white bg-gradient-tob p-3 rounded-full'><IoCheckmarkSharp /></p>
        <h3 className='font-bold text-2xl m-1'>Successful</h3>
        <p className='text-sm m-2'>You have successfully subscribed for Ethicalmine newsletter. you will be notified when the app is launched.</p>
        <button type='submit' className='bg-gradient-tob rounded-md text-white w-full m-3' onClick={onClick}>Back</button>
    </div>
    </div>
   
        
    </>
  )
}

export default Modal