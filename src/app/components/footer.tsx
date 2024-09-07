import React from 'react'
import { IoLogoTwitter } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { CiInstagram, CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div className='bg-[#23390A] flex justify-center items-center text-white h-96'>
        <div className='flex justify-center items-center h-1/2'>
        <div className='w-2/4 h-full  px-5'>
            <h3 className='font-medium'>Ethicalmine</h3>
            <p className='text-xs opacity-50 py-5 leading-6 w-3/4'>Mining with Integrity for a Sustainable Future. Join us as we can help you achieve your ethical and sustainability goals.</p>
            <ul className='flex text-gray-500 '>
                <li className='text-blue-400 px-1'><IoLogoTwitter /></li>
                <li className='px-1'><FaFacebook /></li>
                <li className='px-1'><CiInstagram /></li>
                <li className='px-1'><CiLinkedin /></li>
            </ul>
        </div>
        <div className='w-1/4 h-full px-5 text-xs'>
            <p className='opacity-50'>Company</p>
            <ul className='py-2 font-extralight'>
                <li className='py-1'>About us</li>
                <li className='py-1'>Our mission</li>
                <li className='py-1'>Sustainability Practices</li>
                <li className='py-1'>Partners & Affliates</li>
                <li className='py-1'>Blog</li>
                <li className='py-1'>Contact us</li>
            </ul>
        </div>
        <div className='w-1/4 h-full  px-5 text-xs'>
            <p className='opacity-50'>Product</p>
            <ul className='py-2 font-extralight'>
                <li className='py-1'>Features</li>
                <li className='py-1'>Pricing</li>
                <li className='py-1'>News</li>
                <li className='py-1'>Help desk</li>
                <li className='py-1'>Supoort</li>
            </ul>
        </div>
        <div className='w-1/4 h-full px-5 text-xs'>
            <p className='opacity-50'>Legal</p>
            <ul className='py-2 font-extralight'>
                <li className='py-1'>Privacy Policy</li>
                <li className='py-1'>Terms & Conditions</li>
                <li className='py-1'>Sustainability Practices</li>
                <li className='py-1'>Return Policy</li>
            </ul>
        </div>
        </div>
        
        
    </div>
  )
}

export default Footer