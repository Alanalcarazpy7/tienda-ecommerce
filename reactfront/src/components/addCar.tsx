import React, { useEffect, useState } from 'react'
import { useTheme } from '../hooks/ThemeContext';
import axios from 'axios';

interface typesProps{
  handleClick:()=>void;
}
interface Product {
  id: number;
  images: string;
  title: string;
  price:number;
  description: string;
  clic?:boolean;
  category:{
    name:string;
  };
  handleClick:()=>void;
  
  // ... otras propiedades
}
const URI='http://localhost:8000/products'

const AddCar:React.FC<typesProps> = ({handleClick}) => {

  const { mode} = useTheme();

  return (
    <div>
      <input 
        type="button" 
        value="ADD TO BAG" 
        onClick={handleClick}
        className={`cursor-pointer  w-30 rounded-lg p-2  hover:opacity-80 ${!mode?'bg-buttonColor text-black':' bg-buttonColorSecond text-white'}`}
        />
    </div>
  )
}

export default AddCar
