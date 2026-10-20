import React from 'react';

import Main_Nav from "./Main_Nav";
import Banners from "./Banners"
import ProductList from "./ProductList.js"


function Guest_Page(){ 
    return(
    <>  
        <Main_Nav/>
        
        <div className="banner-container">
            <Banners
                backgroundImage="./imgs/baner-right-image-01.jpg"
                title="Winter Sale"
                description="Up to 50% off on all products! Limited time only."
                buttonText="Shop Now"
                buttonLink="/shop"
                width="100%"
                height="500px"
                className="large-banner"
            />
            <div className="small-banner-container">
            <Banners
                backgroundImage="https://via.placeholder.com/1200x400/FF5733/FFFFFF"
                title="Summer Collection"
                description="Explore our new summer arrivals!"
                buttonText="View Collection"
                buttonLink="/collection"
                className="small-banner"
            />
            <Banners
                backgroundImage="https://via.placeholder.com/1200x400/33FF57/FFFFFF"
                title="Special Offer"
                description="Buy 2 get 1 free on selected items."
                buttonText="Learn More"
                buttonLink="/offers"
                className="small-banner"
            />
            </div>
        </div>

        <div>
            <h1> Deals By Amazon</h1>
            <div>
                <ProductList/>
            </div>
        </div>

        <div>
            <h1> Deals By Walmart</h1>
            <div>
            <ProductList/>

    
            </div>
        </div>
        <div>
            <h1> Deals By Ebay</h1>
            <div>
            <ProductList/>

    
            </div>
        </div>
      
    </>

    );
}


export default Guest_Page;