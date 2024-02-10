import React, { useState } from 'react'
import NavComponent from '../components/nav'
import FiltrarProductos from '../components/productSection/filtrarProductos'
import ProductsFilter from '../components/productsFilter'
import { useTheme } from '../hooks/ThemeContext'

const Products = () => {
  const { mode } = useTheme();
  const [cantProduct, setCantProduct] = useState(18);

  return (
    <div>
      <NavComponent section={'products'} />
      <div>
        <FiltrarProductos/>
      </div>
      <div className='w-10/12 mx-auto mt-5'>
        <h3 className={`text-xl ${!mode ? '' : 'text-gray-600'}`}><b>{cantProduct} productos</b></h3>
        <div className={`p-0.5 mt-5 ${!mode ? 'bg-black' : 'bg-gray-200'}`}></div>
      </div>
      
      <div className='mx-auto'>
        <ProductsFilter
          setCantProduct= {setCantProduct}
        />
      </div>
    </div>
  )
}

export default Products
