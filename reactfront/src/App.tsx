import React from 'react';
import HomeProducts from './pages/home';
import { useTheme } from './hooks/ThemeContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsId from './pages/productsId';
import About from './pages/about';
import Cart from './pages/cart';
import Products from './pages/products';

function App() {

  const { mode } = useTheme();

  return (
    <div className={`min-h-screen ${mode ? 'bg-white' : ' bg-colorTarget'}`}>
      <Router>
        <Routes>
          <Route path="/" element={<HomeProducts />} />
          <Route path="/products/:id" element={<ProductsId/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
