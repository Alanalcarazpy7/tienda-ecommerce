import React, { useEffect, useRef, useState } from 'react'
import { TbLetterC } from "react-icons/tb";
import { BsFillSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useTheme } from '../hooks/ThemeContext';
import { Link } from 'react-router-dom';
import MenuMovil from './movilDesing/menuMovil';
import { GiHamburgerMenu } from "react-icons/gi";

interface typesProps{
  section: string | any;
  clic?:boolean
}

const NavComponent:React.FC<typesProps> = ({section,clic}) => {
  const { mode,toggleMode,getCantProducts } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  //False==Modo Oscuro
  const repeatStyleClaro=()=>{
    return 'bg-colorNav rounded-xl text-gray-200'
  }

  const repeatStyleOscuro=()=>{
    return 'bg-slate-600 rounded-xl text-white'
  }

  const hoverOscuro=()=>{
    return 'hover:text-white hover:rounded-xl hover:bg-gray-500 hover:bg-opacity-30'
  }

  const hoverClaro=()=>{
    return 'hover:rounded-xl hover:bg-amber-950 hover:bg-opacity-30'
  }

  useEffect(()=>{
    getCantProducts()
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Establecer 768 como el límite para considerar el móvil
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    const handleClickOutside = (event:MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    // Agrega un event listener para detectar clics en el documento
    document.addEventListener('mousedown', handleClickOutside);

    return () => window.removeEventListener('resize', checkScreenSize);
  },[])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`flex justify-between items-center  p-3 ${!mode?'bg-colorNav':' bg-colorNavSecond'}`}>
      <div className='flex flex-col'>
        {isMobile && (
          <div className={`text-2xl cursor-pointer ${!mode?'':' text-gray-800'}`} onClick={toggleMobileMenu} >
            <GiHamburgerMenu />
          </div>
        )}
        {isMobileMenuOpen && isMobile && (
          <div ref={menuRef}>
            <MenuMovil 
            section={section}
            />
          </div>
        )}
      </div>
      {!isMobile && (
      <div className={`ml-5 p-2 rounded-lg ${!mode?' bg-colorPrimario text-black':'bg-colorSecundario text-white'}`}>
        <TbLetterC />
      </div>
      )}
      {!isMobile && (
        <div>
          <ul className={`flex space-x-3 `}>
            <li className='' ><a className={`p-2 pl-3 pr-3  ${!mode?` text-white hover:text-white ${section !== 'home' && hoverOscuro()} ${section=='home' && repeatStyleOscuro()} `:`text-gray-500 hover:text-gray-200 ${section !== 'home' && hoverClaro()} ${section=='home' && repeatStyleClaro()}`} `} href="/">Home</a></li>
            <li ><a className={`p-2 pl-3 pr-3 ${!mode?` text-white hover:text-white ${section !== 'about' && hoverOscuro()} ${section=='about' && repeatStyleOscuro()}`:`text-gray-500 hover:text-gray-200 ${section !== 'about' && hoverClaro()} ${section=='about' && repeatStyleClaro()}`} `} href="/about">About</a></li>
            <li ><a className={`p-2 pl-3 pr-3 ${!mode?` text-white hover:text-white ${section !== 'products' && hoverOscuro()} ${section=='products' && repeatStyleOscuro()}`:`text-gray-500 hover:text-gray-200 ${section !== 'products' && hoverClaro()} ${section=='products' && repeatStyleClaro()}`} `} href="/products">Products</a></li>
            <li ><a className={`p-2 pl-3 pr-3 ${!mode?` text-white hover:text-white ${section !== 'cart' && hoverOscuro()} ${section=='cart' && repeatStyleOscuro()}`:`text-gray-500 hover:text-gray-200 ${section !== 'cart' && hoverClaro()} ${section=='cart' && repeatStyleClaro()}`} `} href="/cart">Cart</a></li>
          </ul>
        </div>
      
      )}
      <div className='flex cursor-pointer items-center'>
        <div onClick={toggleMode}>
          {!mode ?<div className='mr-2 text-2xl'><BsFillSunFill /></div>:<div className='mr-2 text-black'><FaMoon /></div>}
        </div>
        <Link to='/cart'>
          <div className={`relative mr-2 text-2xl ${!mode?'text-white':'text-black'} `}>
            <div className=' relative'>
              <div className='p-3'>
                <IoCartOutline />
              </div>
              <div className={`absolute right-0 top-0  rounded-3xl ${!mode?'bg-colorPrimario':' bg-colorSecundario'}`}>
                <h5 className={`text-xs py-0.5 px-2  ${!mode?'text-black':'text-white'}`}><b>{getCantProducts()}</b></h5>
              </div>            
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default NavComponent
