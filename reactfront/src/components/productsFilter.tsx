import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { useLocation, useNavigate } from 'react-router-dom';
import TargetProduct from './TargetProduct';

interface Product {
  id: number;
  images: string;
  title: string;
  price: number;
  category:{
    name:string;
  }
  // ... otras propiedades
}

interface typesProps{
  setCantProduct:React.Dispatch<React.SetStateAction<number>>,
}

const URI = 'http://localhost:8000/products';

const ProductsFilter:React.FC<typesProps> = ({setCantProduct}) => {
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

  const location = useLocation();

  const filtradorProducts=()=>{
    const queryParams = new URLSearchParams(location.search);
    const search = queryParams.get('search');
    const category = queryParams.get('category');
    const order = queryParams.get('order');
    const price = queryParams.get('price');

    let productosFiltrados = [...product];

    if (search) {
      productosFiltrados = productosFiltrados.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      setCantProduct(productosFiltrados.length);
    }

    if (category && category!=='all') {
      productosFiltrados = productosFiltrados.filter(item =>
        item.category.name.toLowerCase().includes(category.toLowerCase())
      );
      setCantProduct(productosFiltrados.length);
    }

    productosFiltrados.sort((a, b) => {
      if (order === 'a-z') {
        return a.title.localeCompare(b.title);
      } else if (order === 'z-a') {
        return b.title.localeCompare(a.title);
      } else {
        return 0;
      }
    });

    if (price) {
      console.log(price)
      productosFiltrados = productosFiltrados.filter(item =>
        item.price<=parseInt(price)
      );
      setCantProduct(productosFiltrados.length);
    }

    return productosFiltrados;
  }

  useEffect(() => {
    filtradorProducts()
  },[location.search])
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
          filtradorProducts().map((item) => (
            <div key={item.id} className='m-10'>
              <TargetProduct id={item.id} img={item.images} title={item.title} price={item.price} handleClick={handleClick} />
            </div>
          ))
        )}
      </div>
  )
}

export default ProductsFilter
