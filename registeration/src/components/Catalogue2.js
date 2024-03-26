
import {Link } from 'react-router-dom';
import './Catalogue2.css';
// import  shirts from '../assets/shirts.avif';
// import  topper from '../assets/topper.jpg';
const Catalogue2 = (props)=>{
  const handleAddToCart = () => {
    const item = {
      id: props.id,
      title: props.title,
      price: props.price,
      // quantity: quantity,
      imgsrc: props.imgsrc
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));

    // setQuantity(1);
  }
     return (
        <>
        {/* <div className="container">
   <div className="row row-cols-6"> */}
  <div className = "row y25">
    <div className ="col-2 b25">
    <div className="card a15 sm-2 md-2 lg-2"  >

    <Link to = {`/product-detail/${props.productId}`}>
      <img src={props.pmgsrc} className="card-img-top z-26 sm-2 md-2 lg-2" alt="..."/></Link>

  <div className=" c105">
    <p className="card-title g9">{props.title}</p>
    <h5 className="card-text x9">{props.head}</h5>
    <p className = "x9">{props.down}</p>
    <h6 className="card-text x4444">{props.price}</h6>
    <button type="button" className="btn btn-dark btCart" onClick={handleAddToCart}>Add to Cart</button>

     {/* <Link to = "/onClickHandler" className ="btn btn-primary z9">View</Link>  */}
  
  </div>
</div>
 </div>   
  </div>
  


   </>
   )
       
}
export default Catalogue2;
  
       

