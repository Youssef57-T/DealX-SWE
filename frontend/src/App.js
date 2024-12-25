// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import {BrowserRouter , Routes, Route } from "react-router-dom";
import Home from './Guest_Page';
import Registering from './Registering-page';
import MainPage from './Main_User_Page';
import SearchResults from './results_page';
import Product from './ProductPage';
import CartPage from './Cart';
import ProfilePage from './ProfilePage';

const App = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path = "/" element={<Home />} />
                <Route path ="/Cart" element={<CartPage/>}/>
                <Route path="/Login" element={<Registering.LoginForm />} />
                <Route path="/SignUp" element={<Registering.SignUpForm />} />
                <Route path="/MainUser" element={<MainPage/>}/>
                <Route path="/Search" element={<SearchResults />} />
                <Route path="/Product" element={<Product />} />
                <Route path="/Profile" element= { <ProfilePage/>}/>
            </Routes>
        
        </BrowserRouter>
    );
}



export default App;
