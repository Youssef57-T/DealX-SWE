import MainNav from "./Main_Nav"
import ProductList from "./ProductList.js"
import { useLocation } from 'react-router-dom';
// Uncomment the CSS import if it contains the container styles
// import "index.css"

function MainPage() { 
  const location = useLocation();
  // const { user } = location.state;
  
  // console.log(location);
  // console.log("now ", user.username);

  return (
    <>
      <MainNav />
      <div >
        <div className="container">
          <>
            {/* <h1>Hello to Dealx: {user?.password_hash}</h1> */}
          </>
          <h1>Amazon products</h1> 
          <ProductList />         
        </div> 
        
        <div className="container">
          <h1 >Walmart products</h1>
          <ProductList />
        </div>

        <div className="container">
          <h1 >Etsy products</h1>
          <ProductList />
        </div>
      </div>
    </>
  );
}

export default MainPage;
