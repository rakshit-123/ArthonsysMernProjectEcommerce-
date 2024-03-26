import "./ProductDisplay.css";
import { FaStar } from "react-icons/fa";
import star from '../../assets/star.jpeg';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import All_product from '../All_product';
import CartAmountToggle from '../CartAmountToggle';
import { ShopContext } from "../../context/ShopContext";
import { Bounce } from 'react-toastify';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const ProductDisplay = (props) => {
  const [amount, setAmount] = useState(1);
  const { product } = props;
  console.log('product', product);
  // const {addToCart} = useContext(ShopContext);

  // Defensive programming: Check if product is undefined or if pmgsrc is undefined
  if (!product || !product.pmgsrc) {
    return <div>Loading...</div>; // or handle this case appropriately
  }

  console.log('image is', product.pmgsrc);

 
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  }

  const setIncrease = () => {
    setAmount(amount + 1);
  }


  const handleAddToCart = async () => {
    const item = {
      id: product.productId,
      title: product.title,
      price: product.price,
      pmgsrc: product.pmgsrc
    };
    // console.log(item);
     let userId = localStorage.getItem("_id");
    try {
     
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
      
      if (existingItemIndex !== -1) {
        cart[existingItemIndex].amount += amount;
      } else {
        item.amount = amount;
        cart.push(item);
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      toast.success('You have successfully added to cart!!!', {
        position: "top-right",
        autoClose: 1498,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      
      console.log(cart);
      // const response = await axios.post('http://localhost:9000/add-to-cart', {item:item,
      //      userId:userId });
      // console.log(response);

      // console.log('Product added to cart:', response.data);

    } catch (error) {
      console.error('Error adding product to cart:', error);
      toast.error('Error adding product to cart. Please try again later.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1498}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />

      <div className="productDisplay">
        <div className="productdisplay-left">
          <div className="productdisplay-img-list">
            <img src={product.pmgsrc} alt="" />
            <img src={product.pmgsrc} alt="" />
            <img src={product.pmgsrc} alt="" />
            <img src={product.pmgsrc} alt="" />
          </div>
          <div className="productdisplay-img">
            <img
              className="productdisplay-main-img"
              src={product.pmgsrc}
              alt=""
            />
          </div>
        </div>
        <div className="productdisplay-right">
          <h1>{product.title}</h1>
          <div className="productdisplay-right-stars d-flex">
            <img src={star} className="star" />
            <img src={star} className="star" />
            <img src={star} className="star" />
            <img src={star} className="star" />
            <img src={star} className="star" />
            <p>122</p>
          </div>
          <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price">${product.price}</div>
            <div className="productdisplay-right-description">
              Introducing our versatile and stylish Multifunctional Sports
              Backpack, designed to meet the needs of the modern explorer.
              Whether you're hitting the gym, embarking on a hiking adventure,
              or commuting to work, this backpack has you covered.
            </div>
            <div className="productdisplay-right-size">
              <h1>Select Size</h1>
              <div className="product-display-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
              </div>
            </div>
            <CartAmountToggle amount={amount} setDecrease={setDecrease} setIncrease={setIncrease} />
            <button onClick={handleAddToCart} className="addBtn" type="button">ADD TO CART</button>
            <p className="productdisplay-right-category">
              <span> offer:</span> {product.head}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;
