import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SelectCant from '../components/selectCant';
import AddCar from '../components/addCar';
import NavComponent from '../components/nav';
import { useTheme } from '../hooks/ThemeContext';
import ReactLoading from 'react-loading';

interface Product {
  id: number;
  images: string;
  title: string;
  price: number;
  description: string;
  category: {
    name: string;
  };
  // ... otras propiedades
}

const URI = 'http://localhost:8000/products';

const ProductsId = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = useParams<{ id: string }>();
  const { mode, selectCant,getCantProducts } = useTheme();
  const [loading, setLoading] = useState(false);
  

  const getProductsId = async () => {
    try {
      const res = await axios.get(`${URI}/${id}`);
      setProduct(res.data);
      setLoading(true);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    getProductsId();
  }, [id]);

  const  [cambio, setCambio] = useState(false);

  const cantidadDisponible=30;

  const handleClick=()=>{
    if (selectCant==0){
      alert(`Seleccione una Cantidad`)
    }
    const carritoContador=getCantProducts()
    const cantTotalProducts=carritoContador+selectCant
      if (product){
        const storedProducts  = localStorage.getItem('product');
        const existingProducts = storedProducts ? JSON.parse(storedProducts) : [];
        const index = existingProducts.findIndex((item: Product) => item.id === product.id);
        if (index !== -1) {
          if (existingProducts[index].cantidadSeleccionada+selectCant <= cantidadDisponible){
            // Si el producto está en el carrito, actualiza solo la cantidad
            existingProducts[index].cantidadSeleccionada += selectCant;
            localStorage.setItem('cantProducts',(cantTotalProducts).toString());
            localStorage.setItem('product', JSON.stringify(existingProducts));
          } 
          else{
            alert(`No hay suficiente stock para agregar este producto. Cantidad maxima de ${cantidadDisponible}`)
          }
        }
        else {
          const updatedProducts = [...existingProducts, { ...product, cantidadSeleccionada: selectCant }];
          localStorage.setItem('product', JSON.stringify(updatedProducts));
          localStorage.setItem('cantProducts',(cantTotalProducts).toString());
        }
      }
      setCambio(!cambio)
    } 

  if (!loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <ReactLoading type={'spinningBubbles'} color={'white'} height={'10%'} width={'10%'} />
      </div>
    );
  }

  return (
    <div className=''>
      <NavComponent
        section={'products'}
      />
      
      <div className={` p-5  grid md:grid-cols-2 mt-10 sm:grid-cols-1`}>
        <div className='mb-6 max-w-sm mx-auto'>
          <img className='rounded-xl ' src={product?.images} alt="" />
        </div>
        <div>
          <div className='mt-5'>
            <h3 className={`text-3xl mb-2 ${!mode ? '' : 'text-gray-700'}`}><b>{product?.title}</b></h3>
            <h3 className={`text-2xl mb-2 ${!mode ? 'text-gray-300' : 'text-gray-400'}`}><b>{product?.category.name}</b></h3>
            <h5 className={`text-lg ${!mode ? '' : 'text-black'}`}>${product?.price}</h5>
            <h5 className={`text-lg ${!mode ? '' : 'text-black'}`}>{product?.description}</h5>
          </div>
          <div className='mb-10 mt-5'>
            {
              id &&
              <SelectCant
                cantidad={selectCant}
                itemId={id}
              />
            }
          </div>
          <div>
          {
              id &&
            <AddCar
            handleClick={handleClick}
            />
          }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsId;
