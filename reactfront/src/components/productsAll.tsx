import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { useNavigate } from 'react-router-dom';
import TargetProduct from './TargetProduct';

interface Product {
  id: number;
  images: string;
  title: string;
  price: number;
  // ... otras propiedades
}

const URI = 'http://localhost:8000/products';

const ProductsAll = () => {
  
  const [product, setProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  const handleClick = (id: number, e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    // Redirige a la ruta con el id del producto
    navigate(`/products/${id}`);
  };
  
  // Mostrar todos los Productos
  const getProducts = async () => {
    try {
      // Obtener los datos de la API
      const res = await axios.get(URI);
      const limitedProducts = res.data.slice(0, 18); // Obtener solo los primeros 40 elementos
      console.log(limitedProducts);
      setProduct(limitedProducts);
      setLoading(false); // Actualizar el estado de loading al finalizar la carga
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className='flex flex-wrap justify-center'>
        {loading ? (
          // Muestra el esqueleto mientras los productos se cargan
          Array.from({ length: 18 }).map((_, index) => (
            <div key={index} className='m-10'>
              <Skeleton height={370} width={320} />
              <Skeleton height={20} width={120} style={{ marginTop: '10px' }} />
              <Skeleton height={20} width={80} style={{ marginTop: '5px' }} />
            </div>
          ))
        ) : (
          // Muestra los productos cuando están cargados
          product.map((item) => (
            <div key={item.id} className='m-10'>
              <TargetProduct id={item.id} img={item.images} title={item.title} price={item.price} handleClick={handleClick} />
            </div>
          ))
        )}
      </div>
  )
}

export default ProductsAll
