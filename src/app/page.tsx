import React from 'react'
import { FaGithub, FaDiscord, FaTwitter, FaReddit} from "react-icons/fa";
import Statistics from './components/statistics';
import Aboutus from './components/about'
import Chooseus from './components/choose';
import Updates from './components/updates';
import Footer from "./components/footer"
import Button from './components/Button';
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div className='relative h-screen w-full font-light'>
      <video
       autoPlay
       loop
       muted
       playsInline
       className="absolute inset-0 w-full h-full object-cover"

        >
          <source src="/Background.mp4"  type='video/mp4'/>

      </video>
      <div className='absolute inset-0 bg-gradient-to-b from-black/60 to-black/0 z-10'>

      <div className='absolute z-10 h-screen bg-cover bg-center font-Sarabun'>
      <nav className='text-white flex justify-around p-10' >
        <div>
          <h3 className='font-medium'>Ethicalmine</h3>
        </div>
        <div>
          <ul className='flex text-sm'>
            <li className='px-2'>Home</li>
            <li className='px-2'>Solution</li>
            <li className='px-2'>Blog</li>
            <li className='px-2'>Contact Us</li>
          </ul>
        </div>
        <div>
        <ul className='flex'>
          <li className='px-2'><FaGithub /></li>
          <li className='px-2'><FaDiscord /></li>
          <li className='px-2'><FaReddit /></li>
          <li className='px-2'><FaTwitter /></li>
        </ul>
        </div>
      </nav>
      <section className='h-4/6'>
        <div className='flex flex-col justify-center items-center text-center h-full '>
        <div className='flex flex-col items-center w-3/5'>
          <h1 className='bg-gradient-to-r text-6xl font-bold bg-clip-text text-transparent mb-5'>Revolutionizing the Mining Industry <span className='text-white'>with Blockchain</span> </h1>
          <p className='text-white w-4/6 tracking-widest text-sm font-light leading-6'>Our technology ensures that every step of the mining supply chain is transparent, ethical, and sustainable.</p>
        </div>
        <div className='flex text-white font-medium'>
          <Button><Link href="/Contact">Get Started</Link></Button>
          <button className="py-3 px-10 my-5  mx-1 text-black bg-gradient-tob2 rounded-md">Learn more</button>
        </div>
        </div>
       
      </section>
      </div>
      </div>
      
    </div>
    <Statistics/>
    <Aboutus/>
    <Chooseus/>
    <Updates/>
    <Footer/>
    </div>
    
  )
}

export default Home