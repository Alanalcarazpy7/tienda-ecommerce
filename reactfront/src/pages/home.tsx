import NavComponent from '../components/nav';
import { useTheme } from '../hooks/ThemeContext';
import 'react-loading-skeleton/dist/skeleton.css';
import ProductsAll from '../components/productsAll';

const HomeProducts = () => {
  const { mode } = useTheme();

  return (
    <div className='w-full h-full'>
      <div className=''>
        <NavComponent section='home' />
      </div>
      <div className='mt-10'>
        <h3 className={`text-3xl m-auto w-9/12 ${!mode ? '' : 'text-black'}`}>Featured Products</h3>
        <div className={`p-0.5 mt-5  m-auto w-9/12 ${!mode ? 'bg-black' : 'bg-gray-200'}`}></div>
      </div>
      <ProductsAll/>
    </div>
  );
};

export default HomeProducts;
