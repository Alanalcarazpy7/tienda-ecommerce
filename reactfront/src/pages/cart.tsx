import React, { useEffect, useState } from 'react';
import ProductOrder from '../components/cart/productOrder';
import ProductsSelect from '../components/cart/productsSelect';
import NavComponent from '../components/nav';
import { useTheme } from '../hooks/ThemeContext';

interface Product {
  id: number;
  images: string;
  title: string;
  price: number;
  description: string;
  cantidadSeleccionada: number;
  itemId: string;
  category: {
    name: string;
  };
}

const Cart = () => {
  const [productsItems, setProductsItems] = useState<Product[]>([]);
  const { selectCant,getCantProducts,mode } = useTheme();

  useEffect(() => {
    const products = localStorage.getItem('product');
    if (products) {
      setProductsItems(JSON.parse(products));
    }
  }, []);

  const updateCant = (id: number, selectCant: number) => {
    const updatedProducts = productsItems.map((item) => (item.id === id ? { ...item, cantidadSeleccionada: selectCant } : item));
    setProductsItems(updatedProducts);
    localStorage.setItem('product', JSON.stringify(updatedProducts));
    let cant: number = 0;
    updatedProducts.map((item: Product)=>{
      cant+=item.cantidadSeleccionada
    })
    localStorage.setItem('cantProducts', cant.toString());
  };

  const deleteProduct = (id: number) => {
    const updatedProducts = productsItems.filter((item) => item.id !== id);
    const productSelelccionado = productsItems.filter((item) => item.id === id);
    const canTotalProduct=getCantProducts()
    productSelelccionado.map(item=>(
      localStorage.setItem('cantProducts', (canTotalProduct-item.cantidadSeleccionada).toString())
    ))
    setProductsItems(updatedProducts);  
    localStorage.setItem('product', JSON.stringify(updatedProducts));
  };

  if (productsItems.length > 0) {
    return (
      <div>
        <NavComponent section={'cart'} />
        <div className='mt-10'>
          <h3 className={`text-3xl m-auto w-9/12 ${!mode ? '' : 'text-black'}`}>Shopping Cart</h3>
          <div className={`p-0.5 mt-5  m-auto w-9/12 ${!mode ? 'bg-black' : 'bg-gray-200'}`}></div>
        </div>
        <div className='flex flex-wrap justify-center p-10'>
          <div className='min-w-2'>
            <div className='mb-10'>
              {productsItems.map((item) => (
                <div className='mb-10 mr-10' key={item.id}>
                  <ProductsSelect
                    nombre={item.title}
                    imagen={item.images}
                    categoria={item.category.name}
                    cantidad={item.cantidadSeleccionada}
                    precio={item.price}
                    itemId={item.id.toString()}
                    onDelete={deleteProduct}
                    onUpdateCant={updateCant}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='w-full sm:w-1/2 md:w-2/3 lg:w-3/5 xl:w-1/5'>
            <ProductOrder />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <NavComponent section={'cart'} />
        <h1 className={`text-center text-5xl mt-10 ${!mode ? 'text-white' : 'text-black'}`}>Tu carrito está vacío</h1>
        <div className={`p-0.5 mt-5  m-auto w-9/12 ${!mode ? 'bg-black' : 'bg-gray-200'}`}></div>
      </div>
    );
  }
};

export default Cart;
