import './Cart.css';
import React, { useEffect, useState } from 'react';
import CartAmountToggle from './CartAmountToggle';

import{Link } from 'react-router-dom';
// import productDisplay from '../components/ProductDisplay/ProductDisplay';

import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const[totalAmount,setTotalAmount] = useState(0);
  console.log(cartItems);
  const [amount, setAmount] = useState(1);
  const[totalCards,setTotalCards] = useState(0);
 
  const checkOutHandler = ()=>{
          navigate('/Items');
  }


  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    setAmount(amount + 1);
  };

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(storedCartItems);
    setCartItems(storedCartItems);
      

    


  }, []);
  // for TotalAmount in bottom
useEffect(()=>{
    let total = 0;
    cartItems.forEach((item)=>{
      total = total + item.price*item.amount;
    }

    )
    setTotalAmount(total);
},[cartItems])
// for total cards
useEffect(()=>{
       let total = 0;
       cartItems.forEach((item)=>{
            total = total+ item.amount;
       })
       setTotalCards(total);
    
},[cartItems])

  const handleDeleteItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const handleQuantityChange = (index, change) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity) {
      updatedCartItems[index].quantity += change;
      if (updatedCartItems[index].quantity < 1) {
        updatedCartItems[index].quantity = 1;
      }
      updatedCartItems[index].Price = updatedCartItems[index].price * updatedCartItems[index].quantity;
      updatedCartItems[index].price = updatedCartItems[index].Price;
      setCartItems(updatedCartItems);
      localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    } else {
      console.error(`Quantity property is missing for item at index ${index}`);
    }
  };
 

  return (
    <>
    <div className='cart-Items'>
      <div className='cart-items-header'>Cart Items</div>
      {cartItems.length === 0 ? (
        <div className='cart-items-empty'>No Items are added</div>
      ) : (
        <div className='cartitems'>
          <div className='cartitems-format-main'>
            
                    <p>Products</p>
                    <p>Title</p>
                    <p>price</p> 
                    <p>Quantity</p>
                    <p>TotalPrice</p>
                    <p>Remove</p>
          </div > 
            <hr />
           
            {cartItems.map((item, index) => (
              <div key={index} className='cart-items-list'>
                <img className='cart-items-image' src={item.pmgsrc} alt={item.title} />
                <p className='card-title'>{item.title}</p>
                <p className='card-price' >${item.price}</p>
                <div>
                  {/* <span>Add Quantity</span> */}
                   {/* <CartAmountToggle amount={amount} setDecrease={setDecrease} setIncrease={setIncrease} /> */} 
                  {/* it shows quantity */}
                  <button >{item.amount }</button>
                </div>
                <p className='card-totalPrice' > {item.price*item.amount}</p>
                <button className='dbbtn' onClick={() => handleDeleteItem(index)}>Delete</button>
              
              </div>
              
            ))}
          
          <hr />
      </div>
      )}
      {cartItems.length>0?
          <div className='cartitems-down'>
               <div className='cartitems-total'>
                    <h1>cart totals</h1>
                    <div>
                         <div className='cartitems-total-item'>
                              <p>Total Card Items </p>
                              <p>{totalCards}</p>
                         </div>
                       <hr />
                   <div className='Cartitems-total-item'>
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>     
                 <hr />
               <div className='cartitems-total-item'>
                   <h3>Total Amount</h3>
                   <h3>${totalAmount}</h3>

                </div>     
                    </div>
         <button onClick = {checkOutHandler}>MOVE TO CHECKOUT</button> 
               </div>
               <div className='cartitems-promocode'>
                    <p>if you have a promo code, Enter it here</p>
                    <div className='cartitems-promobx'>
                         <input type = "text" placeholder='promo code'  />
                         <button type = "submit">Submit</button>
                    </div>
               </div>
          </div>: <div></div>
          }
      </div>
   </>
  );
};

export default Cart;
