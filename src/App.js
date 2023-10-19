import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import { Route, Routes } from 'react-router-dom';
import Products from './component/products';
import Product from './component/product';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<Product />} />
    </Routes>
      
    </>
  );
}

export default App;

