import React from 'react'
import { useTheme } from '../../hooks/ThemeContext';

interface typesProps{
  section: string | any;
}

const MenuMovil:React.FC<typesProps> = ({section}) => {
  const { mode } = useTheme()

  const repeatStyleClaro=()=>{
    return 'bg-colorNav rounded-xl text-white'
  }
  const repeatStyleOscuro=()=>{
    return 'bg-slate-600 rounded-xl text-white '
  }
  const hoverOscuro=()=>{
    return 'hover:text-white hover:rounded-xl hover:bg-gray-500 hover:bg-opacity-30'
  }
  const hoverClaro=()=>{
    return 'hover:rounded-xl hover:bg-gray-500 hover:bg-opacity-25'
  }

  return (
    <div className=''>
      <ul className={` w-44 absolute mt-7 p-1 rounded-xl ${!mode ? 'bg-colorNav':' bg-colorNavSecond'}`}>
        <a href="/"><li className={`p-1 ${!mode ? ` text-white hover:text-white ${section !== 'home' && hoverOscuro()} ${section=='home' && repeatStyleOscuro()} `:`text-gray-700 ${section !== 'home' && hoverClaro()} ${section=='home' && repeatStyleClaro()}`}`}>Home</li></a>
        <a href="/about"><li className={`p-1 ${!mode ? ` text-white hover:text-white ${section !== 'about' && hoverOscuro()} ${section=='about' && repeatStyleOscuro()} `:`text-gray-700 ${section !== 'about' && hoverClaro()} ${section=='about' && repeatStyleClaro()}`}`}>About</li></a>
        <a href="/products"><li className={`p-1 ${!mode ? ` text-white hover:text-white ${section !== 'products' && hoverOscuro()} ${section=='products' && repeatStyleOscuro()} `:`text-gray-700 ${section !== 'products' && hoverClaro()} ${section=='products' && repeatStyleClaro()}`}`}>Products</li></a>
        <a href="/cart"><li className={`p-1 ${!mode ? ` text-white hover:text-white ${section !== 'cart' && hoverOscuro()} ${section=='cart' && repeatStyleOscuro()} `:`text-gray-700 ${section !== 'cart' && hoverClaro()} ${section=='cart' && repeatStyleClaro()}`}`}>Cart</li></a>
      </ul>
    </div>
  )
}

export default MenuMovil
