import React from 'react'
import NavComponent from '../components/nav'
import { useTheme } from '../hooks/ThemeContext';

const About = () => {
  const { mode } = useTheme();
  
  return (
    <div>
      <div className=''>
        <NavComponent section='about' />
      </div>
      <div className='mt-10'>
        <div className='flex flex-wrap items-center mb-7 justify-center'>
          <h1 className={`mr-5 text-6xl mb-4 text-center ${!mode ? '' : ' text-gray-700'}`}><b>We love</b></h1>
          <h2 className={`py-2 text-5xl  rounded-lg text-black px-5 ${!mode ? 'bg-colorPrimario' : ' text-white bg-colorSecundario'}`}>comfy</h2>
        </div>
        <div className='flex justify-center items-center'>
          <h4 className={` max-w-3xl ${!mode ? '' : ' text-black'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus blanditiis ea alias totam obcaecati earum, vitae nihil voluptate impedit aliquid, ut quam hic veritatis, libero eaque nesciunt quia magni nobis.</h4>
        </div>
      </div>
    </div>
  )
}

export default About
