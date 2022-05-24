import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <h1 className='text-primary text-xl font-bold uppercase'>Our Tools</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
           {
          products.slice(0,6).map(product =><Product
          key={product._id}
          product={product}
          ></Product>)  
        } 
        </div>
        </div>
    );
};

export default Products;