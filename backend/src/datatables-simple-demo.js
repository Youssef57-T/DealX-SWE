const products = [
    {
      name: "Lloyd 1.5 Ton 3 Star Inverter Split AC",
      main_category: "Appliances",
      sub_category: "Air Conditioners",
      price: 58990,
      discount_price: 32999,
      ratings: 4.2,
      num_of_ratings: 2255,
      stock_quantity: 8719,
      link: "https://www.amazon.in/Lloyd-Inverter-Convertible-Anti-Viral-GLS18I3FWAMC/dp/B0BRKXTSBT/ref=sr_1_4?qid=1679134237&s=kitchen&sr=1-4",
    },
    {
      name: "Samsung Galaxy S23 Ultra",
      main_category: "Electronics",
      sub_category: "Mobile Phones",
      price: 124999,
      discount_price: 114999,
      ratings: 4.5,
      num_of_ratings: 3211,
      stock_quantity: 4520,
      link: "https://www.amazon.in/Samsung-Galaxy-Ultra-Graphite-Storage/dp/B0BT9CZFNN",
    },
    {
      name: "Sony WH-1000XM5 Wireless Headphones",
      main_category: "Electronics",
      sub_category: "Audio Devices",
      price: 29990,
      discount_price: 24990,
      ratings: 4.7,
      num_of_ratings: 865,
      stock_quantity: 320,
      link: "https://www.amazon.in/Sony-WH-1000XM5-Wireless-Canceling-Headphones/dp/B09ZK5F7T8",
    },
    {
      name: "Apple MacBook Pro 14-inch (M2)",
      main_category: "Computers",
      sub_category: "Laptops",
      price: 224900,
      discount_price: 194900,
      ratings: 4.8,
      num_of_ratings: 1789,
      stock_quantity: 120,
      link: "https://www.amazon.in/Apple-MacBook-Pro-chip-14-inch/dp/B0BSHDZGFJ",
    },
    {
      name: "Prestige Deluxe Plus Hard Anodized Pressure Cooker",
      main_category: "Kitchen Appliances",
      sub_category: "Cookware",
      price: 4899,
      discount_price: 3499,
      ratings: 4.4,
      num_of_ratings: 4205,
      stock_quantity: 7820,
      link: "https://www.amazon.in/Prestige-Deluxe-Hard-Anodized-Pressure/dp/B003XPOGYO",
    },
    {
      name: "OnePlus 11 5G",
      main_category: "Electronics",
      sub_category: "Mobile Phones",
      price: 64999,
      discount_price: 57999,
      ratings: 4.6,
      num_of_ratings: 1099,
      stock_quantity: 1500,
      link: "https://www.amazon.in/OnePlus-11-5G-Black-12GB/dp/B0B5HXK8ZT",
    },
    {
      name: "Philips Sonicare ProtectiveClean 6100 Electric Toothbrush",
      main_category: "Health & Personal Care",
      sub_category: "Toothbrushes",
      price: 9999,
      discount_price: 8499,
      ratings: 4.3,
      num_of_ratings: 1890,
      stock_quantity: 880,
      link: "https://www.amazon.in/Philips-Sonicare-ProtectiveClean-HX6877-21/dp/B07G42V1KT",
    },
    {
      name: "Bose SoundLink Flex Bluetooth Speaker",
      main_category: "Electronics",
      sub_category: "Audio Devices",
      price: 16990,
      discount_price: 14990,
      ratings: 4.7,
      num_of_ratings: 500,
      stock_quantity: 620,
      link: "https://www.amazon.in/Bose-SoundLink-Bluetooth-Speaker-Black/dp/B08PQ9V2PS",
    },
    {
      name: "Mi 3-Litre Electric Rice Cooker",
      main_category: "Home Appliances",
      sub_category: "Rice Cookers",
      price: 2499,
      discount_price: 1999,
      ratings: 4.5,
      num_of_ratings: 4521,
      stock_quantity: 3450,
      link: "https://www.amazon.in/Xiaomi-3L-Electric-Rice-Cooker/dp/B07S37MQY7",
    },
    {
      name: "Canon EOS 90D DSLR Camera",
      main_category: "Electronics",
      sub_category: "Cameras",
      price: 113990,
      discount_price: 102990,
      ratings: 4.8,
      num_of_ratings: 1456,
      stock_quantity: 213,
      link: "https://www.amazon.in/Canon-EOS-90D-DSLR-Camera/dp/B07VDRZ93T",
    },
  ];
  
  const dashboard = document.getElementById("dashboard-products");
  
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product-card");
    productDiv.innerHTML = `
      <h3>${product.name}</h3>
      <p><strong>Main Category:</strong> ${product.main_category}</p>
      <p><strong>Sub Category:</strong> ${product.sub_category}</p>
      <p><strong>Price:</strong> ₹${product.price}</p>
      <p><strong>Discount Price:</strong> ₹${product.discount_price}</p>
      <p><strong>Ratings:</strong> ${product.ratings} (${product.num_of_ratings} reviews)</p>
      <p><strong>Stock Quantity:</strong> ${product.stock_quantity}</p>
      <a href="${product.link}" target="_blank">View Product</a>
      <hr />
    `;
    dashboard.appendChild(productDiv);
  });
  