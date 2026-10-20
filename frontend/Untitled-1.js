app.get('/compareProducts', (req, res) => {
    const sortedProducts = compareProductsByPrice(products);
    res.json(sortedProducts);
});


const compareProductsByPrice = (products) => {
    return products.sort((a, b) => a.price - b.price);
};
