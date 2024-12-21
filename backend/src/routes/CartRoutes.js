// Add an item to the cart
router.post('/add', cartController.addItem);

// Show the user's cart items
router.get('/show/:userId', cartController.showCart);

// Remove an item from the cart
router.post('/remove', cartController.removeItem);
