import { Link } from 'react-router-dom';
import './Catalogue.css';
import { useEffect, useState } from 'react';

  import 'react-toastify/dist/ReactToastify.css';
 

// import { CartContext } from '..context/CartContext';


const Catalogue = (props) => {
  const [quantity, setQuantity] = useState(1);
  
       console.log(props);
  const handleAddToCart = () => {
    console.log('catalogue');
    const item = {
      productId: props.productId,
      title: props.title,
      price: props.price,
      // quantity: quantity,
      pmgsrc: props.pmgsrc
    };
    console.log(item);
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    cart.push(item);
   
    localStorage.setItem('cart', JSON.stringify(cart));
    // console.log('cart new value is',cart);

    // setQuantity(1);
    
  };
  // const AddToCartButton = ({ item }) => {
  //   const { addToCart, counter } = useContext(CartContext);
  
  //   const handleAddToCart = () => {
  //     addToCart(item);
  //   };

  return (
    <>
 


    <div className="row y25">
      <div className="col-2 b25">
        <div className="a15 sm-2 md-2 lg-2">
      
        <Link to={`/product-detail/${props.productId}`}>
            <img src={props.pmgsrc} className="card-img-top z-25 sm-2 md-2 lg-2" alt="..." />
          </Link>
          <div className="card-body c25">
            <p className="card-title g4444">{props.title}</p>
            <h6 className="card-text x4444">{props.head}</h6>
            <h6 className="card-text x4444">{props.price}</h6>
            {/* <input type="number" value={quantity} onChange={(e) => { setQuantity(e.target.value) }} /> */}
            <button type="button" className="btn btn-dark btCart" onClick={handleAddToCart}>Add to Cart</button>
            {/* Uncomment the link below if needed */}
            {/* <Link to="/onClickHandler" className="btn btn-primary z9">View</Link> */}
          </div>
        </div>
      </div>
    </div>
  
  
    </>

  );
}

export default Catalogue;
