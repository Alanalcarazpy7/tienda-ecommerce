import React from 'react'
import { useTheme } from '../../hooks/ThemeContext';

interface ButtonComponentProps {
  tipo: string;
  onClic:(e:React.MouseEvent<HTMLButtonElement>)=>void
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ tipo,onClic }) => {
  const { mode } = useTheme();
  
  return (
    <div>
      <button 
        onClick={(e)=>onClic(e)} 
        type="button" 
        className={`${tipo === 'search' ? (!mode ? 'bg-colorPrimario' : 'bg-colorSecundario text-white') : (!mode ? 'bg-yellow-500' : ' bg-purple-500 text-white')} py-2 w-full rounded-xl text-black ${!mode ? '' : 'text-gray-600'}`}>
        <b>{tipo.toUpperCase()}</b>
      </button>
    </div>
  )
}

export default ButtonComponent
