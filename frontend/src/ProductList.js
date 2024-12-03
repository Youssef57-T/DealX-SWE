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

    setProducts(response.data);          //this function sets a variable called products to the response coming from the backend(json)
    

    } catch (error) {
    console.error('Error fetching products:', error);
    }
};

fetchProducts();
}, []);


// const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   // Filter and sort products based on the search query
// const filteredProducts = products
// .filter((product) =>
//     product.name.toLowerCase().includes(searchQuery.toLowerCase())
// )
// .sort((a, b) => {
//     // Example sorting: prioritize products with names starting with the search query
//     const aStartsWith = a.name.toLowerCase().startsWith(searchQuery.toLowerCase());
//     const bStartsWith = b.name.toLowerCase().startsWith(searchQuery.toLowerCase());

//     if (aStartsWith && !bStartsWith) return -1; // `a` comes first
//     if (!aStartsWith && bStartsWith) return 1;  // `b` comes first

//     // If both or neither start with the query, sort alphabetically
//     return a.name.localeCompare(b.name);
// });




// const handleViewProduct = (productId) => {
// console.log(`Navigate to product ${productId}`);
// // Example: Use React Router to navigate
// // navigate(`/product/${productId}`);
// };


return (
<div className="product-list mainuser">

    {products.map((product) => (

    <Card key={product.id } product={product} />

    ))}

</div>
);


};

export default ProductList;





