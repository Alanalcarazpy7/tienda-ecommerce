import React, { useEffect } from 'react'
import { useTheme } from '../../hooks/ThemeContext'

interface Product {
  cantidadSeleccionada: number;
  price: number;
}

const ProductOrder = () => {
  const { mode }=useTheme()
  let productos= localStorage.getItem('product');

  const subTotal=()=>{
    let sum=0;
    if (productos){
      const objProduct=JSON.parse(productos);
      objProduct.forEach((producto: Product) => {
        sum += producto.cantidadSeleccionada * producto.price;
      });    
    }
    return sum;
  }

  const impuestos=()=>{
    const impuestos=5;
    let res=0;
    if (productos){
      const objProduct=JSON.parse(productos);
      objProduct.forEach((producto: Product) => {
        res += producto.cantidadSeleccionada ;
      });    
    }
    return res* impuestos;
  }

  return (
    <div className={`px-5 py-10 rounded-xl ${!mode ? 'bg-colorNav ' : 'bg-gray-200 '}`}>
      <div className='mb-5'>
        <div className='flex justify-between'>
          <h3 className={`${!mode ? 'text-white' : 'text-black'}`}>Subtotal</h3>
          <h3 className={`${!mode ? 'text-white' : 'text-black'}`}><b>$ {subTotal()}</b></h3>
        </div>
        <div className='border-b border-solid border-black mb-2'></div>
        <div className='flex justify-between'>
          <h3 className={`${!mode ? 'text-white' : 'text-black'}`}>Shipping</h3>
          <h3 className={`${!mode ? 'text-white' : 'text-black'}`}><b>$ 5.00</b></h3>
        </div>
        <div className='border-b border-solid border-black mb-2'></div>
        <div className='flex justify-between'>
          <h3 className={`${!mode ? 'text-white' : 'text-black'}`}>Tax</h3>
          <h3 className={`${!mode ? 'text-white' : 'text-black'}`}><b>$ {impuestos()}</b></h3>
        </div>
        <div className='border-b border-solid border-black'></div>
      </div>
      <div className='flex justify-between'>
        <h3 className={`${!mode ? 'text-white' : 'text-black'}`}>Order Total</h3>
        <h3 className={`${!mode ? 'text-white' : 'text-black'}`}><b>$ {impuestos()+subTotal()+5}</b></h3>
      </div>
    </div>
  )
}

export default ProductOrder
