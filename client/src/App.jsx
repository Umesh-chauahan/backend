import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddProductForm from './components/AddProductForm';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Header from './components/Header';
import Footer from './components/Footer';
// other imports

function App() {
  return (
    <Router>
        <Header/>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/add-product" element={<AddProductForm />} /> 
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
