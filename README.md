# DealX

**DealX** is a comprehensive smart shopping assistant designed to simplify product searches and improve online shopping experiences. The platform aggregates offers from various e-commerce platforms in one place, making it easier for users to compare prices and discover the best deals.

## Features

- **Product Aggregation**: Displays products and deals from multiple e-commerce platforms in one unified interface.
- **User-Friendly Interface**: A responsive and intuitive design for seamless navigation.
- **Wishlist and Cart**: Users can save items for later or add them directly to their cart.
- **Efficient Search**: Advanced filtering and search functionalities to find products quickly.
- **Price Comparison**: Easily compare prices across platforms.
- **Notifications**: Get notified of new deals and price drops.

---

## Technology Stack

**Frontend**: [React.js](https://reactjs.org/)  
**Backend**: [Node.js](https://nodejs.org/)  
**Database**: [PostgreSQL](https://www.postgresql.org/)  

---

## Architecture

The project follows the **Model-View-Controller (MVC)** pattern to ensure modularity and scalability.  

- **Model**: Manages database interactions and business logic.  
- **View**: Handles user interface and user experience.  
- **Controller**: Connects models and views, processing user input and returning responses.  

---

## Installation and Setup

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- A package manager like npm 

### Steps

1. **Start the development server**:  
   ```bash
   npm start
   ```

2. **Access the application**:  
   Open `http://localhost:3000` in your browser.

---

## Folder Structure (MVC Design Pattern)

```plaintext
DealX-SWE/
├── backend/
│   ├── models/      # Database models
│   ├── controllers/ # Business logic and API endpoints
│   ├── routes/      # API routes
│   ├── server.js    # Entry point for the backend
|   └── app.js 
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   └── App.js       # Application entry point
├── .env           # Environment variables
├── package.json   # Dependencies
└── README.md      # Project documentation
```

---


## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Contact

**Project Owner**: Youssef Tarek  
**GitHub**: [Youssef57-T](https://github.com/Youssef57-T)  
For inquiries or support, please open an issue or reach out via GitHub.
