import React from 'react';
import SelectCant from '../selectCant';
import { useTheme } from '../../hooks/ThemeContext';

interface TypesProps {
  nombre: string;
  imagen: string;
  categoria: string;
  cantidad: number;
  precio: number;
  itemId: string;
  onDelete: (id: number) => void;
  onUpdateCant: (id: number, selectCant: number) => void;
}

const ProductsSelect: React.FC<TypesProps> = ({ nombre, imagen, categoria, cantidad, precio, itemId, onDelete, onUpdateCant }) => {
  const { mode }=useTheme()

  const updateCant = (selectCant: number) => {
    onUpdateCant(parseInt(itemId), selectCant);
  };
  
  return (
    <div className='grid grid-cols-4 gap-10 max-w-4xl'>
      <div className='flex justify-center'>
        <img className='rounded-xl max-h-32' src={imagen} alt='' />
      </div>
      <div>
        <h2 className={`mb-3 ${!mode?'':' text-black'}`}>{nombre}</h2>
        <h3 className={`${!mode?'':' text-black'}`}>{categoria}</h3>
      </div>
      <div className='text-center'>
        <div className='mb-3'>
          <SelectCant cantidad={cantidad} itemId={itemId} onSelectUpdate={updateCant} />
        </div>
        <h4 onClick={() => onDelete(parseInt(itemId))} className={`cursor-pointer hover:opacity-85 hover:underline ${!mode?' text-colorPrimario':' text-colorSecundario'}`}>
          remove
        </h4>
      </div>
      <div className='text-center'>
        <h3 className={`${!mode?'':'text-gray-600'}`}>
          <b>${precio}</b>
        </h3>
      </div>
    </div>
  );
};

export default ProductsSelect;
