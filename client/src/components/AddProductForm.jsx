import React, { useState } from 'react';
import axios from 'axios';

function AddProductForm() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    stock: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/products', product) // Sends the product data to the backend API
      .then(response => {
        console.log('Product added:', response.data);
        // Optionally, you can redirect the user or clear the form
        setProduct({
          name: '',
          description: '',
          price: '',
          image: '',
          stock: ''
        });
      })
      .catch(error => {
        console.error('Error adding product:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Product</h2>
      <label>
        Name:
        <input type="text" name="name" value={product.name} onChange={handleChange} required />
      </label>
      <label>
        Description:
        <textarea name="description" value={product.description} onChange={handleChange} required />
      </label>
      <label>
        Price:
        <input type="number" name="price" value={product.price} onChange={handleChange} required />
      </label>
      <label>
        Image URL:
        <input type="text" name="image" value={product.image} onChange={handleChange} />
      </label>
      <label>
        Stock:
        <input type="number" name="stock" value={product.stock} onChange={handleChange} required />
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProductForm;
