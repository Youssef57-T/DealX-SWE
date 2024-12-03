import MainNav from "./Main_Nav"
import ProductList from "./ProductList.js"
//import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function MainPage() { 

  const location = useLocation();
  const { user } = location.state ; // Access user data from state
  console.log(location)
  console.log("now ", user.username);
    return (
        <>
          
          <MainNav/>
          <div >
          
          
          <div> 

            <div>
              <>
              <h1>Hello to Dealx: {user?.password_hash}</h1>
              </>
              {/* <h1>Amazon products</h1> */}
            </div> 
            <ProductList />
          </div>
          <div>
            <h1>Walmart products</h1>
            <ProductList/>
          </div>
          <div>

            <h1>Etsy products</h1>
            <ProductList/>
          </div>
          </div>
      
        </>
    );
}

export default MainPage