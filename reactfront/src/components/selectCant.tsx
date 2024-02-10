import React, { useEffect, useState } from 'react'
import { useTheme } from '../hooks/ThemeContext';

interface SelectCantProps {
  cantidad: number; 
  itemId: string;
  onSelectUpdate?: (selectCant:number) => void;
}
interface Product {
  id: number;
  cantidadSeleccionada: string;
  // Otros campos
}
const SelectCant: React.FC<SelectCantProps> = ({cantidad,itemId,onSelectUpdate}) => {
  const cantidadDisponible=30;
  const { mode,handleCarritoContador } = useTheme();
  const [value, setValue] = useState(cantidad);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleCarritoContador(e);
    setValue(parseInt(e.target.value));
    if (onSelectUpdate) {
      onSelectUpdate(parseInt(e.target.value));
    }
  };

  return (
    <div className='flex flex-col max-w-md'>
      <label htmlFor={`cantidad_${itemId}`} className={`ml-1 mb-2 ${!mode?'':'text-black'}`}>Cantidad</label>
      <select name={`cantidad_${itemId}`} value={value} id={`cantidad_${itemId}`} onChange={handleChange} className={` cursor-pointer p-2 rounded-lg bg-transparent border-2 ${!mode?'border-buttonColor ':'text-black border-buttonColorSecond'}`}>
        <option value="0" hidden>Selecciona una cantidad</option>
        {[...Array(cantidadDisponible).keys()].map((num) => (
          <option className={` ${!mode?' bg-colorTarget':'bg-white'}`} key={num+1} value={num+1}>{num+1}</option>
        ))}
      </select>
    </div>
  )
}

export default SelectCant
