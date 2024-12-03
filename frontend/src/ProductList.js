// ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const ProductList = () => {

const [products, setProducts] = useState([]);

useEffect(() => {
    
const fetchProducts = async () => {

    try {

    const response = await axios.get('http://localhost:5000/api/products');

    setProducts(response.data);          
    

    } catch (error) {
    console.error('Error fetching products:', error);
    }
};

fetchProducts();
}, []);


return (
<div className="product-list mainuser">

    {products.map((product) => (

    <Card key={product.id } product={product} />

    ))}

</div>
);


};

export default ProductList;





