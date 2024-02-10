import React, { useState } from 'react'
import SliderComponents from './sliderComponents';
import ChekboxComponents from './chekboxComponents';
import ButtonComponent from './buttonComponent';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../hooks/ThemeContext';


const FiltrarProductos= () => {
  const { mode } = useTheme();

  const handleSliderChange=(num:number)=>{
    setSliderValue(num)
  }

  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [order, setOrder] = useState('a-z');
  const [sliderValue,setSliderValue]=useState(100)

  const handleSearch = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const queryParams = new URLSearchParams();
    queryParams.set('search', searchTerm);
    queryParams.set('category', category);
    queryParams.set('order', order);
    queryParams.set('price', sliderValue.toString());
    navigate(`?${queryParams.toString()}`);
  };

  const handleReset = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    navigate(``);
  }

  return (
    <div className={`w-10/12 mx-auto grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  mx-16 mt-16 p-5 rounded gap-5 ${!mode ? 'bg-colorNav' :' bg-colorNavSecond text-black'}`}>
      <div className=''>
        <h3 className={`${!mode ? '' :' text-black'}`}>Search Product</h3>
        <input value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} type="text" name="search" id="" className={`outline-none w-full p-0.5 rounded-lg border-2 text-sm ${!mode ? ' border-zinc-800' :' bg-white border-gray-200'}`} />
        
      </div>
      <div>
        <h3 >Select Category</h3>
        <select name="" id="" className={`w-full p-0.5 rounded-lg border-2 text-sm ${!mode ? 'border-zinc-800' :' bg-white border-gray-200'}`} value={category} onChange={(e)=>setCategory(e.target.value)}>
          <option value="all"><b>all</b></option>
          <option value="clothes"><b>clothes</b></option>
          <option value="Electronics"><b>Electronics</b></option>
        </select>
      </div>
      <div>
        <h3>Sort By</h3>
        <select name="" id="" className={`w-full p-0.5 rounded-lg  border-2 text-sm ${!mode ? 'border-zinc-800' :' bg-white border-gray-200'}`} value={order} onChange={(e)=>setOrder(e.target.value)}>
          <option value="a-z">a-z</option>
          <option value="z-a">z-a</option>
        </select>
      </div>
      <div>
        <div className='flex justify-between'>
          <h3>Select Price</h3>
          <label>Min: {sliderValue}</label>
        </div>
        <div className='mr-1'>
          <SliderComponents
            handleSliderChange={handleSliderChange}
          />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h4>Free Shipping</h4>
        <ChekboxComponents/>
      </div>
      <div>
        <ButtonComponent
          tipo='search'
          onClic={handleSearch}
        />
      </div>
      <div>
        <ButtonComponent
          tipo='reset'
          onClic={handleReset}
        />
      </div>
    </div>
  )
}

export default FiltrarProductos
