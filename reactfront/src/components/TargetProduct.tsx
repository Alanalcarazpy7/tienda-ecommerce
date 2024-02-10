import React from 'react'
import { useTheme } from '../hooks/ThemeContext';

interface typesProps{
  id: number; 
  img:string,
  title:string,
  price:number,
  handleClick:(id: number,e: React.MouseEvent<HTMLDivElement>) => void;
}

const TargetProduct:React.FC<typesProps> = ({id,img,title,price,handleClick}) => {
  const { mode } = useTheme();

  return (
      <div onClick={(e) => handleClick(id, e)} className={`max-w-xs p-5 rounded-xl cursor-pointer shadow-2xl hover:shadow-black ${!mode?'bg-colorTarget  hover:opacity-75':'hover:filter hover:brightness-75'}`} >
        <div className='flex justify-center mb-6  '>
          <img className='rounded-xl' src={img} alt="" />
        </div>
        <div className='mt-5'>
          <h3 className={`text-center text-xl mb-2 ${!mode?'':'text-black'}`}><b>{title}</b></h3>
          <h4 className={`text-center text-lg  ${!mode?'text-buttonColor':'text-black'}`}><b>${price}</b></h4>
        </div>
      </div>
  )
}

export default TargetProduct
