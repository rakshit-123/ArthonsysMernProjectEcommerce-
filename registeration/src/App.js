
import { AuthProvider } from './context/AuthContext';
import Navbar from './navbar/Navbar';
import {Route,Routes} from 'react-router-dom';
import Items from './components/Items';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Cart from './components/Cart';
import {useState} from 'react';
import Product from './components/Product';
import Home from './components/Home';
import SearchItem from './components/SearchItem';

const App = ()=>{
   
   const[cartItems,setCartItems] = useState([]);
     // Function to handle adding items to the cart
     const handleAddToCart = (product) => {
      setCartItems([...cartItems, product]);
  };
 
    return(
      <>
       <AuthProvider>
        <Navbar cartItem = {cartItems}/>
        <Routes>
         <Route path = "/"  element = {<Home />}   />
        <Route  path = '/Items' element = {<Items handleAddToCart={handleAddToCart}  />} />
        <Route  path = '/about' element = {<About />} />
        <Route  path = '/contact' element = {<Contact />} />
        <Route path = "/product" element = {<Product />} />
         {/* <Route path = '/product/:id' element = {<Product />} /> */} 
         <Route path="/product-detail/:productId" element={<Product />} />
         <Route  exact path="/product-cart/:title" element={<SearchItem />} />

        <Route  path = '/login' element = {<Login />} />
        
       
        <Route  path =  '/signUp' element = {<SignUp />} />
        <Route path = "/Cart" element = {<Cart cartItems = {cartItems} />} />
        </Routes>
        </AuthProvider>   
      </>
    )
}
export default App;