import MainNav from "./Main_Nav"
import ProductList from "./ProductList.js"
import { useUser} from './UserContext.js'
import { useNavigate } from 'react-router-dom';


function MainPage() { 
  const navigate = useNavigate();

  // const location = useLocation();
  const {user} = useUser(); // Access user data from navigation state
  console.log("this is user from main" , user)

  
  if (!user) {
    navigate("/login") 
  return "Redirecting" 

}  // const { user } = location.state ;
  // console.log(location)
  // console.log("now ", user.username);
    return (
        <>
          <MainNav/>
          <div> 
          
            <div>
              <>
              <h1> Hello {user.data.username} <h1>
                </h1>Welcome to DealX </h1>
              </>
              <h1>Amazon products</h1>          
            </div> 
            <ProductList />
          </div>
          <div>
            <h1>Walmart products</h1>
            <ProductList/>
          </div>
          <div>

        <div className="container">
          <h1 >Etsy products</h1>
          <ProductList />
        </div>
      </div>
    </>
  );
}

export default MainPage;
