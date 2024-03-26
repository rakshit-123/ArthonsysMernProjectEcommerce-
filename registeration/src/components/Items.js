import './Items.css';
import Footer from "./Footer";
import Catalogue2 from "./Catalogue2";
// import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Timer from "./Timer";
import Omg from "./Omg";
// import ImgCard from './component/ImgCard';
import Catalogue from "./Catalogue";
// import  topper from './assets/topper.jpg';
import Global from "./Global";
import {useState} from 'react';
import All_product from './All_product';


// import shirts from "../assets/shirts.avif";
// import topper from "../assets/topper.jpg";
// import kurta from "../assets/kurta.avif";
// import kurti from "../assets/kurti.jpg";
// import hoodies  from './assets/hoodies.webp';
// import OnClickHandler from "./component/OnClickHandler";
//import{FaFacebook,FaInstagram,FaLinkedin} from Fa/react-icons;
// import Home from './component/Home';
// import pic from './assets/pic.svg';

const Items = ()=>{
    const [cart ,setCart] = useState([]);
     
       console.log(All_product);
       return (
          <>
             {/* {/* <div className='homeContainer'>
                  <div className='left text-end'>
                      <h1 className='homeItem'>welcome to the </h1> 
                  </div>
                  <div className='right'>
                  <h1 className='homeItem'>    Arthonsys !!!</h1>
                  </div> */}
                  {/*this funxction add product on cart  */}
           
          

      <div className="total">
        
        <Timer />
        <Carousel />
        <Omg />
        <div className="container-fluproductId l-25">
          <div className="row row-cols-5 m25">
          {All_product.slice(0, 6).map((product) => (
                            <Catalogue
                                key={product.productId}
                                productId = {product.productId}
                                pmgsrc={product.pmgsrc}
                                title={product.title}
                                head={product.head}
                                price={product.price}
                            />
                        ))}
          </div>
          <Global />

          <div className="row row-cols-5 m25">
          {All_product.slice(6, 12).map((product) => (
                            <Catalogue
                                key={product.productId}
                                productId = {product.productId}
                                pmgsrc={product.pmgsrc}
                                title={product.title}
                                head={product.head}
                                price={product.price}
                            />
                        ))}
          </div>
          <div className="a11">
            <h4 className=" text-Dark h101">SHOP BY CATEGORY</h4>
          </div>
          <div className="row row-cols-5 m25">
          {All_product.slice(12, 18).map((product) => (
                            <Catalogue2
                                key={product.productId}
                                productId = {product.productId}
                                pmgsrc={product.pmgsrc}
                                title={product.title}
                                head={product.head}
                                price={product.price}
                            />
                        ))}
          </div>
          <div className="row row-cols-5 m25">
          {All_product.slice(18, 24).map((product) => (
                            <Catalogue2
                                key={product.productId}
                                productId = {product.productId}
                                pmgsrc={product.pmgsrc}
                                title={product.title}
                                head={product.head}
                                price={product.price}
                            />
                        ))}
          </div>
          <div className="row row-cols-5 m25">
          {All_product.slice(24, 30).map((product) => (
                            <Catalogue2
                                key={product.productId}
                                productId = {product.productId}
                                pmgsrc={product.pmgsrc}
                                title={product.title}
                                head={product.head}
                                price={product.price}
                            />
                        ))}
          </div>
          <div className="row row-cols-5 m25">
          {All_product.slice(30, 36).map((product) => (
                            <Catalogue2
                                key={product.productId}
                                productId = {product.productId}
                                pmgsrc={product.pmgsrc}
                                title={product.title}
                                head={product.head}
                                price={product.price}
                            />
                        ))}
          </div>
          <div className="last">
          
          {All_product.slice(36, 38).map((product) => (
                            <Catalogue2
                                key={product.productId}
                                productId = {product.productId}
                                pmgsrc={product.pmgsrc}
                                title={product.title}
                                head={product.head}
                                price={product.price}
                            />
                        ))}
          </div>
          </div>
          <Footer />
        </div>

        
      

     
   
            
          </>
       )
}
export default Items;